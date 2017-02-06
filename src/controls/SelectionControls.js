'use strict';
import ViewportControls from './ViewportControls.js';
import * as THREE from 'three';
import * as constants from './constants.js';
import * as FluxJsonToThree from 'flux-json-to-three';
import * as math from '../utils/math.js';

/**
 * Create a three.js material from Flux JSON
 * @param  {Object} data Flux JSON material
 * @return {THREE.Material}      The actual material
 */
function _createMaterial(data) {
    var masterMaterial = FluxJsonToThree.createMaterial(FluxJsonToThree.MATERIAL_TYPES.ALL,data);
    masterMaterial.line.color.add(masterMaterial.surface.emissive);
    return masterMaterial;
}

/**
 * Class to manage selection state in viewport.
 * @param  {THREE.Camera} initCamera     The viewport camera object
 * @param  {THREE.Scene} initScene      The viewport scene
 * @param  {DOMElement} initDomElement The DOM element that contains the viewport. Source of events.
 * @param  {Number} initWidth      Canvas width in pixels
 * @param  {Number} initHeight     Canvas height in pixels
 */
export default function SelectionControls (initCamera, initScene, initDomElement, initWidth, initHeight) {
    ViewportControls.call(this, initCamera, initScene, initDomElement, initWidth, initHeight);
    this.raycaster = new THREE.Raycaster();
    this.raycaster.linePrecision = 0.1;//TODO(Kyle): This is in world space
    this.mouse = new THREE.Vector2();
    this._selectionMode = constants.Selection.CLICK;
    this._selection = {};
    this._otherMaterial = {};
    this._selectionMaterial = _createMaterial(constants.DEFAULT_SELECTION_MATERIAL);
    this._touchStartEvent = null;
    this._touchMoveEvent = null;
    this._touchEndEvent = null;
    this._mouseDownEvent = null;
    this._mouseMoveEvent = null;
    this._mouseUpEvent = null;
    this.activate();
}

SelectionControls.prototype = Object.create( ViewportControls.prototype );
SelectionControls.prototype.constructor = SelectionControls;

/**
 * Define the material that is applied on selected objects
 * @param  {Object} data Flux json description of a material
 */
SelectionControls.prototype.setMaterial = function(data) {
    this._selectionMaterial = _createMaterial(data);
};

/**
 * Determine whether listeners are active / enabled
 * @return {Boolean}  True if any listeners are present
 */
SelectionControls.prototype._isActive = function() {
    return this._touchStartEvent || this._touchMoveEvent || this._touchEndEvent
            || this._mouseDownEvent || this._mouseMoveEvent || this._mouseUpEvent;
};

/**
 * Set which events trigger selection.
 * @param  {Selection} mode The new value for input mode.
 */
SelectionControls.prototype.setMode = function(mode) {
    this._selectionMode = mode;
    if (this._isActive()) {
        // Refresh the listeners that depend on the mode
        this.deactivate();
        this.activate();
    }
};

/**
 * Create an event object for THREE.EventDispatcher
 * @return {Object}  Event object with selection data
 */
SelectionControls.prototype.eventFactory = function() {
    var event = {
        type: constants.Events.CHANGE, // generic event type for viewport, causes render
        event: constants.Events.SELECT,
        selection: this._selection
    };
    return event;
};

/**
 * Get the normalized position of the mouse
 * The coordinates range from -1 to 1
 * @param  {MouseEvent} event The event from the browser
 * @return {Object}       Local coordinates {x, y}
 */
SelectionControls.prototype._getMousePos = function(event) {
    var x = ( event.layerX / this._width ) * 2 - 1;
    var y = - ( event.layerY / this._height ) * 2 + 1;
    return {x: x, y: y};
};

/**
 * Update mouse position based on event
 * @param  {MouseEvent} event Event containing cursor location
 */
SelectionControls.prototype.updateMouse = function(event) {
    var p = this._getMousePos(event);
    this.mouse.x = p.x;
    this.mouse.y = p.y;
};

/**
 * Update the selection and related materials
 * @param  {THREE.Object3D} obj New object to select
 * @return {Boolean}     True when selection changed
 */
SelectionControls.prototype._updateSelection = function(obj) {
    // Internally use three.js uuid to avoid errors due to id reuse
    var id = obj.uuid;
    var changed = this._selection[id] !== obj;
    if (this._selection[id]) {
        this._selection[id].material = this._otherMaterial[id];
        this._selection[id] = null;
    }
    this._selection[id] = obj;
    this._otherMaterial[id] = obj.material;
    if (obj.type === 'Mesh') {
        obj.material = this._selectionMaterial.surface;
    } else if (obj.type === 'Line') {
        obj.material = this._selectionMaterial.line;
    }
    return changed;
};

/**
 * Set the current selection
 * @param  {Array.<THREE.Object3D>} arr The new selection
 */
SelectionControls.prototype.setSelection = function (arr) {
    this.clearSelection();
    var _this = this;
    for (var i=0;i<arr.length;i++) {
        arr[i].traverse(function (child) {
            if (child.type === 'Mesh' || child.type === 'Line') {
                _this._updateSelection(child);
            }
        });
    }
};

/**
 * Send a ray from the location specified by event
 * @param  {Object} p Position {x,y}
 */
SelectionControls.prototype.raycast = function(p) {
    this.mouse.x = p.x;
    this.mouse.y = p.y;
    this.raycaster.setFromCamera( this.mouse, this._camera );
    var intersects = this.raycaster.intersectObjects( this._scene.children, true );
    var changed = false;
    // TODO(Kyle) only clear when not pressing control for adding to selection
    if (Object.keys(this._selection).length>0) {
        this.clearSelection();
        changed = true;
    }
    var minDist = Infinity;
    var minObj = null;
    for (var i=0;i<intersects.length;i++) {
        var obj = intersects[i].object;
        if (!obj) continue;
        var dist = intersects[i].distance;
        if (dist < minDist) {
            if (obj.type === 'Mesh' || obj.type === 'Line') {
                minDist = dist;
                minObj = obj;
            }
        }
    }
    if (minObj) {
        changed = this._updateSelection(minObj);
    }
    if (changed) {
        this.dispatchEvent(this.eventFactory());
    }
};

/**
 * Iterator to run the given callback on each selection
 * @param  {Array.<THREE.Object3D>} selections Array of selected objects
 * @param  {Function} cb         The function to execute
 */
function _eachSelection(selections, cb) {
    var keys = Object.keys(selections);
    for (var i=0;i<keys.length;i++) {
        var key = keys[i];
        var selection = selections[key];
        if (selection != null) {
            cb(selection, key);
        }
    }
}

/**
 * Set the selection to be empty
 */
SelectionControls.prototype.clearSelection = function() {
    var _this = this;
    _eachSelection(this._selection, function (selection, id) {
        selection.material = _this._otherMaterial[id];
        _this._selection[id] = null;
    });
};

/**
 * Callback for mouse down event
 * @param  {MouseEvent} event The callback event
 */
SelectionControls.prototype.onMouseDown = function(event) {
    this.updateMouse(event);
};

/**
 * Callback for mouse move event
 * @param  {MouseEvent} event The callback event
 */
SelectionControls.prototype.onMouseMove = function(event) {
    this.updateMouse(event);
    this.raycast(this.mouse);
};

/**
 * Callback for mouse up event
 * @param  {MouseEvent} event The callback event
 */
SelectionControls.prototype.onMouseUp = function(event) {
    var p = this._getMousePos(event);
    // A click has the same position on mouse down and up
    if (event.type !== 'touchend' && (p.x !== this.mouse.x || p.y !== this.mouse.y)) {
        return;
    }
    this.raycast(this.mouse);
};

// Map of identifiers to current normalized positions of touches
var touches = {};

/**
 * Get the normalized position of the pointer
 * The coordinates range from -1 to 1
 * @param  {TouchEvent} event The event from the browser
 * @param  {Touch} touch Touch object containing the position
 * @return {Object}       Local coordinates {x, y}
 */
function _getTouchPos(event, touch) {
    var parentRect = event.target.getBoundingClientRect();
    var x = ( touch.pageX - parentRect.left ) / parentRect.width * 2 - 1;
    var y = - ( touch.pageY - parentRect.top ) / parentRect.height * 2 + 1;
    return {x: x, y: y};
}

/**
 * Callback for touch start event
 * @param  {TouchEvent} event The callback event
 */
SelectionControls.prototype.onTouchStart = function(event) {
    for ( var i = 0; i < event.touches.length; i++ ) {
        var touch = event.touches[ i ];
        var p = _getTouchPos(event, touch);
        // Cache the start position
        touches[touch.identifier] = p;
        // Start touch right away on hover
        if (this._selectionMode === constants.Selection.HOVER) {
            this.raycast(p);
        }
    }
};

/**
 * Callback during a touch and drag
 * @param  {TouchEvent} event The callback event
 */
SelectionControls.prototype.onTouchMove = function(event) {
    for ( var i = 0; i < event.touches.length; i++ ) {
        var touch = event.touches[ i ];
        var p = _getTouchPos(event, touch);
        this.raycast(p);
    }
};

/**
 * Callback for touch end event
 * @param  {TouchEvent} event The callback event
 */
SelectionControls.prototype.onTouchEnd = function(event) {
    for ( var i = 0; i < event.changedTouches.length; i++ ) {
        var touch = event.changedTouches[ i ];
        // Select if position hasn't changed
        if (this._selectionMode === constants.Selection.CLICK) {
            var pStart = touches[touch.identifier];
            var p = _getTouchPos(event, touch);
            if (p.x === pStart.x && p.y === pStart.y) {
                this.raycast(pStart);
            }
        }
        touches[touch.identifier] = null;
    }
};

/**
 * Add event listeners for mouse
 */
SelectionControls.prototype.activate = function () {
    if (!this._touchStartEvent) {
        this._touchStartEvent = this.onTouchStart.bind(this);
        this._domElement.addEventListener( 'touchstart', this._touchStartEvent, false );
    }
    if (!this._touchMoveEvent && this._selectionMode === constants.Selection.HOVER) {
        this._touchMoveEvent = this.onTouchMove.bind(this);
        this._domElement.addEventListener( 'touchmove', this._touchMoveEvent, false );
    }
    if (!this._touchEndEvent) {
        this._touchEndEvent = this.onTouchEnd.bind(this);
        this._domElement.addEventListener( 'touchend', this._touchEndEvent, false );
    }
    if (!this._mouseDownEvent && this._selectionMode === constants.Selection.CLICK) {
        this._mouseDownEvent = this.onMouseDown.bind(this);
        this._domElement.addEventListener( 'mousedown', this._mouseDownEvent, false );
    }
    if (!this._mouseMoveEvent && this._selectionMode === constants.Selection.HOVER) {
        this._mouseMoveEvent = this.onMouseMove.bind(this);
        this._domElement.addEventListener( 'mousemove', this._mouseMoveEvent, false );
    }
    if (!this._mouseUpEvent && this._selectionMode === constants.Selection.CLICK) {
        this._mouseUpEvent = this.onMouseUp.bind(this);
        this._domElement.addEventListener( 'mouseup', this._mouseUpEvent, false );
    }
};

/**
 * Remove event listeners for mouse
 */
SelectionControls.prototype.deactivate = function () {
    if (this._touchStartEvent) {
        this._domElement.removeEventListener( 'touchstart', this._touchStartEvent, false );
        this._touchStartEvent = null;
    }
    if (this._touchMoveEvent) {
        this._domElement.removeEventListener( 'touchmove', this._touchMoveEvent, false );
        this._touchMoveEvent = null;
    }
    if (this._touchEndEvent) {
        this._domElement.removeEventListener( 'touchend', this._touchEndEvent, false );
        this._touchEndEvent = null;
    }
    if (this._mouseDownEvent) {
        this._domElement.removeEventListener( 'mousedown', this._mouseDownEvent);
        this._mouseDownEvent = null;
    }
    if (this._mouseMoveEvent) {
        this._domElement.removeEventListener( 'mousemove', this._mouseMoveEvent);
        this._mouseMoveEvent = null;
    }
    if (this._mouseUpEvent) {
        this._domElement.removeEventListener( 'mouseup', this._mouseUpEvent);
        this._mouseUpEvent = null;
    }
};

/**
 * Return the current selection
 * @return {Object}  Map from uuid to Object3D
 */
SelectionControls.prototype.getSelection = function () {
    return this._selection;
};

/**
 * Get bounding sphere of the current selection
 * @return {THREE.Object3D}  The current selection
 */
SelectionControls.prototype.getSelectionSphere = function () {
    var selectionList = [];
    _eachSelection(this._selection, function (selection) {
        selectionList.push(selection);
    });
    return math.getListBoundingSphere(selectionList);
};
