'use strict';

import * as THREE from 'three';

export function testThree(t) {
    t.ok(true, 'Basic test');
    var vec = new THREE.Vector3(1,2,3);
    t.equal(vec.x,1,'Vector x');
    t.equal(vec.lengthSq(),1+4+9, 'Vector length');

    var camera = new THREE.PerspectiveCamera( 45, 1.0, 1, 1000 );
    t.equal(camera.far, 1000, 'Camera far');

    t.end();
}
