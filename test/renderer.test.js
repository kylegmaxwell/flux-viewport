'use strict';

import FluxRenderer from '../src/FluxRenderer.js';

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
};
