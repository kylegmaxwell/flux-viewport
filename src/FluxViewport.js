'use strict';

import EdgesHelper from './EdgesHelper.js';
import FluxRenderer from './FluxRenderer.js';
import FluxCameras from './FluxCameras.js';
import FluxGeometryBuilder from './FluxGeometryBuilder.js';
import FluxJsonToThree from 'flux-json-to-three/build/index.common.js';

/**
 * UI widget to render 3D geometry
 * @param {Element}   domParent     The div container for the canvas
 * @param {Object}    optionalParams Object containing all other parameters
 * @param {Number}    optionalParams.width         The width of the canvas
 * @param {Number}    optionalParams.height        The height of the canvas
 * @param {String}    optionalParams.tessUrl       The url for making brep tessellation requests
 * @param {String}    optionalParams.iblUrl        The url to get textures for image based lighting
 */
export default function FluxViewport (domParent, optionalParams) {

    var width;
    var height;
    var tessUrl;
    var iblUrl;
    if (optionalParams) {
        width = optionalParams.width;
        height = optionalParams.height;
        tessUrl = optionalParams.tessUrl;
        iblUrl = optionalParams.iblUrl;
    }

    var renderWidth = 100;//px
    if (width == null) {
        renderWidth = domParent.clientWidth;
    } else {
        renderWidth = Math.max(renderWidth, width);
    }

    var renderHeight = 100;//px
    if (height == null) {
        renderHeight = domParent.clientHeight;
    } else {
        renderHeight = Math.max(renderHeight, height);
    }

    if (!domParent) {
        throw new Error('domParent must be specified to FluxViewport');
    }

    this._geometryBuilder = new FluxGeometryBuilder(tessUrl, iblUrl);

    this._renderer = new FluxRenderer(domParent, renderWidth, renderHeight);
    this._initCallback();

    // Make sure to render on mouse over in case the renderer has swapped contexts
    var _this = this;
    domParent.addEventListener('mouseenter', function(){
        _this.render();
    });

    // Cache of the Flux entity objects for downloading
    this._entities = null;

    // Track the last blob that was downloaded for memory cleanup
    this._downloadUrl = null;

    // Whether the viewport is locked on the current geometry and will automatically focus on new geometry when updating the entities
    this._autoFocus = true;
}

FluxViewport.prototype = Object.create( THREE.EventDispatcher.prototype );
FluxViewport.prototype.constructor = FluxViewport;

/**
 * Enumeration of edges rendering modes
 * @return {Object} enumeration
 */
FluxViewport.getEdgesModes = function () {
    return EdgesHelper.EDGES_MODES;
};

/**
 * Name of the event fired when the camera changes
 * @return {String} Event name
 */
FluxViewport.getChangeEvent = function () {
    return FluxRenderer.CHANGE_EVENT;
};

/**
 * Determines whether the entity or list of entities contains geometry
 * @param  {Array.<Object>|Object}  entities Geometry data
 * @return {Boolean}          True for objects/lists containing geometry
 */
FluxViewport.isKnownGeom = function (entities) {
    return FluxJsonToThree.isKnownGeom(entities);
};

//---- Class member functions

/**
 * Set up the callback to render when the camera changes
 */
FluxViewport.prototype._initCallback = function() {
    var _this = this;
    this._renderer.addEventListener(FluxRenderer.CHANGE_EVENT, function(event) {
        _this.dispatchEvent( event );
        _this.render();
    });
};

/**
 * Actually render the geometry!
 */
FluxViewport.prototype.render = function() {
    this._renderer.doRender();
};

/**
 * Focus the camera on the current geometry
 */
FluxViewport.prototype.focus = function() {
    this._renderer.focus();
};

/**
 * Restore the camera to a default location
 */
FluxViewport.prototype.homeCamera = function() {
    this._renderer.homeCamera();
};

/**
 * Set the viewport geomtery from a JSON string
 * @param {String} dataString The geometry to render formatted as JSON containing Flux entities
 * @return {Object} Promise to resolve after geometry is created
 */
FluxViewport.prototype.setGeometryJson = function(dataString) {
    var dataObj = JSON.parse(dataString);
    return this.setGeometryEntity(dataObj);
};

/**
 * Set the viewport geometry from a data object containing Flux entities
 * @param {Object} data The geometry entities to render
 * @return {Object} Promise to resolve after geometry is created
 */
FluxViewport.prototype.setGeometryEntity = function(data) {
    var _this = this;
    // The flow sends the same value twice, so we assume that requests
    // sent while there is already one pending are redundant
    // TODO(Kyle): This is a hack that we can remove once there are not always duplicate requests
    return new Promise(function (resolve, reject) {
        if (!_this._geometryBuilder.running) {
            return _this._geometryBuilder.convert(data).then(function (results) {
                _this._entities = results.meshIsEmpty() ? null : data;
                _this._updateModel(results.getMesh());
                resolve(results);
            });
        } else {
            reject(new Error('Already running. You can only convert one entity at a time.'));
        }
    });
};

/**
 * Change the geometry being rendered
 * @param  {THREE.Object3D} newModel The new model to render
 * @param  {THREE.Object3D} oldModel The old model to remove
 */
FluxViewport.prototype._updateModel = function(newModel) {
    this._renderer.setModel(newModel);
    if (this._autoFocus) {
        this.focus(); // changing the controls will trigger a render
        this._autoFocus = false;
    } else {
        this.render();
    }
};

/**
 * Make serializable by pruning all references and building an object property tree
 * @return {Object} Data to stringify
 */
FluxViewport.prototype.toJSON = function() {
    var serializableState = {
        entities: this._entities,
        renderer: this._renderer.toJSON(),
        autoFocus: this._autoFocus
    };
    return serializableState;
};

/**
 * Take a data object and use it to update the viewport's internal state
 * Warning this is async when it sets entities
 * @param  {Object} state The properties to set
 * @return {Promise} Completion promise
 */
FluxViewport.prototype.fromJSON = function(state) {
    if (!state) return Promise.resolve();
    var _this = this;
    if (state.entities) {
        return this.setGeometryEntity(state.entities).then(function () {
            _this.fromJSONHelper(state);
        });
    } else {
        this.fromJSONHelper(state);
        return Promise.resolve();
    }
};

/**
 * Rehydrate everything but the entities.
 * @param  {Object} state Parameter data
 */
FluxViewport.prototype.fromJSONHelper = function(state) {
    if (state.renderer != null) {
        this._renderer.fromJSON(state.renderer);
    }
    if (state.autoFocus != null) {
        this._autoFocus = state.autoFocus;
    }
};

/**
 * Download all the geometry settings and raster image that are the state of this viewport.
 * Used for quality assurance testing.
 * @param  {String} prefix File name prefix for download path
 */
FluxViewport.prototype.downloadState = function(prefix) {
    this._downloadJson(this.toJSON(), prefix);
    this._download(this._renderer.getGlCanvas().toDataURL('image/png'), prefix+'.png');
};

/**
 * Helper function to download some data from a url
 * @param  {DOMString} dataUrl  The url containing the data to download
 * @param  {String} filename The name of the file when it downloads
 */
FluxViewport.prototype._download = function(dataUrl, filename) {
    var a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    a.click();
};

/**
 * Create a link and a temporary blob url to use to download from.
 * @param  {Object} data   The serializable data to write as JSON
 * @param  {String} prefix The file name prefix
 */
FluxViewport.prototype._downloadJson = function(data, prefix) {
    if (this._downloadUrl) {
        window.URL.revokeObjectURL(this._downloadUrl);
    }
    var jsonString = JSON.stringify(data, null, 2);
    this._downloadUrl = window.URL.createObjectURL(new Blob([jsonString]), {type: 'text/json'});
    this._download(this._downloadUrl, prefix+'.json');
};

/**
 * Create a default 3 light rig on the renderer's scene.
 */
FluxViewport.prototype.setupDefaultLighting = function() {
    var lighting = new THREE.Object3D();
    lighting.name = 'Lights';

    //TODO(Kyle) non static lighting
    this._keyLight = new THREE.DirectionalLight();
    this._keyLight.position.set(60, 80, 50);
    this._keyLight.intensity = 0.95;
    lighting.add(this._keyLight);

    var backLight = new THREE.DirectionalLight();
    backLight.position.set(-250, 50, -200);
    backLight.intensity = 0.4;
    lighting.add(backLight);

    var fillLight = new THREE.DirectionalLight();
    fillLight.position.set(-500, -500, 0);
    fillLight.intensity = 0.7;
    lighting.add(fillLight);

    this._renderer.setLights(lighting);
};

//---- Pass through functions

/**
 * Set the size of the render canvas
 * @param {Number} width  Pixels
 * @param {Number} height Pixels
 */
FluxViewport.prototype.setSize = function(width, height) {
    this._renderer.setSize(width, height);
};

/**
 * Set the background color of the render canvas
 * @param {THREE.color} color Background color
 */
FluxViewport.prototype.setClearColor = function(color) {
    this._renderer.setClearColor(color);
};

/**
 * Set which camera view to use (ex perspective, top etc.)
 * @param {String} view Name of the camera view to use
 */
FluxViewport.prototype.setView = function(view) {
    this._renderer.setView(view);
    this.focus();
};

/**
 * Return the views enumeration
 * @return {Object} Enumeration of view options for cameras
 */
FluxViewport.getViews = function() {
    return FluxCameras.VIEWS;
};

/**
 * Set the density of the exponential fog. Generally on the order of 0.0001
 * @param {Number} density How much fog
 */
FluxViewport.prototype.setFogDensity = function(density) {
    this._renderer._fog.density = density;
};

/**
 * Set the url of the tessellation service.
 *
 * This is required for rendering of breps.
 *
 * @param {String} newUrl The url of the tessellation server
 */
FluxViewport.prototype.setTessUrl = function(newUrl) {
    this._geometryBuilder._parasolidUrl = newUrl;
};

/**
 * Set whether the geometry should focus the geometry when it is changed
 * @param {Boolean} focus Whether to auto focus
 */
FluxViewport.prototype.setAutoFocus = function(focus) {
    this._autoFocus = focus;
};

/**
 * Get whether the geometry should focus the geometry when it is changed
 * @return {Boolean} Whether to auto focus
 */
FluxViewport.prototype.getAutoFocus = function() {
    return this._autoFocus;
};

/**
 * Set the edges rendering mode for hidden line rendering
 * @param  {FluxViewport.EDGES_MODES} mode Whether to render front, back, both or none
 */
FluxViewport.prototype.setEdgesMode = function(mode) {
    this._renderer.setEdgesMode(mode);
};

/**
 * Get the canvas for use in QA scripts
 * @return {Canvas} WebGL canvas dom element
 */
FluxViewport.prototype.getGlCanvas = function() {
    return this._renderer.getGlCanvas();
};

/**
 * Turn on shadow rendering.
 * Warning: This is an experimental feature that may not work.
 */
FluxViewport.prototype.activateShadows = function() {
    if (!this._keyLight) return;

    this._renderer.setShadowLight(this._keyLight);
    this._renderer.addShadows();
};
