// code forked from here
// https://github.com/mrdoob/three.js/blob/master/src/extras/helpers/AxisHelper.js
/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 * @author arodic / http://akirodic.com/
 */
'use strict';
import THREE from 'three';
import LabelHelper from './LabelHelper.js';

export default function AxisHelper ( size, labelSize ) {

    THREE.Object3D.call( this );

    size = size || 1;
    labelSize = labelSize || 16;

    var vertices = new Float32Array( [
        0, 0, 0,  size, 0, 0,
        0, 0, 0,  0, size, 0,
        0, 0, 0,  0, 0, size
    ] );

    var colors = new Float32Array( [
        1, 0, 0,  1, 0, 0,
        0, 1, 0,  0, 1, 0,
        0, 0, 1,  0, 0, 1
    ] );

    var geometry = new THREE.BufferGeometry();
    geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

    var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );

    var axes = new THREE.LineSegments( geometry, material );
    this.add( axes );

    var red = new THREE.Color( 0xff0000 );
    var labelX = new LabelHelper( 'x', labelSize, red );
    labelX.position.set( size, 0, 0 );
    axes.add( labelX );

    var green = new THREE.Color( 0x00ff00 );
    var labelY = new LabelHelper( 'y', labelSize, green);
    labelY.position.set( 0, size, 0 );
    axes.add( labelY );

    var blue = new THREE.Color( 0x0000ff );
    var labelZ = new LabelHelper( 'z', labelSize, blue );
    labelZ.position.set( 0, 0, size );
    axes.add( labelZ );

}

AxisHelper.prototype = Object.create( THREE.Object3D.prototype );
AxisHelper.prototype.constructor = AxisHelper;
