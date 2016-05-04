'use strict';

import test from 'tape';
import FluxViewport from '../src/FluxViewport.js';
import * as tests from './index.test.js'

test('Create a viewport', function (t) {
    var domElement = document.createElement();
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    t.ok(!!viewport, 'Can create a new viewport');
    t.end();
});

for (var testName in tests) {
    test('Viewport test: '+testName, tests[testName]);
};