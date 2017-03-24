'use strict';

import * as THREE from 'three';
import EdgesHelper from './EdgesHelper.js';
import FluxRenderer from './FluxRenderer.js';
import FluxCameras from './FluxCameras.js';
import * as FluxJsonToThree from 'flux-json-to-three';
import {scene} from 'flux-modelingjs';
import * as constants from './controls/constants.js';
import * as print from './utils/debugPrint.js';

/**
 * UI widget to render 3D geometry.
 * This class provides all the interface you need to add the flux web
 * viewer to your SDK app. This allows you to interpret Flux json data
 * and render that geometry. You may also create any number of viewports
 * and they will share the finite number of WebGL contexts available
 * from the browser.<br>
 * The most commonly used functions are <a href="#setGeometryEntity">setGeometryEntity</a> (to set geometry to render)
 * and <a href="#.isKnownGeom">isKnownGeom</a> (determine if JSON is geometry) so you might want to start reading there. <br>
 * Note: If you are using <a href="https://community.flux.io/content/kbentry/2718/materials-1.html">Flux materials</a> that have the parameter roughness
 * set then you will need to configure your server to have a <a href="https://content-security-policy.com">content security
 * policy</a> that allows content from https://object-library.storage.googleapis.com
 * so that our environment texture images can be loaded.
 * @class FluxViewport
 * @param {Element}   domParent     The div container for the canvas
 * @param {Object}    optionalParams Object containing all other parameters
 * @param {Number}    optionalParams.width         The width of the canvas
 * @param {Number}    optionalParams.height        The height of the canvas
 * @param {String}    optionalParams.tessUrl       The url for making brep tessellation requests (overrides projectId) (Used when server is not flux.io)
 * @param {Object}    optionalParams.selection     Whether to enable user selection
 * @param {String}    optionalParams.projectId     Id of a flux project (required to render breps)
 * @param {Boolean}   optionalParams.noLighting    No lights are added to viewport when this is true
 * @param {String}    optionalParams.token         The current flux auth token (required to render breps)
 */
export default function FluxViewport (domParent, optionalParams) {
    var width;
    var height;
    var tessUrl;
    var token;
    var selection = constants.Selection.NONE;
    if (optionalParams) {
        width = optionalParams.width;
        height = optionalParams.height;
        if (optionalParams.tessUrl) {
            tessUrl = optionalParams.tessUrl;
        } else if (optionalParams.projectId) {
            tessUrl = _getTessUrl(optionalParams.projectId);
        }
        token = optionalParams.token;
        if (optionalParams.selection) {
            selection = optionalParams.selection;
        }
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
    // Only allow merging when selection is disabled
    this._sceneBuilder.setAllowMerge(constants.Selection.NONE === selection);

    this._renderer = new FluxRenderer(domParent, renderWidth, renderHeight, selection);
    this._initCallback();

    // Make sure to render on mouse over in case the renderer has swapped contexts
    var _this = this;
    domParent.addEventListener('mouseenter', function(){
        _this.render();
    });

    // Add lights unless explicitly disabled
    if (!optionalParams || !optionalParams.noLighting) {
        this._setupDefaultLighting();
    }

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
 * @summary Enumeration of selection modes.
 * This determines when selection events occur in response to mouse events.
 * Options are NONE, CLICK, HOVER
 * @return {Object} enumeration
 */
FluxViewport.getSelectionModes = function () {
   return constants.Selection;
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
    return constants.Events.CHANGE;
};

/**
 * Enumeration of different event types
 * This can be used to differentiate events in the EventListener.
 * fluxViewport.addEventListener(FluxViewport.getChangeEvent(), function(e) {
 * FluxViewport.getEvents().SELECT === e.event;});
 * @return {Object} Enumeration object
 */
FluxViewport.getEvents = function () {
    return constants.Events;
};

/**
 * Determines whether the entity or list of entities contains geometry
 * @param  {Array.<Object>|Object}  entities Geometry data
 * @return {Boolean}          True for objects/lists containing geometry
 */
FluxViewport.isKnownGeom = function (entities) {
    return scene.isGeometry(entities);
};

//---- Class member functions

/**
 * Set up the callback to render when the camera changes
 * @private
 */
FluxViewport.prototype._initCallback = function() {
    var _this = this;
    this._renderer.addEventListener(constants.Events.CHANGE, function(event) {
        _this.dispatchEvent(event);
        _this.render();
    });
};

/**
 * Add a new plugin for user interaction controls.
 * See ViewportControls.js for more information.
 * @param  {ViewportControls} CustomControls A constructor that implements the controls interface.
 * @return {CustomControls}                The new instance
 */
FluxViewport.prototype.addControls = function(CustomControls) {
    return this._renderer.addControls(CustomControls);
};


/**
 * Get an object that maps from id string to Three.Object3D in the current scene
 * @return {Object}  Id to object scene map
 */
FluxViewport.prototype.getObjectMap = function() {
    return this._latestSceneResults.getObjectMap();
};

/**
 * Get the currently selected geometry as a list of id strings
 * @return {Array.<String>}  Current selection
 */
FluxViewport.prototype.getSelection = function() {
    var selectionMap = this._renderer.getSelection();
    var keys = Object.keys(selectionMap);
    var selection = [];
    for (var i=0;i<keys.length;i++) {
        var obj = selectionMap[keys[i]];
        if (obj != null) {
            selection.push(obj.userData.id);
        }
    }
    return selection;
};

/**
 * Define the material that is applied on selected objects
 * @param  {Object} data Flux json description of a material
 */
FluxViewport.prototype.setSelectionMaterial = function(data) {
    this._renderer.setSelectionMaterial(data);
};

/**
 * Set the currently selected geometry
 * @param {Array.<String>}  ids New selection
 */
FluxViewport.prototype.setSelection = function(ids) {
    if (ids == null || ids.constructor !== Array) return;
    var map = this._latestSceneResults.getObjectMap();
    var objects = ids.map(function (id) { return map[id];});
    this._renderer.setSelection(objects);
};

/**
 * Get the JSON representation of the objects with the given ids
 * @param  {Array.<String>} ids List of object ids
 * @return {Array.<Object>}     List of Flux JSON objects
 */
FluxViewport.prototype.getJson = function(ids) {
    if (ids == null || ids.constructor !== Array) return [];
    var map = this._latestSceneResults.getObjectMap();
    return ids.map(function (id) { return map[id].userData.data;});
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
 * @param  {THREE.Object3D}  [obj] Object to focus on
 */
FluxViewport.prototype.focus = function(obj) {
    this._renderer.focus(obj);
};

/**
 * Restore the camera to a default location
 */
FluxViewport.prototype.homeCamera = function() {
    this._renderer.homeCamera();
};

/**
 * Whether to draw helpers (axis and grid)
 *
 * @param  {Boolean} visible False to hide them
 */
FluxViewport.prototype.setHelpersVisible = function(visible) {
    this._renderer.setHelpersVisible(visible);
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
 * Set the viewport geometry from a data object containing Flux entities.
 * See documentation for more explanation of <a href="https://community.flux.io/content/kbentry/2579/geometric-primitives.html">entities</a>
 * and <a href="https://community.flux.io/content/kbentry/3087/what-is-a-scene.html">scene primitives</a>
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
  * DEPRECATED: This is now controlled via the parameters object to the constructor
  * This function is provided for backward compatibility.
  */
FluxViewport.prototype.setupDefaultLighting = function() {
    var message = 'FluxViewport.setupDefaultLighting is deprecated, and is now'+
    ' automatically enabled unless you opt out via the optionalParams.noLighting'+
    ' parameter on the constructor.';
    print.warn(message);
};

/**
 * Create a default 3 light rig on the renderer's scene.
 */
FluxViewport.prototype._setupDefaultLighting = function() {
    var lighting = new THREE.Object3D();
    lighting.name = 'Lights';

    //TODO(Kyle) non static lighting
    this._keyLight = new THREE.DirectionalLight();
    this._keyLight.position.set(60, 80, 50);
    this._keyLight.intensity = 2.95;
    lighting.add(this._keyLight);

    var backLight = new THREE.DirectionalLight();
    backLight.position.set(-250, 50, -200);
    backLight.intensity = 1.7;
    lighting.add(backLight);

    var fillLight = new THREE.DirectionalLight();
    fillLight.position.set(-500, -500, 0);
    fillLight.intensity = 0.9;
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
 * @param {Number} alpha Opacity
 */
FluxViewport.prototype.setClearColor = function(color, alpha) {
    this._renderer.setClearColor(color, alpha);
};

/**
 * Set which camera view to use (ex perspective, top etc.).
 * @param {FluxCameras.VIEWS} view The new view mode
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
 * Turn on shadow rendering. Uses THREE.js depth map shadows.
 * Turn this on after you have added lights and geometry to your scene and they
 * will be configured for shadow mapping along with the renderer.
 */
FluxViewport.prototype.activateShadows = function() {
    this._renderer.activateShadows();
};

/**
 * Turn off shadow rendering.
 */
FluxViewport.prototype.deactivateShadows = function() {
    this._renderer.deactivateShadows();
};

// Temporary variables allocated once to save on garbage collection
var p = new THREE.Vector3();
var n = new THREE.Vector3();
var d = new THREE.Vector3();
var o = new THREE.Vector3(0,0,0);

/**
 * Enable renderer clipping to reveal inside of geometry
 * @param {Number} px The x component of a point on the clipping plane
 * @param {Number} py The y component of a point on the clipping plane
 * @param {Number} pz The z component of a point on the clipping plane
 * @param {Number} nx The x component of the clipping plane normal
 * @param {Number} ny The y component of the clipping plane normal
 * @param {Number} nz The z component of the clipping plane normal
 * @param {Number} dist Distance from origin to clipping plane along normal
 */
FluxViewport.prototype.activateClipping = function(px, py, pz, nx, ny, nz) {
    p.set(px, py, pz);
    n.set(nx, ny, nz);
    var dist = d.copy(o).sub(p).projectOnVector(n).length();
    this._renderer.activateClipping(n.multiplyScalar(-1), dist);
};

/**
 * Turn of clipping so that all geometry will be rendered
 */
FluxViewport.prototype.deactivateClipping = function() {
    this._renderer.deactivateClipping();
};
