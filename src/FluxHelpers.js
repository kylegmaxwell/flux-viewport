'use strict';

import FluxCameras from './FluxCameras.js';

/**
 * Manages reference objects that render in the scene.
 * Geometry in this object has depth write disabled since it is meant to be
 * layered onto the scene as a second pass. This allows the text on the labels
 * to render correctly and prevents flickering from z-fighting between the grid
 * and the axis lines.
 */
export default function FluxHelpers() {
    THREE.Object3D.call( this );
    this.type = 'FluxHelpers';

    this._grid = this._setupGrid(10, 10, 0x111111, 0xaaaaaa);
    this.setView(FluxCameras.VIEWS.perspective);
    this.add(this._grid);

    this._axis = this._setupAxis();
    this.add(this._axis);
}

FluxHelpers.prototype = Object.create( THREE.Object3D.prototype );
FluxHelpers.prototype.constructor = FluxHelpers;

/**
 * Create a grid of lines to give the user a sense of scale.
 * This is also referred to as a construction plane.
 * @param  {Number} size   Size of grid spacing
 * @param  {Number} width  Width of grid spacing
 * @param  {Number|String} color1 Color specification for primary grid color
 * @param  {Number|String} color2 Color specification for secondary grid color
 * @return {Object3D}        The grid object
 */
FluxHelpers.prototype._setupGrid = function(size, width, color1, color2) {
    var grid = new THREE.GridHelper(size * width, size);
    grid.setColors(new THREE.Color(color1), new THREE.Color(color2));
    grid.material.transparent = true;
    grid.material.opacity = 0.5;
    grid.material.depthWrite = false;
    return grid;
};

/**
 * Setup the coordinate axis with xyz labels
 * @return {THREE.Object3D} The axis object
 */
FluxHelpers.prototype._setupAxis = function() {
    var axis = new THREE.AxisHelper(10);
    axis.traverse(function(child) {
        if (child.material ) {
            child.material.depthWrite = false;
        }
    });
    return axis;
};

/**
 * Adjust the orientation of the grid to match the camera.
 * This keeps it aligned to screen space.
 * @param {FluxCameras.VIEWS} view Which view to orient to
 */
FluxHelpers.prototype.setView = function(view) {
  switch (view) {
    case FluxCameras.VIEWS.perspective:
    case FluxCameras.VIEWS.top:
    case FluxCameras.VIEWS.bottom:
        // facing Z
        this._grid.rotation.set(Math.PI / 2, 0, 0);
        break;
    case FluxCameras.VIEWS.right:
    case FluxCameras.VIEWS.left:
        // facing X
        this._grid.rotation.set(0, 0, Math.PI / 2);
        break;
    case FluxCameras.VIEWS.front:
    case FluxCameras.VIEWS.back:
        // facing Y
        this._grid.rotation.set(0, 0, 0);
        break;
  }
};
