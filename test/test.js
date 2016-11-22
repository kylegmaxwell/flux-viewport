'use strict';

// Stub out browser globals
global.window = {};
global.document = {};
global.self = global;
global.XMLHttpRequest = function () {
    this.open = function () {};
};

document.createElement = function() {
    return {
        width: 100,
        height: 100,
        style: {position: ''},
        appendChild: function () {},
        getContext: function () {},
        addEventListener: function () {},
        removeEventListener: function () {}
    };
};

var test = require('tape-catch');
var FluxViewport = require('../build/flux-viewport.common.js');
var tests = require('../build/test.common.js');

test('Create a viewport', function (t) {
    var domElement = document.createElement();
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    t.ok(!!viewport, 'Can create a new viewport');
    t.end();
});

for (var testName in tests) {
    test('Viewport test: '+testName, tests[testName]);
}
