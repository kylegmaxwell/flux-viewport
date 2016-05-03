'use strict';

export default function FluxCameras() {
    // Initialize default cameras and frustums.
    this.cameras = {
        'persp':  new THREE.PerspectiveCamera(30, 1, 0.1, 100000),
        'top':    new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000),
        'right':  new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000),
        'bottom': new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000),
        'left':   new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000),
        'front':  new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000),
        'back':   new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000)
    };
    for (var cam in this.cameras) {
        this.cameras[cam]._target = new THREE.Vector3();
    }
    // Flux is Z up
    this.cameras.persp.up = new THREE.Vector3( 0, 0, 1 );
    // The camera starts far away from the origin, with the assumption
    // that the viewport will focus the camera on the rendered
    // geometry as soon as it becomes available.
    this.cameras.persp.position.set(2500000, 1000000, 1300000);
    this.cameras.persp.lookAt(this.cameras.persp._target);
    this.cameras.persp.name = "persp";

    this.cameras.front.rotation.set(Math.PI/2, Math.PI, 0);
    this.cameras.front.name = "front";

    this.cameras.back.rotation.set(Math.PI/2, 0, 0);
    this.cameras.back.name = "back";

    this.cameras.left.rotation.set(Math.PI/2, Math.PI/2, 0);
    this.cameras.left.name = "left";

    this.cameras.right.rotation.set(Math.PI/2, -Math.PI/2, 0);
    this.cameras.right.name = "right";

    this.cameras.top.rotation.set(0, Math.PI, 0);
    this.cameras.top.name = "top";
    this.cameras.top.position.set(0, 0, -100);

    this.cameras.bottom.position.set(0, 0, -100);
    this.cameras.bottom.name = "bottom";

    if (!this.camera) {
        this.camera = this.cameras.persp;
    }
};

FluxCameras.prototype.setView = function (newView) {
    this.view = newView;
    if (this.cameras[this.view]) {
        this.camera = this.cameras[this.view];
    }
},

FluxCameras.prototype.updateCamera = function() {
    if (!this.camera) return;

    if (this.camera instanceof THREE.PerspectiveCamera) {
        this.camera.aspect = this.width / this.height;
    }
    if (this.camera instanceof THREE.OrthographicCamera) {
        var a = this.width / this.height;
        var h = this.camera.top - this.camera.bottom;
        this.camera.top = h / 2;
        this.camera.bottom = - h / 2;
        this.camera.right = h / 2 * a;
        this.camera.left = - h / 2 * a;
    }
    this.camera.updateProjectionMatrix();
}


/**
* Save the relevant positioning information about current cameras.
* This information is ready to be serialized for local storage.
* TODO (Kyle) This function should be moved out of three-js since it is Flux specific
*/
// serializeCameraStates: function() {
//   var serializedCamera = {};
//   // iterate over the camera for each view (ex. persp, top, etc.)
//   for (var view in this.cameras) {
//     var camera = this.cameras[view];
//     serializedCamera[view] = {
//       px: camera.position.x,
//       py: camera.position.y,
//       pz: camera.position.z,
//       rx: camera.rotation.x,
//       ry: camera.rotation.y,
//       rz: camera.rotation.z,
//       tx: camera._target.x,
//       ty: camera._target.y,
//       tz: camera._target.z,
//       near: camera.near,
//       far: camera.far
//     };
//     // Handle extra OrthographicCamera properties
//     if (camera instanceof THREE.OrthographicCamera) {
//       var currentCamera = serializedCamera[view];
//       currentCamera["top"] = camera.top;
//       currentCamera["right"] = camera.right;
//       currentCamera["bottom"] = camera.bottom;
//       currentCamera["left"] = camera.left;
//     }
//   }
//   // Update camera and trigger observers
//   this.cameraStates = serializedCamera;
//   this.renderLater();
// },

/**
* Observer for changes to cameraStates object.
* When the object is changed, update the corresponding cameras.
* @param  {Object} previousCameraStates Previous value, not used.
* TODO (Kyle) This function should be moved out of three-js since it is Flux specific
*/
// deserializeCameraStates: function(previousCameraStates) {
//   // iterate over the camera for each view (ex. persp, top, etc.)
//   for (var view in this.cameraStates) {
//     var camera = this.cameras[view];
//     camera.position.x = this.cameraStates[view].px;
//     camera.position.y = this.cameraStates[view].py;
//     camera.position.z = this.cameraStates[view].pz;
//     camera.rotation.x = this.cameraStates[view].rx;
//     camera.rotation.y = this.cameraStates[view].ry;
//     camera.rotation.z = this.cameraStates[view].rz;
//     camera._target.x = this.cameraStates[view].tx;
//     camera._target.y = this.cameraStates[view].ty;
//     camera._target.z = this.cameraStates[view].tz;
//     var near = this.cameraStates[view].near;
//     if (near && near.constructor === Number) {
//       camera.near = near;
//     }
//     var far = this.cameraStates[view].far;
//     if (far && far.constructor === Number) {
//       camera.far = far;
//     }
//     // Handle extra OrthographicCamera properties
//     if (camera instanceof THREE.OrthographicCamera) {
//       camera.top = this.cameraStates[view].top;
//       camera.right = this.cameraStates[view].right;
//       camera.bottom = this.cameraStates[view].bottom;
//       camera.left = this.cameraStates[view].left;
//     }
//   }
// },