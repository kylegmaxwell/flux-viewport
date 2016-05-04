'use strict';

import FluxCameras from '../src/FluxCameras.js';

export function initCameras(t) {
    var cameras = new FluxCameras();
    t.equal(cameras._view, FluxCameras.VIEWS.perspective, 'Default view should be perspective');
    t.ok(cameras.getCamera(), 'Camera should be set');
    t.end();
}; // end it


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
}; // end it