'use strict';

import THREE from 'three';

// From legacy three.js r72 THREE.ShaderLib.depthRGBA
var depthRGBA = {

    uniforms: {},

    vertexShader: [

        THREE.ShaderChunk.common,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,

        "void main() {",

            THREE.ShaderChunk.skinbase_vertex,

            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.skinning_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,

        "}"

    ].join( "\n" ),

    fragmentShader: [

        THREE.ShaderChunk.common,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,

        "vec4 pack_depth( const in float depth ) {",

        "   const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );",
        "   const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );",
        "   vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", // "    vec4 res = fract( depth * bit_shift );",
        "   res -= res.xxyz * bit_mask;",
        "   return res;",

        "}",

        "void main() {",

            THREE.ShaderChunk.logdepthbuf_fragment,

        "   #ifdef USE_LOGDEPTHBUF_EXT",

        "       gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );",

        "   #else",

        "       gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );",

        "   #endif",

            //"gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z / gl_FragCoord.w );",
            //"float z = ( ( gl_FragCoord.z / gl_FragCoord.w ) - 3.0 ) / ( 4000.0 - 3.0 );",
            //"gl_FragData[ 0 ] = pack_depth( z );",
            //"gl_FragData[ 0 ] = vec4( z, z, z, 1.0 );",

        "}"

    ].join( "\n" )


};

// Multipass Variables (private, singleton)
// Material that writes depth to pixels
export var DEPTH_MATERIAL = new THREE.ShaderMaterial( {
    uniforms: THREE.UniformsUtils.clone( depthRGBA.uniforms ),
    fragmentShader: depthRGBA.fragmentShader,
    vertexShader: depthRGBA.vertexShader,
    blending: THREE.NoBlending
} );

// Material that writes normal to pixels
export var NORMAL_MATERIAL = new THREE.MeshNormalMaterial();