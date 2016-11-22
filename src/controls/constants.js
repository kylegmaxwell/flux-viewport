'use strict';
import * as THREE from 'three';

// Values have to be a string because of THREE.EventDispatcher
export var Events = {
    CHANGE: 'change',
    SELECT: 'select'
};

// Which mouse events trigger selection controls
export var Selection = {
    NONE: 0,
    CLICK: 1,
    HOVER: 2
};

export var DEFAULT_SELECTION_MATERIAL = {
    color: 'black',
    emissionColor: 'yellow',
    side:THREE.DoubleSide
};
