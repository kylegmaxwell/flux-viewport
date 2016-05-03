'use strict';

export default function FluxControls(rendererElement, changedCallback) {
    this.rendererElement = rendererElement;
    this._changedCallback = changedCallback;
};

FluxControls.prototype.setCamera = function(camera) {
    this.camera = camera;
    if (this.controls) this.controls.enabled = false;
    var _this = this;
    // TODO: preserve center in EditorControls
    this.camera._target = this.camera._target || new THREE.Vector3();
    this.controls = new THREE.EditorControls(this.camera, this.rendererElement, this.camera._target);
    this.controls.addEventListener('change', function() {
        _this._changedCallback();
    });

};

/**
 * Focus the current camera on the given object.
 * @param  {THREE.Object3D} object The object to focus on.
 * @param  {Boolean} frame  Whether to frame (fit to screen) around the object.
 */
FluxControls.prototype.focusObject = function(object, frame) {
  this.controls.focus(object, frame);
};

//TODO
// setCamera
// setScene
// handleKeypress
// Activate
// deactivate