'use strict';

import * as THREE from 'three';
import EdgesHelper from './EdgesHelper.js';
import FluxCameras from './FluxCameras.js';
import FluxHelpers from './helpers/FluxHelpers.js';
import FluxRenderContext from './FluxRenderContext.js';
import CameraControls from './controls/CameraControls.js';
import SelectionControls from './controls/SelectionControls.js';
import * as controlsConstants from './controls/constants.js';
import * as constants from './constants.js';
import * as math from './utils/math.js';

/**
 * Class wrapping the three.js renderer with more build in functionality.
 * Context swapping lets a single OpenGL context and canvas be used for multiple renderers.
 * @class FluxRenderer
 * @param {Element} domParent The div container for the canvas
 * @param {Number} width     The width of the canvas
 * @param {Number} height    The height of the canvas
 * @param {Enumeration} selection Whether to enable user selection
 */
export default function FluxRenderer(domParent, width, height, selection) {
    this.id = FluxRenderer.nextId++;

    // Dom element that wraps the canvas
    this._domParent = domParent;

    // Current three.js geometry to render
    this._model = null;

    // The object containing the lights in the scene
    this._lights = null;

    // The context that contains the renderer and corresponds to a canvas
    // Create renderer for the first time.
    this._context = FluxRenderContext.getNewContext();

    this._width = width;
    this._height = height;

    this._shadowMapEnabled = false;

    this._createCacheCanvas(width, height);

    this.setClearColor(0xC5CDCC);

    this._cameras = new FluxCameras(width, height);
    this._helpers = new FluxHelpers();
    this._helpersScene = new THREE.Scene();
    this._helpersScene.add(this._helpers);

    // Scene containing geometry to be rendered in this viewport THREE.Scene
    this._scene = new THREE.Scene();

    this._controls = [];
    // Camera to be rendered with.Any instance of `THREE.Camera` can be set here.
    var _this = this;
    this._editorControls = this.addControls(CameraControls);
    this._editorControls.addEventListener(controlsConstants.Events.CHANGE, function(event) {
        _this._cameras.updateCamera(_this._width, _this._height);
        _this.dispatchEvent(event);
    });
    this._selectionControls = this.addControls(SelectionControls);
    this._selectionControls.setMode(selection);

    // Fog object for this viewport constructed from color and density
    this._fog = new THREE.FogExp2( this._clearColor, 0.0 );
    this._scene.fog = this._fog;

    // Scene containing edges geometry for hidden line rendering
    this._edgesScene = new THREE.Scene();
    this._edgesMode = EdgesHelper.EDGES_MODES.NONE;
}

FluxRenderer.prototype = Object.create( THREE.EventDispatcher.prototype );
FluxRenderer.prototype.constructor = FluxRenderer;

// Used for debugging issues with _setHost
FluxRenderer.nextId = 0;

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
 * Add a new plugin for user interaction controls.
 * See ViewportControls.js for more information.
 * @param  {ViewportControls} CustomControls A constructor that implements the controls interface.
 * @return {CustomControls}                The new instance
 */
FluxRenderer.prototype.addControls = function(CustomControls) {
    var customControls = new CustomControls(this._cameras.getCamera(), this._scene, this._domParent, this._width, this._height);
    var _this = this;
    customControls.addEventListener(controlsConstants.Events.CHANGE, function (event) {
        _this.dispatchEvent(event);
    });
    this._controls.push(customControls);
    return customControls;
};

/**
 * Define the material that is applied on selected objects
 * @param  {Object} data Flux json description of a material
 */
FluxRenderer.prototype.setSelectionMaterial = function(data) {
    this._selectionControls.setMaterial(data);
};

/**
 * Get the currently selected geometry
 * @return {THREE.Object3D}  Current selection
 */
FluxRenderer.prototype.getSelection = function() {
    return this._selectionControls.getSelection();
};

/**
 * set the currently selected geometry
 * @param {THREE.Object3D}  object New selection
 */
FluxRenderer.prototype.setSelection = function(object) {
    this._selectionControls.setSelection(object);
};

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
 * Restore the camera to a default location
 */
FluxRenderer.prototype.homeCamera = function() {
    this._editorControls.focus(this._helpers);
};

/**
* Focus the controls' current camera on an object.
* This function will focus on the union of object and all of it's visible children.
* @param  {THREE.Object3D} [obj] The scene object to focus on.
*/
FluxRenderer.prototype.focus = function(obj) {
    if (!this._model && !obj) return;
    if (obj) {
        this._editorControls.focus(obj);
    } else {
        var selection = this._selectionControls.getSelectionSphere();
        if (selection) {
            this._editorControls.focus(selection);
        } else {
            this._editorControls.focus(this._model);
        }
    }
    // Changing the controls here triggers a render
};

/**
 * Set the clear color (background) for WebGL canvas
 * @param {String|Number} color Hexadecimal or a CSS-style string
 * @param {Number} alpha Opacity
 */
FluxRenderer.prototype.setClearColor = function(color, alpha) {
    this._clearColor = new THREE.Color(color);
    this._clearAlpha = alpha;
};

/**
 * Whether to draw helpers (axis and grid)
 *
 * @param  {Boolean} visible False to hide them
 */
FluxRenderer.prototype.setHelpersVisible = function(visible) {
    this._helpersScene.visible = !!visible;
};

/**
 * Set up a new canvas used for storing a cached image.
 * The cache image is populated when this renderer loses it's context.
 * @private
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
 * Set which camera view to use (ex perspective, top etc.).
 * @param {FluxCameras.VIEWS} view The new view mode
 */
FluxRenderer.prototype.setView = function(view) {
    this._cameras.setView(view);
    this._cameras.updateCamera(this._width, this._height);
    // Update the camera for each controls object
    for (var i=0;i<this._controls.length;i++) {
        this._controls[i].setCamera(this._cameras.getCamera());
    }
    this._helpers.setView(view);
};

/**
 * Creates depth, normal materials and depth, normal render targets.
 * @private
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
* Render the scene with its geometry.
*/
FluxRenderer.prototype.doRender = function () {
    this._setHost();
    this._update();
    this._context.renderer.clear();
    this._context.renderer.render(this._scene, this._cameras.getCamera());
    this._context.renderer.render(this._edgesScene, this._cameras.getCamera());
    this._context.renderer.render(this._helpersScene, this._cameras.getCamera());
};

/**
 * Say whether there are any objects to render in the model
 * @return {Boolean} True if there are objects to render
 */
FluxRenderer.prototype.anyValidPrims = function() {
    return this._model ? this._model.children.length > 0 : false;
};

/**
 * Copy the image that is in the render canvas to this renderer's cache canvas.
 * This allows the rendered image to persist even when the renderer is not available.
 * This happens when the user moves the mouse away from this viewport to another one.
 * @private
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
 * @private
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
    this._context.renderer.shadowMap.enabled = this._shadowMapEnabled;
    // Move the THREE.WebGLRenderer's canvas under the new host
    this._domParent.appendChild(this._context.renderer.domElement);
};

/**
 * Set the WebGLRenderer parameters to match this renderer.
 * @private
 */
FluxRenderer.prototype._update = function() {
    this._context.renderer.autoClearColor = false;
    this._context.renderer.autoClearDepth = false;
    this._context.renderer.setSize(this._width, this._height);
    this._context.renderer.setClearColor(this._clearColor, this._clearAlpha);
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

    for (var i=0;i<this._controls.length;i++) {
        this._controls[i].setSize(this._width, this._height);
    }

    this._cacheCanvas.height = height;
    this._cacheCanvas.width = width;
};

var dir = new THREE.Vector3();
var l = new THREE.Vector3();
var perp = new THREE.Vector3();
var par = new THREE.Vector3();

/**
 * Enable shadows on the renderer, lights and objects.
 * This causes objects to cast shadow on their environment.
 */
FluxRenderer.prototype.activateShadows = function() {
    this._shadowMapEnabled = true;
    this._context.renderer.shadowMap.enabled = this._shadowMapEnabled;
    this._context.renderer.shadowMap.enabled = this._shadowMapEnabled;
    var sphere = math.getBoundingSphere(this._scene);

    this._scene.traverse(function (child) {
        if (child.type === 'Mesh') {
            child.castShadow = true;
            child.receiveShadow = true;
        }
        if (child.type === 'DirectionalLight') {
            var light = child;
            light.castShadow = true;
            dir.copy(sphere.center).sub(light.position);
            var d = dir.length();
            light.shadow.camera.near = -(d+sphere.radius);
            light.shadow.camera.far = d+sphere.radius;
            // Get the distance from the camera's axis to the center of the scene and use that
            // to set the dimensions of the shadow camera's clipping box
            l.set(0,0,0).sub(light.position).normalize();
            par.copy(dir).projectOnVector(l);
            perp.copy(dir).sub(par);
            var radius = sphere.radius + perp.length();

            light.shadow.camera.left = -radius;
            light.shadow.camera.right = radius;
            light.shadow.camera.top = radius;
            light.shadow.camera.bottom = -radius;

            light.shadow.bias = constants.SHADOW_DEFAULTS.BIAS;
            light.shadow.mapSize.width = constants.SHADOW_DEFAULTS.MAP_WIDTH;
            light.shadow.mapSize.height = constants.SHADOW_DEFAULTS.MAP_HEIGHT;
        }
    });
};

/**
 * Enable shadows on the renderer, lights and objects.
 * This causes objects to cast shadow on their environment.
 */
FluxRenderer.prototype.deactivateShadows = function() {
    this._shadowMapEnabled = false;
    this._context.renderer.shadowMap.enabled = this._shadowMapEnabled;
    this._scene.traverse(function (child) {
        if (child.type === 'Mesh') {
            child.castShadow = false;
            child.receiveShadow = false;
        }
        if (child.type === 'DirectionalLight') {
            var light = child;
            light.castShadow = false;
        }
    });
};

/**
 * Make serializable by pruning all references and building an object property tree
 * @return {Object} Data to stringify
 */
FluxRenderer.prototype.toJSON = function() {
    var serializableState = {
        cameras: this._cameras.toJSON(), // camera pos and view
        controls: this._editorControls.toJSON() // center point
    };
    //TODO(Kyle): Transition to serializing all controls objets
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
        //TODO(Kyle): Transition to deserializing all controls objets
        this._editorControls.fromJSON(state.controls);
    }
};
