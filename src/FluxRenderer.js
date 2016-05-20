'use strict';

import EdgesHelper from './EdgesHelper.js';
import FluxCameras from './FluxCameras.js';
import FluxHelpers from './FluxHelpers.js';
import FluxRenderContext from './FluxRenderContext.js';

// Multipass Variables (private, singleton)
// Material that writes depth to pixels
var DEPTH_MATERIAL = new THREE.ShaderMaterial( {
    uniforms: THREE.UniformsUtils.clone( THREE.ShaderLib.depthRGBA.uniforms ),
    fragmentShader: THREE.ShaderLib.depthRGBA.fragmentShader,
    vertexShader: THREE.ShaderLib.depthRGBA.vertexShader,
    blending: THREE.NoBlending
} );

// Material that writes normal to pixels
var NORMAL_MATERIAL = new THREE.MeshNormalMaterial();

// Used for debugging issues with _setHost
FluxRenderer.nextId = 0;

/**
 * Class wrapping the renderer with custom passes and context swapping.
 *
 * Multipass rendering uses GPU shaders to accomplish ambient obscurance
 * and stencil buffer shadows.
 *
 * Context swapping lets a single OpenGL context and canvas be used for multiple renderers.
 *
 * @param {Element} domParent The div container for the canvas
 * @param {Number} width     The width of the canvas
 * @param {Number} height    The height of the canvas
 */
export default function FluxRenderer(domParent, width, height) {
    this.id = FluxRenderer.nextId++;

    // Dom element that wraps the canvas
    this._domParent = domParent;

    // Determines if multipass rendering (THREE.EffectsComposer) is used
    this._multipass = false;

    // TODO: Convert this to a list of passes rather than individual bools
    // Determines if ambient occlusion is used (requires multipass to be true)
    this._showOcclusion = true;

    // Determines if stencilbuffer shadows are used (requires multipass)
    this._showShadows = false;

    // Current three.js geometry to render
    this._model = null;

    // The object containing the lights in the scene
    this._lights = null;

    // The context that contains the renderer and corresponds to a canvas
    // Create renderer for the first time.
    this._context = FluxRenderContext.getNewContext();

    // EffectComposer object, used in multipass rendering
    this._composer = new THREE.EffectComposer(this._context.renderer);

    this._width = width;
    this._height = height;

    this._createCacheCanvas(width, height);

    this.setClearColor(0xC5CDCC);

    this._cameras = new FluxCameras(width, height);
    this._helpers = new FluxHelpers();
    this._helpersScene = new THREE.Scene();
    this._helpersScene.add(this._helpers);

    // Camera to be rendered with.Any instance of `THREE.Camera` can be set here.
    this._initControls();

    // Scene containing geometry to be rendered in this viewport THREE.Scene
    this._scene = new THREE.Scene();
    // this._scene.add(this._helpers);

    // Fog object for this viewport constructed from color and density
    this._fog = new THREE.FogExp2( this._clearColor, 0.0 );
    this._scene.fog = this._fog;

    // Scene containing edges geometry for hidden line rendering
    this._edgesScene = new THREE.Scene();
    this._edgesMode = EdgesHelper.EDGES_MODES.NONE;

    // variables for stencilbuffer shadows
    // Scene holding shadow volumes = THREE.Scene
    this._shadowScene = new THREE.Scene();
    // Color of shadows (multiplied with ground) @type {THREE.Color}
    this._shadowColor = new THREE.Color(0.08, 0.0, 0.2);
    // Alpha opacity of shadow, where 1.0 is completely opaque
    this._shadowAlpha = 0.35;
    this._shadowBuilder = new THREE.ShadowBuilder(this._shadowLight);

    this._addPasses();
}

FluxRenderer.prototype = Object.create( THREE.EventDispatcher.prototype );
FluxRenderer.prototype.constructor = FluxRenderer;

/**
 * Name of the event fired when the camera changes
 * @type {String}
 */
FluxRenderer.CHANGE_EVENT = 'change';

/**
 * Set the lights used to illuminate the scene.
 * @param {THREE.Object3D} lights Object with lights as children
 */
FluxRenderer.prototype.setLights = function(lights) {
    if (this._lights) {
        this._scene.remove(this._lights);
    }
    this._lights = lights;
    this._scene.add(this._lights);
};

/**
 * Remove the geometry objects from the THREE registry so they can be garbage collected
 * @param  {THREE.Object3D} obj The object being removed
 */
function _removeGeometries(obj) {
    if (obj.geometry) {
        obj.geometry.dispose();
    }
}

/**
 * Remove an object from the scene and clean up memory
 * @param  {THREE.Scene} scene Scene containing the model
 * @param  {THREE.Object3D} model The geometry to remove
 */
function _deleteFromScene(scene, model) {
    if (!model || !scene) return;
    scene.remove(model);
    model.traverse(_removeGeometries);
}

/**
 * Set the object to render
 * Replaces old render contents
 * @param {THREE.Object3D} model What to render
 */
FluxRenderer.prototype.setModel = function(model) {
    if (this._model) {
        _deleteFromScene(this._scene, this._model);
        _deleteFromScene(this._edgesScene, this._model.edgesHelper);
    }
    this._model = model;
    if (this._model) {
        this._scene.add(this._model);
        if (EdgesHelper.AddEdges(this._model, this._edgesMode)) {
            this._edgesScene.add(this._model.edgesHelper);
        }
    }
};

/**
 * Set the edges rendering mode for hidden line rendering
 * @param  {EdgesHelper.EDGES_MODES} mode Whether to render front, back, both or none
 */
FluxRenderer.prototype.setEdgesMode = function(mode) {
    this._edgesMode = mode;
};

/**
 * When the camera controls change make sure to update the camera
 */
FluxRenderer.prototype._initControls = function() {
    if (this._controls) this._controls.enabled = false;
    //TODO(Kyle): rewrite EditorControls to allow camera to be changed
    this._controls = new THREE.EditorControls(this._cameras.getCamera(), this._domParent);
    var _this = this;
    this._controls.addEventListener(FluxRenderer.CHANGE_EVENT, function(event) {
        _this._cameras.updateCamera(_this._width, _this._height);
        _this.dispatchEvent( event );
    });
};

/**
 * Restore the camera to a default location
 */
FluxRenderer.prototype.homeCamera = function() {
    this._controls.focus(this._helpers, true);
};

/**
* Focus the controls' current camera on an object.
* This function will focus on the union of object and all of it's visible children.
* @param  {THREE.Object3D} object The scene object to focus on.
*/
FluxRenderer.prototype.focus = function() {
    if (!this._model) return;
    this._controls.focus(this._model, true);
    // Changing the controls here triggers a render
};

/**
 * Set the clear color (background) for WebGL canvas
 * @param {String|Number} color Hexadecimal or a CSS-style string
 */
FluxRenderer.prototype.setClearColor = function(color) {
    this._clearColor = new THREE.Color(color);
};

/**
 * Set up a new canvas used for storing a cached image.
 * The cache image is populated when this renderer loses it's context.
 * @param {Number} width The width of the canvas
 * @param {Number} height The height of the canvas
 */
FluxRenderer.prototype._createCacheCanvas = function(width, height) {
    if (this._cacheCanvas) return;
    // The canvas used to store a cached image of the previous render when all the WebGL contexts are in use with other renderers
    this._cacheCanvas = document.createElement('canvas');
    this._cacheCanvas.width = width;
    this._cacheCanvas.height = height;
    this._cacheCanvas.style.position = 'absolute';
    this._cacheCanvas.style['user-select'] = 'none';
    this._cacheCanvas.style['-webkit-user-select'] = 'none';
    this._domParent.appendChild(this._cacheCanvas);

    // Canvas2D used to store framebuffer pixels after renderer.domElement migration.
    this.ctx = this._cacheCanvas.getContext('2d');
};

/**
 * Destructor to prevent future rendering after being unloaded
 */
FluxRenderer.prototype.detach = function() {
    if (this._context && this._context.currentHost === this) {
        this._context.currentHost = null;
    }
};

/**
 * Change the camera view
 * @param {String} view The new view mode
 */
FluxRenderer.prototype.setView = function(view) {
    this._cameras.setView(view);
    this._cameras.updateCamera(this._width, this._height);
    this._initControls();
    this._helpers.setView(view);

    if (!this._renderPasses) return;
    this._renderPasses.renderPass.camera = this._cameras.getCamera();
    this._renderPasses.edgesPass.camera = this._cameras.getCamera();
    this._renderPasses.helperPass.camera = this._cameras.getCamera();
    this._renderPasses.stencilPass.camera = this._cameras.getCamera();
};

/**
* Creates depth, normal materials and depth, normal render targets.
*/
FluxRenderer.prototype._addRenderTargets = function() {
    // depth render target (uses THREE.js depth shader)
    this._depthTarget = new THREE.WebGLRenderTarget(
        window.innerWidth, //TODO(kyle) Why does this use window!?
        window.innerHeight,
        {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat
        }
    );

    // normal render target
    this._normalTarget = this._depthTarget.clone();
};

/**
* Adds enabled passes to the EffectComposer
*
* Always begins with a render pass
* Always ends with an antialiasing (FXAA) pass
*
* May include the following: Ambient occlusion, Shadows
*/
FluxRenderer.prototype._addPasses = function() {
    // _renderPasses dictionary for holding passes that need to be accessed or modified
    this._renderPasses = {};
    this._addRenderTargets();

    // diffuse render pass
    var renderPass = new THREE.RenderPass(this._scene, this._cameras.getCamera());
    this._composer.addPass(renderPass);
    this._renderPasses.renderPass = renderPass;

    var edgesPass = new THREE.RenderPass(this._edgesScene, this._cameras.getCamera());
    edgesPass.clear = false;
    this._composer.addPass(edgesPass);
    edgesPass.polygonOffset = true;
    edgesPass.enabled = !!this._edgesScene;
    this._renderPasses.edgesPass = edgesPass;

    // helper render pass
    var helperPass = new THREE.RenderPass(this._helpersScene, this._cameras.getCamera());
    helperPass.clear = false;
    this._composer.addPass(helperPass);
    this._renderPasses.helperPass = helperPass;
    helperPass.enabled = true;

    // ambient occlusion pass
    var aoPass = new THREE.ShaderPass(THREE.SAOShader);
    // set uniform vars for ao pass
    aoPass.uniforms.tDepth.value = this._depthTarget;
    aoPass.uniforms.tNorm.value = this._normalTarget;
    aoPass.uniforms.projInv.value = new THREE.Matrix4();//TODO.getInverse(this._cameras.getCamera().projectionMatrix);
    aoPass.uniforms.onlyAO.value = false; // set to true to view only ambient occlusion
    aoPass.clear = true;
    aoPass.needsSwap = true;
    this._renderPasses.aoPass = aoPass;
    this._composer.addPass(aoPass);

    // stencil buffer shadow passes
    var copyPass = new THREE.ShaderPass( THREE.CopyShader );
    copyPass.needsSwap = false;
    this._composer.addPass( copyPass ); // copy AO to write buffer
    this._renderPasses.copyPass = copyPass;

    var stencilPass = new THREE.StencilPass( this._shadowScene, this._cameras.getCamera());
    this._composer.addPass( stencilPass ); // render shadow volumes to stencilbuffer
    this._renderPasses.stencilPass = stencilPass;

    var darkenPass = new THREE.ShaderPass( THREE.DarkenShader );
    darkenPass.uniforms.alpha.value = this._shadowAlpha;
    darkenPass.uniforms.color.value = new THREE.Vector3(this._shadowColor.r, this._shadowColor.g, this._shadowColor.b);
    darkenPass.needsSwap = false;
    this._composer.addPass( darkenPass ); // darken stencil areas
    this._renderPasses.darkenPass = darkenPass;

    var clearPass = new THREE.ClearStencilPass();
    clearPass.needsSwap = true;
    this._composer.addPass( clearPass ); // clear stencil
    this._renderPasses.clearPass = clearPass;

    // fast approximate antialiasing pass
    var FXAAPass = new THREE.ShaderPass(THREE.FXAAShader);
    FXAAPass.renderToScreen = true;
    this._renderPasses.FXAAPass = FXAAPass;
    this._composer.addPass(FXAAPass);
};

/**
* For multipass rendering, update which render passes are enabled.
* Based on user preferences some passes may be turned on or off.
* Also passes may be disabled if the corresponding scene is empty.
*/
FluxRenderer.prototype._updatePasses = function () {
    if (this._showOcclusion) {
        // populate depth target
        this._scene.overrideMaterial = DEPTH_MATERIAL;
        this._context.renderer.clearTarget( this._depthTarget, true, true );
        this._context.renderer.render( this._scene, this._cameras.getCamera(), this._depthTarget );

        // populate normal target (set clearColor to (0,0,0) since
        // empty pixels do not have normals)
        this._context.renderer.setClearColor( 0x000000 );
        this._scene.overrideMaterial = NORMAL_MATERIAL;
        this._context.renderer.clearTarget( this._normalTarget, true, true );
        this._context.renderer.render( this._scene, this._cameras.getCamera(), this._normalTarget );
        this._scene.overrideMaterial = null;
        this._context.renderer.setClearColor( this._clearColor );

        // update ambient occlusion shader uniforms
        var projInv = new THREE.Matrix4();
        projInv.getInverse(this._cameras.getCamera().projectionMatrix);
        this._renderPasses.aoPass.uniforms.projInv.value = projInv;
        this._renderPasses.aoPass.uniforms.size.value.set(this._width, this._height);
        this._renderPasses.aoPass.uniforms.onlyDiffuse.value = false;
    } else {
        this._renderPasses.aoPass.uniforms.onlyDiffuse.value = true;
    }

    if (this._showShadows) {
        this._composer.renderTarget1.stencilBuffer = true;
        this._composer.renderTarget2.stencilBuffer = true;
        this._renderPasses.copyPass.enabled = true;
        this._renderPasses.stencilPass.enabled = true;
        this._renderPasses.darkenPass.enabled = true;
        this._renderPasses.clearPass.enabled = true;
    } else {
        this._composer.renderTarget1.stencilBuffer = false;
        this._composer.renderTarget2.stencilBuffer = false;
        this._renderPasses.copyPass.enabled = false;
        this._renderPasses.stencilPass.enabled = false;
        this._renderPasses.darkenPass.enabled = false;
        this._renderPasses.clearPass.enabled = false;
    }

    // set antialiasing 'resolution' uniform to current screen resolution
    this._renderPasses.FXAAPass.uniforms.resolution.value.set(1.0/this._width, 1.0/this._height);
};

/**
* Render the scene with its geometry.
*/
FluxRenderer.prototype.doRender = function () {
    this._setHost();
    this._update();
    this._context.renderer.clear();
    if (this._multipass) {
        this._updatePasses();
        // render scene
        this._composer.render();
    } else {
        this._context.renderer.render(this._scene, this._cameras.getCamera());
        this._context.renderer.render(this._edgesScene, this._cameras.getCamera());
        this._context.renderer.render(this._helpersScene, this._cameras.getCamera());
    }
};

/**
 * Say whether there are any objects to render in the model
 * @return {Boolean} True if there are objects to render
 */
FluxRenderer.prototype.anyValidPrims = function() {
    return this._model ? this._model.children.length > 0 : false;
};

/**
* Set the light that is casting shadows.
* @param {THREE.Light} light      light object, position is saved
*/
FluxRenderer.prototype.setShadowLight = function(light) {
    // Enable shadows on this renderer
    this._multipass = true;
    this._showShadows = true;

    this._shadowLight = light.position;
    this._shadowBuilder.updateLight(light.position);
};

/**
 * Add the shadows for everything in the current model
 */
FluxRenderer.prototype.addShadows = function() {
    var _this = this;
    this._model.traverse(function (obj) {
        if (obj && obj.geometry) {
            _this.addShadow(obj);
        }
    });
};
/**
* Add a shadow to the scene.
* @param {THREE.Mesh} mesh        The mesh of the object casting a shadow
*/
FluxRenderer.prototype.addShadow = function(mesh) {
    var shadow = this._shadowBuilder.getShadowVolume(mesh);
    this._shadowScene.add(shadow);
};

/**
* Remove a shadow from the scene.
* @param  {THREE.Mesh} mesh       The mesh of the shadow to remove
*/
FluxRenderer.prototype.removeShadow = function(mesh) {
    var shadow = this._shadowBuilder.getShadowVolume(mesh);
    this._shadowScene.remove(shadow);
};

/**
 * Copy the image that is in the render canvas to this renderer's cache canvas.
 * This allows the rendered image to persist even when the renderer is not available.
 * This happens when the user moves the mouse away from this viewport to another one.
 */
FluxRenderer.prototype._cacheImageToCanvas = function () {
    this.doRender();
    this.ctx.drawImage(this._context.renderer.domElement, 0, 0, this._cacheCanvas.width, this._cacheCanvas.height);
};

/**
 * Get the canvas for use in QA scripts
 * @return {Canvas} WebGL canvas dom element
 */
FluxRenderer.prototype.getGlCanvas = function() {
    return this._context.renderer.domElement;
};

/**
* Migrate renderer.domElement to this host if necessary
* and copy framebuffer into Canvas2D element of the previous host.
*/
FluxRenderer.prototype._setHost = function() {
    if (this === this._context.currentHost) return;
    if (this._context.currentHost) {
        // Copy the image from domElement (THREE's interactive canvas)
        // to the 2D context for this element's canvas
        // This image will remain up until the user interacts with the old viewport again
        this._context.currentHost._cacheImageToCanvas();
    }
    this._context.currentHost = this;
    this.setSize(this._width, this._height);
    // Move the THREE.WebGLRenderer's canvas under the new host
    this._domParent.appendChild(this._context.renderer.domElement);
};

/**
 * Set the WebGLRenderer parameters to match this renderer.
 */
FluxRenderer.prototype._update = function() {
    this._context.renderer.autoClearColor = this._multipass;
    this._context.renderer.autoClearDepth = this._multipass;
    this._context.renderer.setSize(this._width, this._height);
    this._context.renderer.setClearColor(this._clearColor);
};

/**
 * Set the size of things that are per viewport.
 * @param {Number} width  The canvas width in pixels
 * @param {Number} height The canvas height in pixels
 */
FluxRenderer.prototype.setSize = function(width, height) {
    if (width <= 0 || height <= 0 || (width === this._width && height === this.height)) return;
    this._width = width;
    this._height = height;

    this._cameras.updateCamera(this._width, this._height);

    this._composer.setSize(this._width, this._height);

    this._cacheCanvas.height = height;
    this._cacheCanvas.width = width;
};

/**
 * Make serializable by pruning all references and building an object property tree
 * @return {Object} Data to stringify
 */
FluxRenderer.prototype.toJSON = function() {
    var serializableState = {
        cameras: this._cameras.toJSON(), // camera pos and view
        controls: this._controls.toJSON() // center point
    };
    return serializableState;
};

/**
 * Take a data object and use it to update the internal state
 * @param  {Object} state The properties to set
 */
FluxRenderer.prototype.fromJSON = function(state) {
    if (!state) return;
    if (state.cameras != null) {
        this.setView(state.cameras.view);
        this._cameras.fromJSON(state.cameras);
    }
    if (state.controls) {
        this._controls.fromJSON(state.controls);
    }
};
