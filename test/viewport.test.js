'use strict';

import FluxViewport from '../src/FluxViewport.js';
import viewportState from './viewportState.json';

// This is a stub
var domElement = document.createElement();

export function focusViewport(t) {
    var sphere = {"origin":[0,0,0],"primitive":"sphere","radius":10};
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    viewport.setGeometryEntity(sphere).then(function () {
        t.ok(viewport._renderer._model, 'Viewport should create a model');
        t.end();
    }, function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}

export function replaceGeom(t) {
    var sphere = {"origin":[0,0,0],"primitive":"sphere","radius":10};
    var sphere2 = {"origin":[0,0,0],"primitive":"sphere","radius":2};
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    viewport.setGeometryEntity(sphere).then(function () {
        t.ok(viewport._renderer._model, 'Viewport should create a model');
        viewport.setGeometryEntity(sphere2).then(function () {
            t.ok(viewport._renderer._model, 'Viewport should create a model');
            t.end();
        }, function (errors) {
            t.fail('Caught an error: '+ errors);
            t.end();
        });
    }, function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}

export function viewportToJson(t) {
    var sphere = {"origin":[0,0,0],"primitive":"sphere","radius":10};
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    viewport.setGeometryEntity(sphere).then(function () {
        var viewportString = JSON.stringify(viewport.toJSON());
        var keywords = ['entities', 'view', 'cameras'];
        for (var i=0;i<keywords.length;i++) {
            t.ok(viewportString.toLocaleLowerCase().indexOf(keywords[i])!==-1, 'JSON should contain '+keywords[i]);
        }
        t.end();
    }, function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}

export function viewportFromJson(t) {
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    viewport.fromJSON(viewportState).then( function() {
        t.equal(viewport._entities.primitive, 'sphere', 'Should get a sphere from JSON');
        t.end();
    }, function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}

export function initControls(t) {
    var updated = false;
    var viewport = new FluxViewport(domElement);
    viewport.addEventListener(FluxViewport.getChangeEvent(), function() {
        updated = true;
    });
    var sphere = {"origin":[0,0,0],"primitive":"sphere","radius":10};
    viewport.setGeometryEntity(sphere).then(function () {
        viewport.focus();
        t.ok(updated, 'Update should fire.');
        t.end();
    }, function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}

export function hideHelpers(t) {
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    viewport.setHelpersVisible(false);
    t.equal(viewport._renderer._helpersScene.visible, false, "Should not be visible");
    t.end();
}

export function setAlpha(t) {
    var sphere = {"origin":[0,0,0],"primitive":"sphere","radius":10};
    var viewport = new FluxViewport(domElement, {width:100,height:100});
    viewport.setGeometryEntity(sphere).then(function () {
        t.ok(viewport._renderer._model, 'Viewport should create a model');
        viewport.setClearColor('white', 0.5);
        viewport.render();
        t.equal(viewport._renderer._context.renderer.getClearAlpha(), 0.5, "Alpha can be set");
        t.end();
    }, function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}

export function viewportSelection(t) {
    var sphere = {"origin":[0,0,0],"primitive":"sphere","radius":10,"id":"mySphere"};
    var viewport = new FluxViewport(domElement, {width:100,height:100,
        selection: FluxViewport.getSelectionModes().HOVER});
    viewport.setGeometryEntity(sphere).then(function () {
        t.equal(viewport.getSelection().length,0,"Selection starts empty");
        viewport.setSelection(['mySphere']);
        t.deepEqual(viewport.getSelection(),['mySphere'],"Selection has id");
        t.end();
    }).catch(function (errors) {
        t.fail('Caught an error: '+ errors);
        t.end();
    });
}
