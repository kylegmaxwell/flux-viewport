'use strict';

import FluxCameras from '../src/FluxCameras.js';
import CameraControls from '../src/controls/CameraControls.js';
import * as THREE from 'three';

export function initCameras(t) {
    var cameras = new FluxCameras();
    t.equal(cameras._view, FluxCameras.VIEWS.perspective, 'Default view should be perspective');
    t.ok(cameras.getCamera(), 'Camera should be set');
    t.end();
} // end it


export function serializeCameras(t) {
    var cameras = new FluxCameras();
    var cameraJson = JSON.stringify(cameras.toJSON());
    var keywords = ['perspective','orthographic','px','py','pz','rx','ry','rz','near','far'];
    for (var i=0;i<keywords.length;i++) {
        t.ok(cameraJson.indexOf(keywords[i])!==-1, 'JSON should contain '+keywords[i]);
    }
    // console.log(cameraJson);
    var cameraStates = JSON.parse(cameraJson);
    cameraStates.perspective.px = 5;
    cameras.fromJSON(cameraStates);
    t.equal(cameras._perspCamera.position.x, 5, 'Deserialize should set values on cameras');
    t.end();
} // end it

export function testCameraFocus(t) {
    var camera = new THREE.PerspectiveCamera(30, 1.33, 0.1, 100000);
    camera.position.set(25, 100, 130);

    var geometry = new THREE.SphereBufferGeometry( 5000, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(25, 10000, 130);

    var domElement = document.createElement();
    var controls = new CameraControls(camera, null, domElement);
    controls.focus(sphere);
    t.ok(camera.position.y > 0, 'Camera stays above ground');

    // zoom
    document.listeners.mousedown(_eventFactory(5,5,1));
    document.listeners.mousemove(_eventFactory(50,50,1));
    document.listeners.mouseup(_eventFactory(50,50,1));
    var x = camera.position.x;
    var y = camera.position.y;
    var z = camera.position.z;
    controls.focus(sphere);
    // Make sure that frame is on by default so camera will move when focusing after a zoom
    t.ok(camera.position.x !== x, 'Camera x moves');
    t.ok(camera.position.y !== y, 'Camera y moves');
    t.ok(camera.position.z !== z, 'Camera z moves');
    t.end();
}

// Create a mock mouse event for use with controls
function _eventFactory(x, y, button) {
    return {
        button: button,
        target: {
            getBoundingClientRect: function () {
                return {
                    left: 0,
                    top: 0,
                    width:100,
                    height:100
                };
            }
        },
        preventDefault: function () {},
        pageX: x,
        pageY: y
    };
}

// Add properties to a mock MouseEvent that mock a TouchEvent
function _touch(event) {
    event.touches = [{pageX: event.pageX, pageY: event.pageY, target: event.target}];
    return event;
}

export function testCameraRotate(t) {
    var camera = new THREE.PerspectiveCamera(30, 1.33, 0.1, 100000);
    camera.position.set(25, 100, 130);
    var domElement = document.createElement();
    var x = camera.position.x;
    var y = camera.position.y;
    var z = camera.position.z;
    new CameraControls(camera, null, domElement);
    document.listeners.mousedown(_eventFactory(5,5,0));
    document.listeners.mousemove(_eventFactory(50,50,0));
    document.listeners.mouseup(_eventFactory(50,50,0));
    t.ok(camera.position.x !== x, 'Camera x moves');
    t.ok(camera.position.y !== y, 'Camera y moves');
    t.ok(camera.position.z !== z, 'Camera z moves');
    t.end();
}

export function testCameraTouchRotate(t) {
    var camera = new THREE.PerspectiveCamera(30, 1.33, 0.1, 100000);
    camera.position.set(25, 100, 130);
    var domElement = document.createElement();
    var x = camera.position.x;
    var y = camera.position.y;
    var z = camera.position.z;
    new CameraControls(camera, null, domElement);
    document.listeners.touchstart(_touch(_eventFactory(5,5,0)));
    document.listeners.touchmove(_touch(_eventFactory(50,50,0)));
    document.listeners.touchend(_touch(_eventFactory(50,50,0)));
    t.ok(camera.position.x !== x, 'Camera x moves');
    t.ok(camera.position.y !== y, 'Camera y moves');
    t.ok(camera.position.z !== z, 'Camera z moves');
    t.end();
}

export function testCameraZoom(t) {
    var camera = new THREE.PerspectiveCamera(30, 1.33, 0.1, 100000);
    camera.position.set(25, 100, 130);
    var domElement = document.createElement();
    var x = camera.position.x;
    var y = camera.position.y;
    var z = camera.position.z;
    new CameraControls(camera, null, domElement);
    document.listeners.mousedown(_eventFactory(5,5,1));
    document.listeners.mousemove(_eventFactory(50,50,1));
    document.listeners.mouseup(_eventFactory(50,50,1));
    t.ok(camera.position.x === x, 'Camera x stays the same');
    t.ok(camera.position.y === y, 'Camera y stays the same');
    t.ok(camera.position.z !== z, 'Camera z moves');
    t.end();
}

export function testCameraPan(t) {
    var camera = new THREE.PerspectiveCamera(30, 1.33, 0.1, 100000);
    camera.position.set(25, 100, 130);
    var domElement = document.createElement();
    var x = camera.position.x;
    var y = camera.position.y;
    var z = camera.position.z;
    new CameraControls(camera, null, domElement);
    document.listeners.mousedown(_eventFactory(5,5,2));
    document.listeners.mousemove(_eventFactory(50,50,2));
    document.listeners.mouseup(_eventFactory(50,50,2));
    t.ok(camera.position.x !== x, 'Camera x moves');
    t.ok(camera.position.y !== y, 'Camera y moves');
    t.ok(camera.position.z === z, 'Camera z stays the same');
    t.end();
}

export function testCameraDeactivate(t) {
    var camera = new THREE.PerspectiveCamera(30, 1.33, 0.1, 100000);
    camera.position.set(25, 100, 130);
    var domElement = document.createElement();
    var x = camera.position.x;
    var z = camera.position.z;
    var controls = new CameraControls(camera, null, domElement);
    controls.deactivate();
    document.listeners.mousedown(_eventFactory(5,5,2));
    t.ok(!document.listeners.mousemove, 'Dynamic listeners not added');
    t.ok(camera.position.x === x, 'Camera x stays the same');
    t.ok(camera.position.z === z, 'Camera z stays the same');
    t.end();
}
