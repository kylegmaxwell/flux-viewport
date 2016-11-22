'use strict';
import {EditorControls} from 'flux-three-plugins/src/index.js';
import ViewportControls from './ViewportControls.js';
import * as constants from './constants.js';

/**
 * Class for user input to manipulate camera.
 * @param  {THREE.Camera} initCamera     The viewport camera object
 * @param  {THREE.Scene} initScene      The viewport scene
 * @param  {DOMElement} initDomElement The DOM element that contains the viewport. Source of events.
 * @param  {Number} initWidth      Canvas width in pixels
 * @param  {Number} initHeight     Canvas height in pixels
 */
export default function FluxEditorControls (initCamera, initScene, initDomElement, initWidth, initHeight) {
    ViewportControls.call(this, initCamera, initScene, initDomElement, initWidth, initHeight);
    this._init();
}

FluxEditorControls.prototype = Object.create( ViewportControls.prototype );
FluxEditorControls.prototype.constructor = FluxEditorControls;

/**
 * Initialize or reset state.
 */
FluxEditorControls.prototype._init = function () {
    // disable previous EditorControls and make a new one
    if (this._editorControls) this._editorControls.enabled = false;
    //TODO(Kyle): rewrite EditorControls to allow camera to be changed
    this._editorControls = new EditorControls(this._camera, this._domElement);
    var _this = this;
    this._editorControls.addEventListener(constants.Events.CHANGE, function (event) {
        _this.dispatchEvent(event);
    });
};


/**
 * When the camera changes the controls have to be initialized again.
 * @param  {THREE.Camera} newCamera The new camera
 */
FluxEditorControls.prototype.setCamera = function(newCamera) {
    this._camera = newCamera;
    this._init();
};

/**
 * When active the controls listens for events
 */
FluxEditorControls.prototype.activate = function () {
    if (this._editorControls) {
        this._editorControls.enabled = true;
    }
};

/**
 * When inactive the controls remves it's listeners
 */
FluxEditorControls.prototype.deactivate = function () {
    if (this._editorControls) {
        this._editorControls.enabled = false;
    }
};

/**
 * Serialize the current state to a JSON object
 * @return {Object}  The resutling JSON
 */
FluxEditorControls.prototype.toJSON = function () {
    return this._editorControls.toJSON();
};

/**
 * Deserialize from an object to property values
 * @param  {Object} json The previous state to apply
 */

FluxEditorControls.prototype.fromJSON = function (json) {
   this._editorControls.fromJSON(json);
};

/**
 * Move the camera to look at the specified Object3D
 * @param  {THREE.Object3D} target The current geometry
 */
FluxEditorControls.prototype.focus = function (target) {
    this._editorControls.focus(target, true);
};
