'use strict';

import FluxJsonToThree from 'flux-json-to-three/build/index.common.js';
import modeling from 'flux-modelingjs/modeling-core.js';
import setHeaders from './FluxRequest.js';

/**
* Stand in for the finished status on an xhr
*/
var READY_STATE_FINISHED = 4;

// Array of enviroment textures for image-based lighting.
// Singleton
// Cubemap textures are pre-filtered to simulate different levels of light diffusion.
// More about the technique:
// http://developer.amd.com/tools-and-sdks/archive/legacy-cpu-gpu-tools/cubemapgen/
var iblCubeArray = [
    new THREE.Texture(), // 512x512
    new THREE.Texture(), // 256x256
    new THREE.Texture(), // 128x128
    new THREE.Texture(), // 61x64
    new THREE.Texture(), // 32x32
    new THREE.Texture(), // 16x16
    new THREE.Texture(), // 8x8
    new THREE.Texture(), // 4x4
    new THREE.Texture()  // 2x2
];

// Loads pre-filtered textures
function loadImages(path) {
    return new Promise(function (resolve) {
        THREE.ImageUtils.crossOrigin = true;
        var loadedImageCount = 0;
        for (var i = 0; i <= 8; i++) {
            var iblCubeUrls = [
                path + '_m0' + i + '_c00.png',
                path + '_m0' + i + '_c01.png',
                path + '_m0' + i + '_c02.png',
                path + '_m0' + i + '_c03.png',
                path + '_m0' + i + '_c04.png',
                path + '_m0' + i + '_c05.png'
            ];
            iblCubeArray[i] = THREE.ImageUtils.loadTextureCube(iblCubeUrls, undefined, function() {
                loadedImageCount++;
                if (loadedImageCount === 9) {
                    resolve();
                }
            });
            iblCubeArray[i].format = THREE.RGBFormat;
        }
    });
}

// Singleton promise for async loading
var imagesLoadingPromise = null;

/**
* Flux geometry class converts parameter objects to geometry
* @param {String} tessUrl The url for the brep tessellation service
* @param {String} iblUrl The url for image based lighting textures
* @constructor
*/
export default function FluxGeometryBuilder(tessUrl, iblUrl) {

    // String path to tessellation API endpoint
    this._parasolidUrl = tessUrl;
    this._imagesUrl = iblUrl;

    // Flag to track whether a request is in the works
    // This causes subsequent requests to this object to be ignored
    // TODO(Kyle): This will no longer be necessary once we get rid of polymer and/or each request isn't set twice
    this.running = false;

    // quality   - tesselation quality, ranges 0-4; the bigger, the better
    this.tessellateQuality = 2.0;
}

/**
* Create a new model for the given entities.
*
* @precondition: !this.running
* Note: The results of this function are stored as member variables,
* so you must check running before calling convert repeatedly
* on the same instance or race conditions can occur.
*
* @param {Object} entities The parameters objects
* @return {Promise} A promise object that sets the model when it completes
*/
FluxGeometryBuilder.prototype.convert = function(entities) {
    var _this = this;
    this.running = true;
    var hasRoughness = FluxJsonToThree.hasRoughness(entities);
    if (hasRoughness && !imagesLoadingPromise && this._imagesUrl) {
        imagesLoadingPromise = loadImages(this._imagesUrl);
    }
    return Promise.resolve(imagesLoadingPromise).then(function () {
        return _this.convertHelper(entities);
    });
};

/**
 * Function that actually does conversion once assets have loaded
 * @param {Array} entities Array of entities or arrays
 * @return {Promise} Promise to resolve when geometry is ready
 */
FluxGeometryBuilder.prototype.convertHelper = function(entities) {
    var geometryResults = new FluxJsonToThree.GeometryResults();
    geometryResults.cubeArray = iblCubeArray;

    if (entities == null || typeof entities != 'object') {
        this.running = false;
        return Promise.resolve(geometryResults);
    }

    // sync - process geometric primitives
    this._parasolidCreateObject(entities, geometryResults);

    // async - tessellate breps on the server
    var _this = this;
    return Promise.resolve(this._handleAsyncGeom(geometryResults).then(function (results) { // resolve
        return results;
    }).catch(function (results) { // reject
        if (results instanceof Error) {
            console.warn(results.stack); // eslint-disable-line no-console
        }
        return geometryResults;
    })).then(function (results) { // resolve
        _this.running = false;
        return results;
    });
};

/**
 * Create THREE.js objects from data in the Flux JSON format.
 * The data defines Parasolid Entities.
 * More info on Parasolid Entities can be found here:
 * https://bitbucket.org/vannevartech/parasolid-worker/src/010e74872145b3ac97b221acdca37d9746e88276/doc/ENTITIES.md
 * @param    {Object}    data    The geometry data as objects
 * @param    {GeometryResults}    geometryResults    Geometry and errors object
 */
FluxGeometryBuilder.prototype._parasolidCreateObject = function(data, geometryResults) {
    try {
        FluxJsonToThree.createObject(data, geometryResults);
    }
    catch(err) {
        this._handleInvalidPrims(data, err, geometryResults);
    }
};

/**
 * Provide error handling to determine invalid prims user message
 * @param    {Object} data    The geometry that was attempted to parse
 * @param    {Error}    err     Exception object from try catch
 * @param    {GeometryResults} geometryResults    Contains and geometry and errors
 */
FluxGeometryBuilder.prototype._handleInvalidPrims = function(data, err, geometryResults) {
    var errorMessage = 'Unknown error';
    if (err.name !== 'FluxGeometryError') {
        this.running = false;
        // An unknown error occurred
        throw err;
    } else {
        errorMessage = err.message;
    }

    if (data && data.primitive) {
        geometryResults.primStatus.appendError(data.primitive, errorMessage);
    } else {
        geometryResults.primStatus.appendError('unknown', errorMessage);
    }
};

/**
 * Send a request to tessellate breps, and add them to the scene.
 *
 * This server currently aborts when there is an error in the tessellation operation, but in the
 * future it could respond with status 200, but contain a mix of successful and failed
 * tesselations. In those mixed cases resolve is called, but the error status is still
 * available on the returned geometryResults object.
 *
 * @param {Object} geometryResults The container for meshes, errors, and entities
 * @return {Promise}     A promise that resolves when the geometry is loaded
 */
FluxGeometryBuilder.prototype._handleAsyncGeom = function(geometryResults) {
    var _this = this;
    // Create a promise for the operation to tessellate all entities
    return new Promise(function(resolve, reject) {
        if (geometryResults.asyncPrims.length > 0) {
            _this._tessellateValues(geometryResults).then(function (tessResponse) { // resolve
                var resultObj = JSON.parse(tessResponse.result);
                var errors = resultObj.Errors;
                _this._handleBrepErrors(errors, geometryResults, tessResponse);
                _this._handleBrepResults(resultObj, geometryResults, tessResponse);
                resolve(geometryResults);
            }).catch(function (response) { // reject
                if (response instanceof Error) {
                    console.warn(response.stack); // eslint-disable-line no-console
                    geometryResults.primStatus.appendError('brep', response.message);
                    reject(geometryResults);
                } else {
                    if (response.readyState >= READY_STATE_FINISHED) {
                        geometryResults.primStatus.appendError('brep', _this._interpretServerErrorCode(response.status, response.responseText));
                    } else {
                        geometryResults.primStatus.appendError('brep', 'Duplicate request was aborted.');
                    }
                }
                reject(geometryResults);
            });
        } else {
            resolve(geometryResults);
        }
    });
};

/**
 * Parse errors and update status map
 * @param  {Object} errors          Parasolid errors map
 * @param  {GeometryResults} geometryResults   Results container
 * @param  {Object} tessResponse    Server response
 */
FluxGeometryBuilder.prototype._handleBrepErrors = function (errors, geometryResults, tessResponse) {
    // There were invalid breps or other server errors
    if (errors && Object.keys(errors).length > 0) {
        var fullErrorMessage = errors[Object.keys(errors)[0]].Message;
        // Set the server error as the invalid prim message
        geometryResults.primStatus.appendError(
            tessResponse.primitives[this._findErroredPrim(fullErrorMessage)],
            this._interpretServerError(fullErrorMessage));
    }
};

/**
 * Take meshes as data objects from Parasolid and convert them to renderable geometry
 * @param  {Object} resultObj       Container for meshes data
 * @param  {GeometryResults} geometryResults   Results container
 * @param  {Object} tessResponse    Server response
 */
FluxGeometryBuilder.prototype._handleBrepResults = function (resultObj, geometryResults, tessResponse) {
    // There were valid breps that tessellated
    if (resultObj.Output.Results) {
        var data = resultObj.Output.Results.value;
        for (var key in data) {
            var primitive = tessResponse.primitives[key];
            geometryResults.primStatus.appendValid(primitive);
            var primObj = data[key];
            var stlAscii = window.atob(primObj.content);
            var stlData = {
                primitive:primObj.format,
                data:stlAscii
            };
            // This function adds the results as children of geometryResults.mesh
            FluxJsonToThree.createObject(stlData, geometryResults);
        }
    }
};

/**
 * Asynchronously request a tessellated model from the back end service.
 * @precondition Each value is a brep entity with a primitive property
 * @param    {GeometryResults} geometryResults Results container with async primitives unhandled from previous call
 * @return {Promise}     A promise that resolves when the geometry is loaded
 */
FluxGeometryBuilder.prototype._tessellateValues = function (geometryResults) {
    // Flat array of Flux entity objects
    var values = geometryResults.asyncPrims;
    if (!values || values.constructor !== Array) {
        return Promise.resolve(geometryResults);
    }
    // Keep track of the primitive names in the values array
    var primitives = {};
    var sceneStr = this._constructScene(geometryResults, values, primitives);

    var xhr = new XMLHttpRequest();
    var xhrPromise = new Promise(function (resolve, reject) {
        var resultObj = {'result': '', 'primitives': primitives};
        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if(xhr.readyState !== READY_STATE_FINISHED) return;
            if (xhr.status == 200) {
                resultObj.result = this.responseText;
                resolve(resultObj);
            } else {
                reject(new Error('Server error '+xhr.status+' '+xhr.responseText ));
            }
        };
    });
    xhr.open('POST', this._parasolidUrl);
    setHeaders(xhr, 'application/json');
    xhr.send(sceneStr);

    // Check if this module already has a pending request and cancel it
    if (this._lastTessRequest &&
            this._lastTessRequest.readyState < READY_STATE_FINISHED) {
        this._lastTessRequest.abort();
    }
    this._lastTessRequest = xhr;

    return xhrPromise;
};

/**
 * Construct a scene object to format the request for brep tessellation
 * @param  {GeometryResults} geometryResults Results container
 * @param  {Array} values List of primitives to tessellate
 * @param  {Object} primitives Keep track of the primitive names in the values array.
 *                             This is a map so that in the case of a server error the primitives
 *                             can be looked up based on server message which contains their
 *                             resultId string, which is a unique identifier
 * @return {String} Text describing the operations formatted for the query to be sent to parasolid
 */
FluxGeometryBuilder.prototype._constructScene = function (geometryResults, values, primitives) {
    var scene = modeling.scene();
    for (var i=0; i<values.length; i++) {
        var value = values[i];
        if (!value || !value.primitive) continue;
        var resultId = 'result'+i;
        scene.add(resultId, value);
        var tessOp = modeling.operations.tesselateStl(resultId, this.tessellateQuality);
        // The first argument must be a unique id. It is an integer
        // so it can be used to look up the primitive later.
        scene.add(resultId, tessOp);
        primitives[resultId] = value.primitive;
    }
    if (Object.keys(primitives).length === 0) {
        return Promise.resolve(geometryResults);
    }
    return JSON.stringify({'Scene':scene});
};

/**
 * Parse server error message and interpret to be human readable.
 * Eventually the sever might have better messages:
 * https://vannevar.atlassian.net/browse/GI-1933
 * @param    {String} text The full error text
 * @return {String}            The improved error message
 */
FluxGeometryBuilder.prototype._interpretServerError = function (text) {
    var errorMessage = text.slice(0, text.indexOf('\n'));
    // Add a more clear explanation for this specific error
    if (errorMessage === 'PK_ERROR_wrong_transf') {
        errorMessage = 'Flux is currently unable to model objects '+
                'that are outside of a bounding box that is 1000 units '+
                'wide centered at the origin. Please scale down your '+
                'models or change units.';
    } else if (errorMessage === 'Translator loader error') {
        errorMessage = 'The brep translator could not be initialized. '+
                'Perhaps the license has expired. Please contact Flux to get '+
                'this resolved.';
    }
    return 'Server error: '+errorMessage;
};

/**
 * Workaround for finding the prim associated with the error.
 * The backend does not have a good API for this yet.
 * https://vannevar.atlassian.net/browse/PLT-4228
 * @param    {String} text The full error text
 * @return {String}            The primitive name
 */
FluxGeometryBuilder.prototype._findErroredPrim = function (text) {
    var match = text.match(/\/result.*\n/);
    return match ? match[0].slice(1, match[0].length-1) : '';
};

/**
 * Create a user error message based on status codes
 * @param    {String} status The error html status code
 * @param    {String} text The full error text
 * @return {String}            The error message
 */
FluxGeometryBuilder.prototype._interpretServerErrorCode = function (status, text) {
    if (status === 504) {
        return "Server error: Your request exceeded the maximum time limit for execution.";
    }
    console.warn("Server error in tessellation. Status:",status,":",text); // eslint-disable-line no-console
    return "Server error: The brep tessellation service is unavailable.";
};
