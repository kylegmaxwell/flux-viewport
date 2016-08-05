'use strict';

import THREE from 'three';
import EdgesHelper from './EdgesHelper.js';
import FluxRenderer from './FluxRenderer.js';
import FluxCameras from './FluxCameras.js';
import * as FluxJsonToThree from 'flux-json-to-three/src/index.js';

/**
 * UI widget to render 3D geometry.
 * This class provides all the interface you need to add the flux web
 * viewer to your SDK app. This allows you to interpret Flux json data
 * and render that geometry. You may also create any number of viewports
 * and they will share the finite number of WebGL contexts available
 * from the browser.<br>
 * Note: If you are using Flux materials that have the parameter roughness
 * set then you will need to configure your server to have a content security
 * policy that allows content from https://object-library.storage.googleapis.com
 * so that our standard texture images can be loaded.
 * For more information: https://content-security-policy.com
 * @class FluxViewport
 * @param {Element}   domParent     The div container for the canvas
 * @param {Object}    optionalParams Object containing all other parameters
 * @param {Number}    optionalParams.width         The width of the canvas
 * @param {Number}    optionalParams.height        The height of the canvas
 * @param {String}    optionalParams.tessUrl       The url for making brep tessellation requests (overrides projectId) (deprecated)
 * @param {String}    optionalParams.projectId     Id has for a flux project used to make tessellation requests
 * @param {String}    optionalParams.token         The current flux auth token
 */
export default function FluxViewport (domParent, optionalParams) {
    var width;
    var height;
    var tessUrl;
    var token;
    if (optionalParams) {
        width = optionalParams.width;
        height = optionalParams.height;
        if (optionalParams.tessUrl) {
            tessUrl = optionalParams.tessUrl;
        } else if (optionalParams.projectId) {
            tessUrl = _getTessUrl(optionalParams.projectId);
        }
        token = optionalParams.token;
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

    this._sceneBuilder = new FluxJsonToThree.SceneBuilder(tessUrl, token);

    this._renderer = new FluxRenderer(domParent, renderWidth, renderHeight);
    this._initCallback();

    // Make sure to render on mouse over in case the renderer has swapped contexts
    var _this = this;
    domParent.addEventListener('mouseenter', function(){
        _this.render();
    });

    // Cache of the Flux entity objects for downloading
    this._entities = null;

    this._latestSceneResults = null;

    // Track the last blob that was downloaded for memory cleanup
    this._downloadUrl = null;

    // Whether the viewport is locked on the current geometry and will automatically focus on new geometry when updating the entities
    this._autoFocus = true;

    // Track whether geometry is being converted, so we don't try two at once
    this.running = false;
}

FluxViewport.prototype = Object.create( THREE.EventDispatcher.prototype );
FluxViewport.prototype.constructor = FluxViewport;

/**
 * Build the url to use for tessellation requests to flux.
 * @private
 * @param  {String} projectId Hashed project id to use in url
 * @return {String}           Url to use for tessellation requests
 */
function _getTessUrl(projectId) {
    return 'https://flux.io/p/'+projectId+
           '/api/blockexec?block=flux-internal/parasolid/Parasolid';
}

/**
 * @summary Enumeration of edges rendering modes.
 * This determines whether edges will be shown when rendering the front face, back face or both.
 * Front edge rendering can be used to achieve hidden line rendering.<br>
 * Options are NONE, FRONT, BACK, BOTH
 * @return {Object} enumeration
 */
FluxViewport.getEdgesModes = function () {
    return EdgesHelper.EDGES_MODES;
};

/**
 * Name of the event fired when the camera changes
 *
 * This can be used to observe those changes and register a callback.<br>
 * For example:
 * fluxViewport.addEventListener(FluxViewport.getChangeEvent(), function() {});
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
 * @private
 */
FluxViewport.prototype._initCallback = function() {
    var _this = this;
    this._renderer.addEventListener(FluxRenderer.CHANGE_EVENT, function(event) {
        _this.dispatchEvent( event );
        _this.render();
    });
};

/**
 * Actually render the geometry!<br>
 * This is called automatically when the camera changes.
 * You may call it on demand as needed when changing properties.
 * @memberOf FluxViewport
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
        if (!_this.running) {
            _this.running = true;
            return _this._sceneBuilder.convert(data).then(function (results) {
                var object = results.getObject();
                _this._entities = object ? data : null;
                _this._updateModel(object);
                _this._latestSceneResults = results;
                _this.running = false;
                resolve(results);
            }).catch(function (err) {
                console.warn(err); // eslint-disable-line no-console
                _this.running = false;
            });
        } else {
            reject(new Error('Already running. You can only convert one entity at a time.'));
        }
    }).catch(function (err) {
        if (err.message.indexOf('running') === -1) {
            console.log(err); // eslint-disable-line no-console
        }
        throw err;
    });
};

/**
 * Change the geometry being rendered
 * @private
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
 * Take a data object and use it to update the viewport's internal state<br>
 * Warning this is async when it sets entities
 * @param  {Object} state The properties to set
 * @return {Promise} Completion promise
 */
FluxViewport.prototype.fromJSON = function(state) {
    if (!state) return Promise.resolve();
    var _this = this;
    if (state.entities) {
        return this.setGeometryEntity(state.entities).then(function () {
            _this._fromJSONHelper(state);
        });
    } else {
        this._fromJSONHelper(state);
        return Promise.resolve();
    }
};

/**
 * Rehydrate everything but the entities.
 * @private
 * @param  {Object} state Parameter data
 */
FluxViewport.prototype._fromJSONHelper = function(state) {
    if (state.renderer != null) {
        this._renderer.fromJSON(state.renderer);
    }
    if (state.autoFocus != null) {
        this._autoFocus = state.autoFocus;
    }
};

/**
 * Download all the geometry settings and raster image that are the state of this viewport.
 * Used for QA testing.
 * @param  {String} prefix File name prefix for download path
 */
FluxViewport.prototype.downloadState = function(prefix) {
    this._downloadJson(this.toJSON(), prefix);
    this._download(this._renderer.getGlCanvas().toDataURL('image/png'), prefix+'.png');
};

/**
 * Helper function to download some data from a url
 * @private
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
 * @private
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
 * Return the views enumeration.
 * Allows you to change the view to perspective, top, etc.
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
 * This can be used to replace the value if you did not set it on the constructor.
 * @param {String} newUrl The url of the tessellation server
 */
FluxViewport.prototype.setTessUrl = function(newUrl) {
    this._sceneBuilder.setTessUrl(newUrl);
};

/**
 * Set whether the viewport should focus the geometry when it is changed
 * @param {Boolean} focus Whether to auto focus
 */
FluxViewport.prototype.setAutoFocus = function(focus) {
    this._autoFocus = focus;
};

/**
 * Get whether the viewport will focus the geometry when it is changed
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
