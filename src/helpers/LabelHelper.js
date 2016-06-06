/**
 * @author arodic / http://akirodic.com/
 */
'use strict';
import THREE from 'three';

// TODO(aki): allow longer labels. Only one letter currently supported

export default function LabelHelper ( label, size, color ) {
    if (!color) {
        color = new THREE.Color( 0xff0000 );
    }
    var canvas, geometry, ctx, texture, material;

    geometry = new THREE.Geometry();
    geometry.vertices.push( new THREE.Vector3() );

    canvas = document.createElement( 'canvas' );
    canvas.width = size;
    canvas.height = size;

    ctx = canvas.getContext( '2d' );
    if (ctx) {
        ctx.font = size + 'px sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText( label, size / 2, size / 2 );
    }

    texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    texture.premultiplyAlpha = true;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    if (canvas.width) {
        material = new THREE.PointsMaterial(
            { size: size, sizeAttenuation: false, map: texture, transparent: true, color: color } );
    }
    else {
        material = new THREE.PointsMaterial( { transparent: true, color: color } );
    }
    material.blendSrc = THREE.OneFactor;
    material.blending = THREE.CustomBlending;

    THREE.Points.call( this, geometry, material );
}

LabelHelper.prototype = Object.create( THREE.Points.prototype );
LabelHelper.prototype.constructor = LabelHelper;
