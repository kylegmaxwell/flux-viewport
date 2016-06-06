'use strict';

import THREE from 'three';

export default function FluxCameras(width, height) {
    // Initialize default cameras and frustums.
    this._perspCamera = new THREE.PerspectiveCamera(30, width/height, 0.1, 100000);
    // Flux is Z up
    this._perspCamera.up = new THREE.Vector3( 0, 0, 1 );

    this._orthoCamera = new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000);

    this.setView(FluxCameras.VIEWS.perspective);
    this.updateCamera(width, height);
}

/**
 * Enumeration of all possible views for the camera
 * @type {Object}
 */
FluxCameras.VIEWS = {
    perspective:  0,
    top:    1,
    bottom: 2,
    front:  3,
    back:   4,
    right:  5,
    left:   6,
    END:   7
};

/**
 * Get the current camera object
 * @return {THREE.Camera} The current camera
 */
FluxCameras.prototype.getCamera = function () {
    if (this._view === FluxCameras.VIEWS.perspective) {
        return this._perspCamera;
    }
    return this._orthoCamera;
};

FluxCameras.DEFAULT_POSITIONS = [
    [2500000, 1000000, 1300000], // perspective
    [0, 0, -100], // top
    [0, 0, 100], // bottom
    [0, 0, 0], // front
    [0, 0, 0], // back
    [0, 0, 0], // right
    [0, 0, 0] // left
];

FluxCameras.DEFAULT_ROTATIONS = [
    [0, 0, 0], // perspective
    [0, 0, 0], // top
    [0, Math.PI, 0], // bottom
    [Math.PI/2, 0, 0], // front
    [Math.PI/2, Math.PI, 0], // back
    [Math.PI/2, Math.PI/2, 0], // right
    [Math.PI/2, -Math.PI/2, 0] // left
];

FluxCameras.isValidView = function (view) {
    return view != null && view.constructor === Number && view > -1 && view < FluxCameras.VIEWS.END;
};

/**
 * Set the camera to the default coordinates for the given view.
 * @param {FluxCameras.VIEWS} view The new view
 */
FluxCameras.prototype.setView = function (view) {
    if (!FluxCameras.isValidView(view)) return;
    this._view = view;

    var camera = this.getCamera();
    camera.position.set(FluxCameras.DEFAULT_POSITIONS[view][0],
                        FluxCameras.DEFAULT_POSITIONS[view][1],
                        FluxCameras.DEFAULT_POSITIONS[view][2]);

    camera.rotation.set(FluxCameras.DEFAULT_ROTATIONS[view][0],
                        FluxCameras.DEFAULT_ROTATIONS[view][1],
                        FluxCameras.DEFAULT_ROTATIONS[view][2]);
};

/**
 * Recompute derived state when the camera is changed.
 * @param  {Number} width  Width of the viewport (used to calculate aspect ratio)
 * @param  {Number} height Height of the viewport (used to calculate aspect ratio)
 */
FluxCameras.prototype.updateCamera = function(width, height) {
    this._perspCamera.aspect = width / height;
    this._perspCamera.updateProjectionMatrix();

    var a = width / height;
    var h = this._orthoCamera.top - this._orthoCamera.bottom;
    this._orthoCamera.top = h / 2;
    this._orthoCamera.bottom = - h / 2;
    this._orthoCamera.right = h / 2 * a;
    this._orthoCamera.left = - h / 2 * a;
    this._orthoCamera.updateProjectionMatrix();
};

/**
 * Extract only relevant properties from a camera
 * @param  {THREE.Camera} camera The camera source
 * @return {Object}        The camera data
 */
FluxCameras.cameraToJSON = function(camera) {
    var serializableCamera = {
        px: camera.position.x,
        py: camera.position.y,
        pz: camera.position.z,
        rx: camera.rotation.x,
        ry: camera.rotation.y,
        rz: camera.rotation.z,
        near: camera.near,
        far: camera.far
    };
    // Handle extra OrthographicCamera properties
    if (camera instanceof THREE.OrthographicCamera) {
        serializableCamera.top = camera.top;
        serializableCamera.right = camera.right;
        serializableCamera.bottom = camera.bottom;
        serializableCamera.left = camera.left;
        serializableCamera.type = 'orthographic';
    } else {
        serializableCamera.type = 'perspective';
    }
    return serializableCamera;
};

/**
 * Check if something is anumber
 * @param {Number} num The value
 * @returns {boolean} True for numbers
 * @private
 */
function _isNumber(num) {
    return num != null && num.constructor === Number;
}

/**
 * Check whether a set of properties are valid numbers
 * @param {Array.<string>} schema The list of properties
 * @param {Object} data The object with properties
 * @returns {boolean} True if all numbers
 * @private
 */
function _checkNumbers(schema, data) {
    // Make sure all the properties are valid and exist
    for (var i=0;i<schema.length;i++) {
        if (!_isNumber(data[schema[i]])) {
            return false;
        }
    }
    return true;
}

/**
 * Rehydrate camera instance from an object property tree.
 * @param  {THREE.camera} camera The camera to receive data
 * @param  {Object} data   The data to parse and apply
 */
FluxCameras.cameraFromJSON = function(camera, data) {
    var schema = ['px', 'py', 'pz', 'rx', 'ry', 'rz', 'near', 'far'];
    if (!_checkNumbers(schema, data)) return;
    camera.position.x = data.px;
    camera.position.y = data.py;
    camera.position.z = data.pz;
    camera.rotation.x = data.rx;
    camera.rotation.y = data.ry;
    camera.rotation.z = data.rz;
    camera.near = data.near;
    camera.far = data.far;

    // Handle extra OrthographicCamera properties
    if (camera.constructor === THREE.OrthographicCamera) {
        schema = ['top', 'right', 'bottom', 'left'];
        if (!_checkNumbers(schema, data)) return;
        camera.top = data.top;
        camera.right = data.right;
        camera.bottom = data.bottom;
        camera.left = data.left;
    }
};

/**
 * Make serializable by pruning all references and building an object property tree
 * @return {Object} The simplified model
 */
FluxCameras.prototype.toJSON = function() {
    var serializableCameras = {
        perspective: FluxCameras.cameraToJSON(this._perspCamera),
        orthographic: FluxCameras.cameraToJSON(this._orthoCamera),
        view: this._view
    };
    return serializableCameras;
};

/**
* Update the corresponding cameras in this object from a serialized object.
* @param  {Object} serializableCameras The camera data to use.
*/
FluxCameras.prototype.fromJSON = function(serializableCameras) {
    this.setView(serializableCameras.view);
    FluxCameras.cameraFromJSON(this._perspCamera, serializableCameras.perspective);
    FluxCameras.cameraFromJSON(this._orthoCamera, serializableCameras.orthographic);
};
