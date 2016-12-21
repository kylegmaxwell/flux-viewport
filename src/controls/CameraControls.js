'use strict';
/**
 * Forked from three.js examples.
 * https://github.com/mrdoob/three.js/blob/master/examples/js/controls/CameraControls.js
 */
import * as THREE from 'three';
import ViewportControls from './ViewportControls.js';
import * as constants from './constants.js';

// Singleton used to track current editor for scroll event capture.
var _currentEditor = null;

// events
var changeEvent = { type: constants.Events.CHANGE };

var ORTHO_FRUSTUM_WIDTH = 1e6;
var PERSP_FRUSTUM_WIDTH = 1e3;
var ZOOM_MAX_EXTENTS = 1e18;
var MIN_FOCUS_SIZE = 1e-3;
var EPS = 1e-6;
var CAMERA_PADDING = 1.2;
var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };

//TODO(Kyle): we can use event.identifier instead to track touch events over time
function getClosestPoint ( point, pointArray ) {
    if ( pointArray[ 0 ].distanceTo( point) < pointArray[ 1 ].distanceTo( point) ) {
        return pointArray[ 0 ];
    }
    return pointArray[ 1 ];
}

/**
 * Class for user input to manipulate camera.
 * @param  {THREE.Camera} initCamera     The viewport camera object
 * @param  {THREE.Scene} initScene      The viewport scene
 * @param  {DOMElement} initDomElement The DOM element that contains the viewport. Source of events.
 * @param  {Number} initWidth      Canvas width in pixels
 * @param  {Number} initHeight     Canvas height in pixels
 */
export default function CameraControls (initCamera, initScene, initDomElement, initWidth, initHeight) {
    ViewportControls.call(this, initCamera, initScene, initDomElement, initWidth, initHeight);
    // internals
    this._enabled = true;
    this._center = new THREE.Vector3();

    this._parentRect = null;
    this._state = STATE.NONE;

    // pointer data
    this._touches = [];

    // pointers are expressed in -1 to 1 coordinate space relative to domElement.
    this._pointers = [ new THREE.Vector2(), new THREE.Vector2() ];
    this._pointersOld = [ new THREE.Vector2(), new THREE.Vector2() ];
    this._pointersDelta = [ new THREE.Vector2(), new THREE.Vector2() ];

    // Camera navigation begins when the user clicks inside the dom element
    this._domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
    this._domElement.addEventListener( 'mousedown', onMouseDown.bind(this), false );
    this._domElement.addEventListener( 'mousewheel', onMouseWheel.bind(this), false );
    this._domElement.addEventListener( 'DOMMouseScroll', onMouseWheel.bind(this), false ); // firefox
    this._handleMouseMove = onMouseMove.bind(this);
    this._handleMouseUp = onMouseUp.bind(this);

    this._domElement.addEventListener( 'touchstart', touchStart.bind(this), false );
    this._domElement.addEventListener( 'touchmove', touchMove.bind(this), false );
    this._domElement.addEventListener( 'touchend', touchEnd.bind(this), false );
}

CameraControls.prototype = Object.create( ViewportControls.prototype );
CameraControls.prototype.constructor = CameraControls;

/**
 * When the camera changes the controls have to be initialized again.
 * @param  {THREE.Camera} newCamera The new camera
 */
CameraControls.prototype.setCamera = function(newCamera) {
    this._camera = newCamera;
};

/**
 * When active the controls listens for events
 */
CameraControls.prototype.activate = function () {
    this._enabled = true;
};

/**
 * When inactive the controls remves it's listeners
 */
CameraControls.prototype.deactivate = function () {
    this._enabled = false;
};

/**
 * Serialize the current state to a JSON object
 * @return {Object}  JSON state
 */
CameraControls.prototype.toJSON = function () {
    return {
        cx: this._center.x,
        cy: this._center.y,
        cz: this._center.z
    };
};

/**
 * Deserialize from an object to property values
 * @param  {Object} data JSON state
 */
CameraControls.prototype.fromJSON = function (data) {
    this._center.x = data.cx;
    this._center.y = data.cy;
    this._center.z = data.cz;
};

/**
 *  Set pointes from mouse/touch events and convert to -1 to 1 coordinate space.
 * @param  {MouseEvent|TouchEvent} event User interaction event
 */
CameraControls.prototype.setPointers = function( event ) {
    //
    if (!this._parentRect || event.type === 'mousedown') {
        // Cache the parent rect at the beginning of a drag event sequence
        this._parentRect = event.target.getBoundingClientRect();
    }
    // Filter touches that originate from the same element as the event.

    this._touches.length = 0;

    if ( event.touches ) {
        for ( var i = 0; i < event.touches.length; i++ ) {
            if ( event.touches[ i ].target === event.target ) {
                this._touches.push( event.touches[ i ] );
            }
        }
    }

    // MouseEvent
    // Set pointer[0] from mouse event.clientX/Y
    if ( this._touches.length === 0 ) {
        // Compute the position on the page with a relative scale from the element
        this._pointers[ 0 ].set(
            ( event.pageX - this._parentRect.left ) / this._parentRect.width * 2 - 1,
            ( event.pageY - this._parentRect.top ) / this._parentRect.height * 2 - 1
        );
    //TouchEvent
    // Set both pointer[0] and pointer[1] from a single touch.
    } else if ( this._touches.length == 1 ) {

        this._pointers[ 0 ].set(
            ( this._touches[ 0 ].pageX - this._parentRect.left ) / this._parentRect.width * 2 - 1,
            ( this._touches[ 0 ].pageY - this._parentRect.top ) / this._parentRect.height * 2 - 1
        );
        this._pointers[ 1 ].copy( this._pointers[ 0 ] );

    //TouchEvent
    // Set pointer[0] and pointer[1] from two touches.
    } else if ( this._touches.length == 2 ) {

        this._pointers[ 0 ].set(
            ( this._touches[ 0 ].pageX - this._parentRect.left ) / this._parentRect.width * 2 - 1,
            ( this._touches[ 0 ].pageY - this._parentRect.top ) / this._parentRect.height * 2 - 1
        );
        this._pointers[ 1 ].set(
            ( this._touches[ 1 ].pageX - this._parentRect.left ) / this._parentRect.width * 2 - 1,
            ( this._touches[ 1 ].pageY - this._parentRect.top) / this._parentRect.height * 2 - 1
        );

    }

    // Clear the cached bounds at the end of a drag event sequence
    if (this._parentRect && event.type === 'mouseup') {
        this._parentRect = null;
    }
};

// helper functions

/**
 * Update camera clipping planes based on size of scene
 * @param  {THREE.camera} camera Perspective camera object
 * @param  {Number} radius Size of the scene
 */
function _updateClippingPersp (camera, radius) {
    var factor = PERSP_FRUSTUM_WIDTH;
    camera.near = radius / factor;
    camera.far = radius * factor + factor;
}

/**
 * Update camera clipping planes based on size of scene
 * @param  {THREE.camera} camera Orthographic camera object
 * @param  {Number} radius Size of the scene
 */
function _updateClippingOrtho (camera, radius) {
    var nearFarDistance = ORTHO_FRUSTUM_WIDTH;
    var factor = Math.max(2*radius, nearFarDistance);
    camera.near = -1 * factor;
    camera.far = factor;
}

var vector = new THREE.Vector3();
/**
 * Focus the camera on target geometry
 * @param  {THREE.Object3D|THREE.Sphere} target Object or sphere to focus on
 * @param  {Boolean} frame  Whether to zoom (true / default) or just pan (false)
 */
CameraControls.prototype.focus = function ( target, frame ) {
    if (frame === undefined) frame = true;

    // Collection of all centers and radii in the hierarchy of the target.
    var targets = [];

    // Bounding box (minCenter/maxCenter) encompassing all centers in hierarchy.
    var minCenter;
    var maxCenter;

    if (target.constructor !== THREE.Sphere) {// Object3D
        target.traverse( function( child ) {

            if (child.visible) {
                var center = new THREE.Vector3();
                var scale = new THREE.Vector3();
                var radius = 0;

                child.updateMatrixWorld( true );
                child.matrixWorld.decompose( center, new THREE.Quaternion(), scale );
                scale = ( scale.x + scale.y + scale.z ) / 3;

                //TODO: make work with non-uniform scale
                if ( child.geometry ) {
                    child.geometry.computeBoundingSphere();
                    center.copy( child.geometry.boundingSphere.center.clone()
                                .applyMatrix4(child.matrixWorld) );
                    radius = child.geometry.boundingSphere.radius * scale;
                }

                if ( !frame || child.geometry ) {
                    targets.push( { center: center, radius: radius } );
                    if ( !minCenter ) minCenter = center.clone();
                    if ( !maxCenter ) maxCenter = center.clone();
                    minCenter.min( center );
                    maxCenter.max( center );
                }
            }
        } );

        // Bail if there is not visible geometry
        if (!minCenter || !maxCenter) return;

        // Center of the bounding box.
        var cumulativeCenter = minCenter.clone().add( maxCenter ).multiplyScalar( 0.5 );

        // Furthest ( center distance + radius ) from CumulativeCenter.
        var cumulativeRadius = 0;

        targets.forEach( function( child ) {
            var radius = cumulativeCenter.distanceTo( child.center ) + child.radius;
            cumulativeRadius = Math.max( cumulativeRadius, radius );
        } );
    } else { // Sphere
        cumulativeRadius = target.radius;
        cumulativeCenter = target.center;
    }

    // When the radius is nearly zero fall back to a reasonable view size
    // This works well for single points which have a minimum pixel size
    // so they will still be visible, even though they are very small relative to the focus size
    if (cumulativeRadius < EPS) {
        cumulativeRadius = MIN_FOCUS_SIZE;
    }

    if ( this._camera instanceof THREE.PerspectiveCamera ) {
        // Use the vector from center to camera to reposition
        vector.copy(this._camera.position).sub(this._center);
        this._camera.position.copy(cumulativeCenter).add(vector);

        // Look towards cumulativeCenter
        this._center.copy( cumulativeCenter );
        this._camera.lookAt( this._center );

        if ( frame && cumulativeRadius ) {

            // Adjust distance to frame cumulativeRadius
            var fovFactor = Math.tan( ( this._camera.fov / 2 ) * Math.PI / 180.0 );
            var pos = this._camera.position.clone().sub( this._center ).normalize().multiplyScalar( CAMERA_PADDING * cumulativeRadius  / fovFactor );

            this._camera.position.copy( this._center ).add( pos );
            _updateClippingPersp(this._camera, cumulativeRadius);
        }

    } else if ( this._camera instanceof THREE.OrthographicCamera ) {

        // Align camera center with cumulativeCenter
        this._center.copy( cumulativeCenter );
        this._camera.position.copy( this._center );

        if ( frame && cumulativeRadius ) {
            // Offset camera by radius along camera axis so it's outside the this._camera
            // If camera is too close to geometry, point distance attenuation looks bad
            var z = new THREE.Vector3(0,0,1);
            z.applyQuaternion(this._camera.quaternion);
            z.multiplyScalar(2*cumulativeRadius+1);
            this._camera.position.sub(z);

            // Adjust camera boundaries to frame cumulativeRadius
            var cw = this._camera.right - this._camera.left;
            var ch = this._camera.top - this._camera.bottom;
            var aspect = Math.abs(cw / ch);
            var radius = CAMERA_PADDING * cumulativeRadius;
            if ( aspect < 1 ) {
                this._camera.top = Math.sign(this._camera.top) * radius / aspect;
                this._camera.right = Math.sign(this._camera.right) * radius;
                this._camera.bottom = Math.sign(this._camera.bottom) * radius / aspect;
                this._camera.left = Math.sign(this._camera.left) * radius;
            } else {
                this._camera.top = Math.sign(this._camera.top) * radius;
                this._camera.right = Math.sign(this._camera.right) * radius * aspect;
                this._camera.bottom = Math.sign(this._camera.bottom) * radius;
                this._camera.left = Math.sign(this._camera.left) * radius * aspect;

            }
            _updateClippingOrtho(this._camera, cumulativeRadius);
        }
    }
    this.dispatchEvent( changeEvent );
};

var matrix = new THREE.Matrix3();

/**
 * Move the camera perpendicular to the direction it is facing
 * @param  {THREE.Vector2} delta The amount to move (change in mouse position)
 */
CameraControls.prototype.pan = function ( delta ) {

    var distance = this._camera.position.distanceTo( this._center );
    vector.set( -delta.x, delta.y, 0 );

    if ( this._camera instanceof THREE.PerspectiveCamera ) {

        var fovFactor = distance * Math.tan( ( this._camera.fov / 2 ) * Math.PI / 180.0 );
        vector.multiplyScalar( fovFactor );
        vector.x *= this._camera.aspect;

    } else if ( this._camera instanceof THREE.OrthographicCamera ) {

        vector.x *= ( this._camera.right - this._camera.left ) / 2;
        vector.y *= ( this._camera.top - this._camera.bottom ) / 2;

    }

    vector.applyMatrix3( matrix.getNormalMatrix( this._camera.matrix ) );
    this._camera.position.add( vector );
    this._center.add( vector );

    this.dispatchEvent( changeEvent );

};

/**
 * Move the camera toward or away from the center
 * @param  {THREE.Vector2} delta The amount to move (change in mouse position)
 */
CameraControls.prototype.zoom = function ( delta ) {

    if ( this._camera instanceof THREE.PerspectiveCamera ) {

        var distance = this._camera.position.distanceTo( this._center );

        vector.set( 0, 0, delta.y );

        vector.multiplyScalar( distance );

        vector.applyMatrix3( matrix.getNormalMatrix( this._camera.matrix ) );

        // Clamp the length to not be too big
        vector.setLength(Math.min(vector.length(), distance*0.5));

        var newDistance = this._camera.position.clone().add(vector).distanceTo( this._center );
        // check if we should be moving closer but are going to pass the target or
        // we are moving farther, but way too far away
        if ( (delta.y < 0 && newDistance >= distance) || (delta.y > 0 && newDistance > ZOOM_MAX_EXTENTS)) {
            return;
        }
        this._camera.position.add( vector );
        _updateClippingPersp(this._camera, newDistance);

    } else if ( this._camera instanceof THREE.OrthographicCamera ) {
        // Prevent crazy fast zoom, and never scale by a negative number!
        var dy = Math.min(2,Math.max(0.5,1+delta.y));
        this._camera.top *= dy;
        this._camera.right *= dy;
        this._camera.bottom *= dy;
        this._camera.left *= dy;

    }

    this.dispatchEvent( changeEvent );
};

/**
 * Rotate the camera aroudn the center point
 * @param  {THREE.Vector2} delta The amount to move (change in mouse position)
 */
CameraControls.prototype.rotate = function ( delta ) {

    vector.copy( this._camera.position ).sub( this._center );

    var theta = Math.atan2( vector.x, vector.y );
    var phi = Math.atan2( Math.sqrt( vector.x * vector.x + vector.y * vector.y ), vector.z );

    theta += delta.x;
    phi -= delta.y;

    phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

    var radius = vector.length();

    vector.x = radius * Math.sin( phi ) * Math.sin( theta );
    vector.y = radius * Math.sin( phi ) * Math.cos( theta );
    vector.z = radius * Math.cos( phi );

    this._camera.position.copy( this._center ).add( vector );

    this._camera.lookAt( this._center );

    this.dispatchEvent( changeEvent );
};

// mouse

/**
 * Handle mouse down event when user begins a click
 * @param  {MouseEvent} event Event from browser
 */
function onMouseDown( event ) {

    _currentEditor = this;

    if ( this._enabled === false ) return;

    if ( event.button === 0 ) {

        this._state = STATE.ROTATE;

        if ( this._camera instanceof THREE.OrthographicCamera ) {
            this._state = STATE.PAN;
        }

    } else if ( event.button === 1 ) {
        this._state = STATE.ZOOM;
    } else if ( event.button === 2 ) {
        this._state = STATE.PAN;
    }

    this.setPointers( event );
    this._pointersOld[ 0 ].copy( this._pointers[ 0 ] );

    // Camera navigation continues while the user drags anywhere on the page
    document.addEventListener( 'mousemove', this._handleMouseMove, false );
    document.addEventListener( 'mouseup', this._handleMouseUp, false );
    document.addEventListener( 'dblclick', this._handleMouseUp, false );
}

/**
 * Handle mouse move event when user is dragging
 * @param  {MouseEvent} event Event from browser
 */
function onMouseMove( event ) {
    if ( this._enabled === false ) return;

    this.setPointers( event );

    this._pointersDelta[ 0 ].subVectors( this._pointers[ 0 ], this._pointersOld[ 0 ] );
    this._pointersOld[ 0 ].copy( this._pointers[ 0 ] );

    if ( this._state === STATE.ROTATE ) {
        this.rotate( this._pointersDelta[ 0 ] );
    } else if ( this._state === STATE.ZOOM ) {
        this.zoom( this._pointersDelta[ 0 ] );
    } else if ( this._state === STATE.PAN ) {
        this.pan( this._pointersDelta[ 0 ] );
    }
}

/**
 * Handle mouse up event when user finishes a click or drag
 * @param  {MouseEvent} event Event from browser
 */
function onMouseUp( ) {
    // Make sure to catch the end of the drag even outside the viewport
    document.removeEventListener( 'mousemove', this._handleMouseMove, false );
    document.removeEventListener( 'mouseup', this._handleMouseUp, false );
    document.removeEventListener( 'dblclick', this._handleMouseUp, false );

    this._state = STATE.NONE;
}

/**
 * Handle mouse wheel event used for zoom
 * @param  {MouseEvent} event Event from browser
 */
function onMouseWheel( event ) {

    if (_currentEditor !== this || this._enabled === false ) return;

    event.preventDefault();

    var delta = 0;
    if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9
        delta = - event.wheelDelta;
    } else if ( event.detail ) { // Firefox
        delta = event.detail * 10;
    }

    this.zoom( new THREE.Vector2( 0, delta / 1000 ) );
}

// touch screen

/**
 * Handle event when finger begins to touch screen
 * @param  {TouchEvent} event Event from browser
 */
function touchStart( event ) {

    event.preventDefault();
    if ( this._enabled === false ) return;

    this.setPointers( event );
    this._pointersOld[ 0 ].copy( this._pointers[ 0 ] );
    this._pointersOld[ 1 ].copy( this._pointers[ 1 ] );
}

/**
 * Handle event when finger drags on touch screen
 * @param  {TouchEvent} event Event from browser
 */
function touchMove( event ) {

    event.preventDefault();
    if ( this._enabled === false ) return;

    this.setPointers( event );
    switch ( this._touches.length ) {

        case 1:
            this._pointersDelta[ 0 ].subVectors( this._pointers[ 0 ], getClosestPoint( this._pointers[ 0 ], this._pointersOld ) );
            this._pointersDelta[ 1 ].subVectors( this._pointers[ 1 ], getClosestPoint( this._pointers[ 1 ], this._pointersOld ) );

            if ( this._camera instanceof THREE.PerspectiveCamera ) {
                this.rotate( this._pointersDelta[ 0 ] );
            } else if ( this._camera instanceof THREE.OrthographicCamera ) {
                this.pan( this._pointersDelta[ 0 ] );
            }
            break;

        case 2:
            this._pointersDelta[ 0 ].subVectors( this._pointers[ 0 ], getClosestPoint( this._pointers[ 0 ], this._pointersOld ) );
            this._pointersDelta[ 1 ].subVectors( this._pointers[ 1 ], getClosestPoint( this._pointers[ 1 ], this._pointersOld ) );

            var prevDistance = this._pointersOld[ 0 ].distanceTo( this._pointersOld[ 1 ] );
            var distance = this._pointers[ 0 ].distanceTo( this._pointers[ 1 ] );

            if ( prevDistance ) {
                this.zoom( new THREE.Vector2(0, prevDistance - distance ) );
                this.pan( this._pointersDelta[ 0 ].clone().add( this._pointersDelta[ 1 ] ).multiplyScalar(0.5) );
            }
            break;
    }

    this._pointersOld[ 0 ].copy( this._pointers[ 0 ] );
    this._pointersOld[ 1 ].copy( this._pointers[ 1 ] );

}

/**
 * Handle event when finger is no longer touching screen
 * @param  {TouchEvent} event Event from browser
 */
function touchEnd( event ) {
    event.preventDefault();
}
