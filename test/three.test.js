'use strict';

import * as THREE from 'three';
import * as math from '../src/utils/math.js';
var TOLERANCE = 0.000001;

export function testThree(t) {
    t.ok(true, 'Basic test');
    var vec = new THREE.Vector3(1,2,3);
    t.equal(vec.x,1,'Vector x');
    t.equal(vec.lengthSq(),1+4+9, 'Vector length');

    var camera = new THREE.PerspectiveCamera( 45, 1.0, 1, 1000 );
    t.equal(camera.far, 1000, 'Camera far');

    t.end();
}

function createGeometry() {
    var geometry = new THREE.BufferGeometry();
    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
    var vertices = new Float32Array( [
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0,
         1.0,  1.0,  1.0,

         1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0, -1.0,  1.0
    ] );

    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var mesh = new THREE.Mesh( geometry, material );
    return mesh;
}

export function testSphere(t) {
    var mesh = createGeometry();
    var sphere = math.getListBoundingSphere([mesh]);
    t.ok(Math.abs(sphere.radius - Math.sqrt(2)) < TOLERANCE , "Sphere should have radius roughly root 2");
    t.end();
}
