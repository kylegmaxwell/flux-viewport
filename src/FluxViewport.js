'use strict';

import FluxRenderer from './FluxRenderer.js';
import FluxJsonToThree from '../lib/flux-json-to-three.common.js';

/**
 * UI widget to render 3D geometry
 * @param {Element} domParent   The div container for the canvas
 * @param {Number}  width       The width of the canvas
 * @param {Number}  height      The height of the canvas
 */
export default function FluxViewport (domParent, width, height) {
    var renderWidth = 100;//px
    if (width == null) {
        renderWidth = domParent.clientWidth;
    } else {
        renderWidth = Math.max(renderWidth, width);
    }

    var renderHeight = 100;//px
    if (height == null) {
        renderHeight = domParent.clientHeight;
    } else {
        renderHeight = Math.max(renderHeight, height);
    }

    // Optional function to be run before render step
    this.preRender = null;

    // Optional function to be run after render step
    this.postRender = null;

    this.renderer = new FluxRenderer(domParent, renderWidth, renderHeight);

    // Make sure to render on mouse over in case the renderer has swapped contexts
    var _this = this;
    domParent.addEventListener('mouseenter', function(){
        _this.render();
    });

    this.model = null;
};

/**
* Whether the renderer element is currently hosting the interactive canvas
* @return {Boolean} True if hosting, false otherwise
*/
FluxViewport.prototype.isCurrent = function () {
    return this.renderer.isCurrent();
};

/**
 * Actually render the geometry!
 */
FluxViewport.prototype.render = function() {
    if (this.preRender) this.preRender();

    this.renderer.doRender();

    if (this.postRender) this.postRender();
};

/**
 * Focus the camera on the current geometry
 */
FluxViewport.prototype.focus = function() {
    this.focusObject(this.renderer.scene);
};

/**
* Focus the controls' current camera on an object.
* This function will focus on the union of object and all of
* it's visible children. Children with visible=false will be ignored.
* @pre This function expects as a precondition that the visibility of
* object's child tree has just been updated. This function must run
* entirely synchronous so that it will focus on the right objects,
* without the possibility that another function will change
* object visibility before execution is complete.
* @param  {THREE.Object3D} object The scene object to focus on.
*/
FluxViewport.prototype.focusObject = function(object) {
    if (!object) return;
        object.updateMatrixWorld();
    if (this.renderer && this.renderer.controlsObj) {
        this.renderer.controlsObj.focusObject(object, true);
    }
    this.render();
};

/**
 * Set the viewport geomtery from a JSON string
 * @param {String} dataString The geometry to render formatted as JSON containing Flux entities
 */
FluxViewport.prototype.setGeometryJson = function(dataString) {
    var dataObj = JSON.parse(dataString);
    this.setGeometryEntity(dataObj);
}

/**
 * Set the viewport geometry from a data object containing Flux entities
 * @param {Object} data The geometry entities to render
 */
FluxViewport.prototype.setGeometryEntity = function(data) {
    var results = new FluxJsonToThree.GeometryResults();

    // Convert the flux entity data to THREE.js and store in results.mesh
    FluxJsonToThree.createObject(data, results);

    var oldFluxModel = this.model;
    this.model = results.mesh;

    this._updateModel(this.model, oldFluxModel);
}

/**
 * Change the geometry being rendered
 * @param  {THREE.Object3D} newModel The new model to render
 * @param  {THREE.Object3D} oldModel The old model to remove
 */
FluxViewport.prototype._updateModel = function(newModel, oldModel) {
    if (newModel) {
        this.renderer.scene.add(newModel);
    }
    if (oldModel) {
        this.renderer.scene.remove(oldModel);
        oldModel.traverse(_removeGeometries);
    }
    this.focus();
}

/**
 * Remove the geometry objects from the THREE registry so they can be garbage collected
 * @param  {THREE.Object3D} obj The object being removed
 */
function _removeGeometries(obj) {
    if (obj.geometry) {
        obj.geometry.dispose();
    }
}