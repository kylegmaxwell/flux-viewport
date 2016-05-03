'use strict';

import FluxCameras from './FluxCameras.js';
import FluxControls from './FluxControls.js';
import FluxHelpers from './FluxHelpers.js';
import FluxRenderContext from './FluxRenderContext.js';

// Size of the screen space axis rendered in corner of screen (pixels)
var COMPASS_SIZE = 64;

// Multipass Variables (private, singleton)
// Material that writes depth to pixels
var DEPTH_MATERIAL = new THREE.ShaderMaterial( {
    uniforms: THREE.UniformsUtils.clone( THREE.ShaderLib[ "depthRGBA" ].uniforms ),
    fragmentShader: THREE.ShaderLib[ "depthRGBA" ].fragmentShader,
    vertexShader: THREE.ShaderLib[ "depthRGBA" ].vertexShader,
    blending: THREE.NoBlending
} );

// Material that writes normal to pixels
var NORMAL_MATERIAL = new THREE.MeshNormalMaterial();

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
    // Dom element that wraps the canvas
    this._domParent = domParent;

    // Determines if scene helpers are rendered (grid / construction plane)
    this.showHelpers = true;

    // Whether to draw coordinate xyz axis at screen bottom left.
    this.showCompass = false;

    // Determines if multipass rendering (THREE.EffectsComposer) is used
    this.multipass = false;

    // TODO: Convert this to a list of passes rather than individual bools
    // Determines if ambient occlusion is used (requires multipass to be true)
    this.showOcclusion = false;

    // Determines if stencilbuffer shadows are used (requires multipass)
    this.showShadows = false;

    // The context that contains the renderer and corresponds to a canvas
    // Create renderer for the first time.
    this._context = FluxRenderContext.getNewContext();

    // EffectComposer object, used in multipass rendering
    this.composer = new THREE.EffectComposer(this._context.renderer);

    this.setSize(width, height);

    this._createCacheCanvas();

    this.update();

    this.controlsObj = new FluxControls(this._domParent, this.handleControlsChanged.bind(this));
    this.cameraObj = new FluxCameras();
    this.helpersObj = new FluxHelpers();
    // Camera to be rendered with.Any instance of `THREE.Camera` can be set here.
    this.camera = this.cameraObj.camera;
    this.controlsObj.setCamera(this.cameraObj.camera);
    this.helperScene = this.helpersObj.scene;

    // Scene containing geometry to be rendered in this viewport THREE.Scene
    this.scene = new THREE.Scene();
    // Scene containing edges geometry for hidden line rendering
    this.edgesScene = new THREE.Scene();

    this.clearColor = new THREE.Color(0xC5CDCC);

    // variables for stencilbuffer shadows
    // Scene holding shadow volumes = THREE.Scene
    this.shadowScene = new THREE.Scene();
    // Color of shadows (multiplied with ground) @type {THREE.Color}
    this.shadowColor = new THREE.Color(0.08, 0.0, 0.2);
    // Alpha opacity of shadow, where 1.0 is completely opaque
    this.shadowAlpha = 0.35;
    this.shadowBuilder = new THREE.ShadowBuilder(this.shadowLight);
    // Density of exponential fog. Generally on the order of 0.0001
    this.fogDensity = 0.0;
    // Fog object for this viewport. Holds the fog density (this.fogDensity) and color (this.clearColor). It is set and updated pre-render. THREE.FogExp2
    this._fog = new THREE.FogExp2( this.clearColor, this.fogDensity );

    this.addPasses();
};

/**
 * Callback that is called whenever the camera (controls) changes
 */
FluxRenderer.prototype.handleControlsChanged = function() {
    this.doRender();
};

/**
 * Set up a new canvas used for storing a cached image.
 * The cache image is populated when this renderer loses it's context.
 */
FluxRenderer.prototype._createCacheCanvas = function() {
    if (this.cacheCanvas) return;
    // The canvas used to store a cached image of the previous render when all the WebGL contexts are in use with other renderers
    this.cacheCanvas = document.createElement('canvas');
    this.cacheCanvas.width = this._width;
    this.cacheCanvas.height = this._height;
    this.cacheCanvas.style.position = 'absolute';
    this._domParent.appendChild(this.cacheCanvas);

    // Canvas2D used to store framebuffer pixels after renderer.domElement migration.
    this.ctx = this.cacheCanvas.getContext('2d');
};

/**
 * Destructor to prevent future rendering after being unloaded
 */
FluxRenderer.prototype.detach = function() {
    if (this._context && this._context.currentHost === this) {
        this._context.currentHost = null;
    }
};

//TODO(Kyle) Migrate edges rendering from Flux main repository
// /**
// * When the pointer to the scene is changed the passes need to be updated
// */
// FluxRenderer.prototype.sceneChanged = function () {
//     if (!this._renderPasses) return;
//     this._renderPasses.renderPass.scene = this.scene;
// };
//
// /**
// * When the pointer to the edgesScene changes, the render passes need to be updated.
// */
// FluxRenderer.prototype.edgesSceneChanged = function () {
//     if (!this._renderPasses) return;
//     this._renderPasses.edgesPass.scene = this.edgesScene;
//     this._renderPasses.edgesPass.enabled = !!this.edgesScene;
// };
//
// /**
// * When the view is changed, the passes need to point to the new camera
// */
// FluxRenderer.prototype.cameraChanged = function () {
//     if (!this._renderPasses) return;
//     this._renderPasses.renderPass.camera = this.camera;
//     this._renderPasses.helperPass.camera = this.camera;
//     this._renderPasses.edgesPass.camera = this.camera;
//     this._renderPasses.stencilPass.camera = this.camera;
// };

/**
 * Change the camera view
 * TODO(Kyle) this should be an enumeration
 * @param {String} view The new view mode
 */
FluxRenderer.prototype.setView = function(view) {
    this.view = view;
    this.cameraObj.setView(view);
    this.camera = this.cameraObj.camera;
    this.controlsObj.setCamera(this.camera);
    this.helpersObj.setView(view);
};

/**
* Creates depth, normal materials and depth, normal render targets.
*/
FluxRenderer.prototype._addRenderTargets = function() {
    // depth render target (uses THREE.js depth shader)
    this._depthTarget = new THREE.WebGLRenderTarget(
        window.innerWidth,
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
FluxRenderer.prototype.addPasses = function() {
    // _renderPasses dictionary for holding passes that need to be accessed or modified
    this._renderPasses = {};
    this._addRenderTargets();

    // diffuse render pass
    var renderPass = new THREE.RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    this._renderPasses.renderPass = renderPass;

    // helper render pass
    var helperPass = new THREE.RenderPass(this.helperScene, this.camera);
    helperPass.clear = false;
    this.composer.addPass(helperPass);
    this._renderPasses.helperPass = helperPass;
    helperPass.enabled = !!this.helperScene;

    var edgesPass = new THREE.RenderPass(this.edgesScene, this.camera);
    edgesPass.clear = false;
    this.composer.addPass(edgesPass);
    edgesPass.polygonOffset = true;
    edgesPass.enabled = !!this.edgesScene;
    this._renderPasses.edgesPass = edgesPass;

    // ambient occlusion pass
    var aoPass = new THREE.ShaderPass(THREE.SAOShader);
    // set uniform vars for ao pass
    aoPass.uniforms.tDepth.value = this._depthTarget;
    aoPass.uniforms.tNorm.value = this._normalTarget;
    aoPass.uniforms.projInv.value = new THREE.Matrix4();//TODO.getInverse(this.camera.projectionMatrix);
    aoPass.uniforms.onlyAO.value = false; // set to true to view only ambient occlusion
    aoPass.clear = true;
    aoPass.needsSwap = true;
    this._renderPasses.aoPass = aoPass;
    this.composer.addPass(aoPass);

    // stencil buffer shadow passes
    var copyPass = new THREE.ShaderPass( THREE.CopyShader );
    copyPass.needsSwap = false;
    this.composer.addPass( copyPass ); // copy AO to write buffer
    this._renderPasses.copyPass = copyPass;

    var stencilPass = new THREE.StencilPass( this.shadowScene, this.camera );
    this.composer.addPass( stencilPass ); // render shadow volumes to stencilbuffer
    this._renderPasses.stencilPass = stencilPass;

    var darkenPass = new THREE.ShaderPass( THREE.DarkenShader );
    darkenPass.uniforms.alpha.value = this.shadowAlpha;
    darkenPass.uniforms.color.value = new THREE.Vector3(this.shadowColor.r, this.shadowColor.g, this.shadowColor.b);
    darkenPass.needsSwap = false;
    this.composer.addPass( darkenPass ); // darken stencil areas
    this._renderPasses.darkenPass = darkenPass;

    var clearPass = new THREE.ClearStencilPass();
    clearPass.needsSwap = true;
    this.composer.addPass( clearPass ); // clear stencil
    this._renderPasses.clearPass = clearPass;

    // fast approximate antialiasing pass
    var FXAAPass = new THREE.ShaderPass(THREE.FXAAShader);
    FXAAPass.renderToScreen = true;
    this._renderPasses.FXAAPass = FXAAPass;
    this.composer.addPass(FXAAPass);
};

/**
* For multipass rendering, update which render passes are enabled.
* Based on user preferences some passes may be turned on or off.
* Also passes may be disabled if the corresponding scene is empty.
*/
FluxRenderer.prototype._updatePasses = function () {
    if (this.showOcclusion) {
    // populate depth target
    this.scene.overrideMaterial = DEPTH_MATERIAL;
    this._context.renderer.clearTarget( this._depthTarget, true, true );
    this._context.renderer.render( this.scene, this.camera, this._depthTarget );

    // populate normal target (set clearColor to (0,0,0) since
    // empty pixels do not have normals)
    this._context.renderer.setClearColor( 0x000000 );
    this.scene.overrideMaterial = NORMAL_MATERIAL;
    this._context.renderer.clearTarget( this._normalTarget, true, true );
    this._context.renderer.render( this.scene, this.camera, this._normalTarget );
    this.scene.overrideMaterial = null;
    this._context.renderer.setClearColor( this.clearColor );

    // update ambient occlusion shader uniforms
    var projInv = new THREE.Matrix4();
    projInv.getInverse(this.camera.projectionMatrix);
    this._renderPasses.aoPass.uniforms.projInv.value = projInv;
    this._renderPasses.aoPass.uniforms.size.value.set(this._width, this._height);
    this._renderPasses.aoPass.uniforms.onlyDiffuse.value = false;
    } else {
    this._renderPasses.aoPass.uniforms.onlyDiffuse.value = true;
    }

    if (this.showShadows) {
        this.composer.renderTarget1.stencilBuffer = true;
        this.composer.renderTarget2.stencilBuffer = true;
        this._renderPasses.copyPass.enabled = true;
        this._renderPasses.stencilPass.enabled = true;
        this._renderPasses.darkenPass.enabled = true;
        this._renderPasses.clearPass.enabled = true;
    } else {
        this.composer.renderTarget1.stencilBuffer = false;
        this.composer.renderTarget2.stencilBuffer = false;
        this._renderPasses.copyPass.enabled = false;
        this._renderPasses.stencilPass.enabled = false;
        this._renderPasses.darkenPass.enabled = false;
        this._renderPasses.clearPass.enabled = false;
    }

    // set antialiasing 'resolution' uniform to current screen resolution
    this._renderPasses.FXAAPass.uniforms.resolution.value.set(1.0/this._width, 1.0/this._height);

    if (this.showHelpers) {
        this._renderPasses.helperPass.enabled = true;
    } else {
        this._renderPasses.helperPass.enabled = false;
    }
};

/**
* Render the scene with its geometry and helpers.
*/
FluxRenderer.prototype.doRender = function () {
    this._setHost();
    this._context.renderer.setClearColor(this.clearColor);
    this._context.renderer.clear();
    this._fog.color = this.clearColor;
    this._fog.density = this.fogDensity;
    this.scene.fog = this._fog;
    this.camera.updateProjectionMatrix();

    if (this.multipass) {
        this._updatePasses();
        // render scene
        this.composer.render();
    } else {
        this._context.renderer.render(this.scene, this.camera);

        if (this.edgesScene) {
            this._context.renderer.render(this.edgesScene, this.camera);
        }

        if (this.showHelpers && this.helperScene) {
            this._context.renderer.render(this.helperScene, this.camera);
        }
        if (this.showCompass) {
            this._renderCompass();
        }
    }
};

/**
* Render the compass which is a screen space axis orientation widget.
*/
FluxRenderer.prototype._renderCompass = function() {
    this.helpersObj.compass.update(this.camera);
    this._context.renderer.setViewport(0, 0, COMPASS_SIZE, COMPASS_SIZE);
    this._context.renderer.render(this.helpersObj.compass.scene, this.helpersObj.compass.camera);
    this._context.renderer.setViewport(0, 0, this._width, this._height);
};

/**
* Set the light that is casting shadows.
* @param {THREE.Light} light      light object, position is saved
*/
FluxRenderer.prototype.setShadowLight = function(light) {
    this.shadowLight = light.position;
    this.shadowBuilder.updateLight(light.position);
};

/**
* Add a shadow to the scene.
* @param {THREE.Mesh} mesh        The mesh of the object casting a shadow
*/
FluxRenderer.prototype.addShadow = function(mesh) {
    var shadow = this.shadowBuilder.getShadowVolume(mesh);
    this.shadowScene.add(shadow);
};

/**
* Remove a shadow from the scene.
* @param  {THREE.Mesh} mesh       The mesh of the shadow to remove
*/
FluxRenderer.prototype.removeShadow = function(mesh) {
    var shadow = this.shadowBuilder.getShadowVolume(mesh);
    this.shadowScene.remove(shadow);
};

/**
 * Copy the image that is in the render canvas to this renderer's cache canvas.
 * This allows the rendered image to persist even when the renderer is not available.
 * This happens when the user moves the mouse away from this viewport to another one.
 */
FluxRenderer.prototype._cacheImageToCanvas = function () {
    this.doRender();
    this.ctx.drawImage(this._context.renderer.domElement, 0, 0, this.cacheCanvas.width, this.cacheCanvas.height);
};

/**
 * Get the canvas for use in QA scripts
 * @return {Canvas} WebGL canvas dom element
 */
FluxRenderer.prototype.getGlCanvas = function() {
    return this._context.renderer.domElement;
}

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
    this.update();
};

/**
 * Set renderer parameters
 */
FluxRenderer.prototype.update = function() {
    this._context.renderer.autoClear = false;
    this._context.renderer.autoClearColor = this.multipass;
    this._context.renderer.autoClearDepth = this.multipass;
    this._context.renderer.autoClearStencil = false;
    this._context.renderer.gammaInput = false;
    this._context.renderer.gammaOutput = false;
};

/**
 * Set the size of the renderer and composer
 * @param {Number} width  The canvas width in pixels
 * @param {Number} height The canvas height in pixels
 */
FluxRenderer.prototype.setSize = function(width, height) {
    if (width <= 0 || height <= 0 || (width === this._width && height === this.height)) return;
    this._width = width;
    this._height = height;

    if (!this._context.renderer) return;
    this._context.renderer.setSize(this._width, this._height);
    this.composer.setSize(this._width, this._height);
};
