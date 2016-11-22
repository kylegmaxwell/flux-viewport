'use strict';

import FluxRenderer from '../src/FluxRenderer.js';
import * as THREE from 'three';

// This is a stub
var domElement = document.createElement();

export function initRenderer(t) {
    var renderer = new FluxRenderer(domElement, 100, 100);

    var width = 400;
    var height = 200;
    renderer.setSize(width, height);
    t.equal(renderer._width, width, 'Renderer width updated');
    t.equal(renderer._height, height, 'Renderer height updated');

    var setHostCalled = false;
    renderer._setHost = function () {
        setHostCalled = true;
    };
    renderer.doRender();
    t.ok(setHostCalled, 'Rendering should call setHost');
    t.end();
}

export function selectionMaterial(t) {
    var renderer = new FluxRenderer(domElement, 100, 100);
    renderer.setSelectionMaterial({"color":"blue"});
    t.deepEqual(renderer._selectionControls._selectionMaterial.surface.color, { r:0, g:0, b:1 },
         'Selection material should be blue');
    t.end();
}

export function selection(t) {
    var renderer = new FluxRenderer(domElement, 100, 100);
    var geometry = new THREE.SphereBufferGeometry( 5000, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    renderer.setSelection([sphere]);
    t.ok(renderer.getSelection()[sphere.uuid]===sphere, "Should return selected object");
    t.end();
}
