'use strict';
import * as THREE from 'three';

// Singleton temporary variables (saves on garbage collection)
var vTmp = new THREE.Vector3();
var pA = new THREE.Vector3();
var pB = new THREE.Vector3();
var ab = new THREE.Vector3();

/**
 * Compute the union of two THREE.Sphere shapes and store the result in the first input
 * @param  {THREE.Sphere} a First sphere, will be set to result
 * @param  {THREE.Sphere} b Second sphere
 */
function _sphereJoin(a, b) {//base, extra
    // The new sphere is defined by the two maximal points along the line between the two centers
    ab.copy(b.center).sub(a.center).normalize();
    pB.copy(ab).multiplyScalar(b.radius).add(b.center);
    pA.copy(ab).multiplyScalar(-1*a.radius).add(a.center);
    var center = vTmp.copy(pA).add(pB).multiplyScalar(0.5);
    var rad = Math.max(center.distanceTo(pA), center.distanceTo(pB));
    a.set(center, rad);
}

// Singleton temporary variables (saves on garbage collection)
var sphereTmp = new THREE.Sphere();

/**
 * Get bounding sphere of the current selection
 * @param {THREE.Object3D}  obj The object which needs to be bounded
 * @return {THREE.Object3D}  The current selection
 */
export function getBoundingSphere(obj) {
    var objects = [];
    obj.traverse(function (selection) {
        objects.push(selection);
    });
    return getListBoundingSphere(objects);
}

/**
 * Get bounding sphere of the current selection
 * @param {Array.<THREE.Object3D>}  objs The object which needs to be bounded
 * @return {THREE.Object3D}  The current selection
 */
export function getListBoundingSphere(objs) {
    var sphereAccum = null;
    for (var i=0;i<objs.length;i++) {
        var selection = objs[i];
        if (!selection.geometry) continue;
        if (!selection.geometry.boundingSphere) {
            selection.geometry.computeboundingSphere();
        }
        selection.updateMatrixWorld();
        sphereTmp.copy(selection.geometry.boundingSphere).applyMatrix4(selection.matrixWorld);
        if (sphereAccum) {
            _sphereJoin(sphereAccum, sphereTmp);
        } else {
            sphereAccum = new THREE.Sphere().copy(sphereTmp);
        }
    }
    return sphereAccum;
}
