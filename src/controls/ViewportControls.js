'use strict';
import * as THREE from 'three';

// Placeholder for abstract functions that should be implemented on the child class
var ABSTRACT_NOOP = function () {};

/**
 * Superclass for custom user controls plugins to FluxViewport. The class is provided
 * the camera, scene, dom element and other necessary data. This is an abstract class that expresses
 * the interface by which the renderer will manipulate controls objects. Then any control scheme can
 * be implemented by adding and removing listeners in the activation and deactivation functions.
 * @param  {THREE.Camera} initCamera     The viewport camera object
 * @param  {THREE.Scene} initScene      The viewport scene
 * @param  {DOMElement} initDomElement The DOM element that contains the viewport. Source of events.
 * @param  {Number} initWidth      Canvas width in pixels
 * @param  {Number} initHeight     Canvas height in pixels
 */
export default function ViewportControls (initCamera, initScene, initDomElement, initWidth, initHeight) {
    this._camera = initCamera;
    this._scene = initScene;
    this._domElement = initDomElement;
    this._width = initWidth;
    this._height = initHeight;
}

ViewportControls.prototype = Object.create( THREE.EventDispatcher.prototype );
ViewportControls.prototype.constructor = ViewportControls;

/**
 * This is called each time a new camera is set by the renderer
 * @param  {THREE.Camera} newCamera Camera being used for rendering
 */
ViewportControls.prototype.setCamera = function(newCamera) {
    this._camera = newCamera;
};

/**
 * This is called each time a new scene is set by the renderer
 * @param  {THREE.Scene} newScene The new scene
 */
ViewportControls.prototype.setScene = function(newScene) {
    this._scene = newScene;
};

/**
 * This is called each time the viewport changes size
 * @param  {Number} width  New width
 * @param  {Number} height new height
 */
ViewportControls.prototype.setSize = function(width, height) {
    this._width = width;
    this._height = height;
};

/**
 * Callback to perform all set up operations.
 * Should turn on any event listeners for the controls.
 */
ViewportControls.prototype.activate = ABSTRACT_NOOP;

/**
 * Callback to perform all break down.
 * Should turn off any event listeners for the controls.
 */
ViewportControls.prototype.deactivate = ABSTRACT_NOOP;
