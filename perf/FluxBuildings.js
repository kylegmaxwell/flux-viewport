'use strict';

function FluxBuildings() {
    // Whether a time trial is currently running.
    // This requires only one time trial to run at a time per instance.
    this._inTrial = false;
    // How many times render has been called in this time trial.
    this._renderCount = 0;
    // How many times to render in each time trial.
    this._maxCount = 10;

    this._perf = new InteractivePerf();

    this.printMemory();
}

/**
 * Models that can be loaded from GCS
 * New models can be uploaded here:
 * https://console.cloud.google.com/storage/browser/object-library/?pli=1&project=object-library
 */
FluxBuildings.urls = [
    "https://storage.googleapis.com/object-library/sphere.json",
    "https://storage.googleapis.com/object-library/sphereBig.json",
    "https://storage.googleapis.com/object-library/sphereSmall.json",
    "https://storage.googleapis.com/object-library/spheres.json",
    "https://storage.googleapis.com/object-library/buildingsMed.json",
    "https://storage.googleapis.com/object-library/buildingsBig.json"
];

/**
* Grab a model from flux-viewport-models and convert it to three.js runtime.
*/
FluxBuildings.prototype.loadModel = function (url) {
    console.log("Loading model",url);
    var _this = this;
    this.requestModel(url, function (result) {
        this._perf.begin();
        fluxViewport.setGeometryEntity(result).then(function (result) {
            fluxViewport.focus();
            _this._perf.end('Load model');
            if (result.meshIsEmpty()) {
                console.warn(result.primStatus.invalidKeySummary());
            }
            _this.countGeometry();
            _this.printMemory();
        }).catch(function () {
        });
    }.bind(this));
};

/**
* Respond to user pressing the record button.
* Start recording any renders that are triggered by user interaction.
* The next time the button is pressed the results will be processed and output.
*/
FluxBuildings.prototype.handleRecord = function () {
    if (!fluxViewport.renderPatched) {
        var renderFunction = fluxViewport.render;
        var _this = this;
        fluxViewport.render = function() {
            _this._perf.begin();
            renderFunction.call(fluxViewport);
            _this._perf.end();
        };
        fluxViewport.renderPatched = true;
    }
    this._perf.toggleRecording();
};

/**
* Respond to user pressing the trial button.
* Start a time trial that renders the scene a certain number of times
* and records the performance.
*/
FluxBuildings.prototype.handleTrial = function () {
    this._testRender();
};

/**
* Respond to usr pressing count button.
* Count the number of triangles in the object.
*/
FluxBuildings.prototype.countGeometry = function () {
    var model = fluxViewport._renderer._model;
    this.countObjects(model);
    this.countTriangles(model);
    this.computeBoundingBox(model);
};

FluxBuildings.prototype.countObjects = function (objectRoot) {
    var count = 0;
    objectRoot.traverse( function (element) {
        if (element.type === "Mesh") {
            count++;
        }
    });
    console.log("Number of objects:",count);
};

FluxBuildings.prototype.countTriangles = function (objectRoot) {
    var faceCount = 0;
    var vertCount = 0;
    objectRoot.traverse( function (element) {
        if (element.type === "Mesh" && element.visible===true) {
            if (element.geometry instanceof THREE.BufferGeometry) {
                vertCount += element.geometry.attributes.position.length;
                if (element.geometry.attributes.index) {
                    faceCount += element.geometry.attributes.index.length/3;
                } else { // default is one face per three points
                    faceCount += element.geometry.attributes.position.length/3;
                }
            }
            else { // regular (non buffer) geometry
                vertCount += element.geometry.vertices.length;
                faceCount += element.geometry.faces.length;
            }
        }
    });
    console.log("Number of vertices:", vertCount);
    console.log("Number of faces:", faceCount);
};

/**
* Compute the bounding box of the object, including all of it's children.
* @param  {THREE.Object3D} objectRoot The object to size up.
* @return {Bounding Box}        List of two THREE.Vector3's showing max min
*/
FluxBuildings.prototype.computeBoundingBox = function (objectRoot) {

    var bbMax = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    var bbMin = new THREE.Vector3(Infinity, Infinity, Infinity);
    var tmp = new THREE.Vector3(0,0,0);

    var elementIndex = 0;
    var foundBufferGeometry = false;
    var foundRegularGeometry = false;
    objectRoot.traverse( function (element) {
        if (element.matrixWorldNeedsUpdate) {
            // Tell three.js to update the matrix from the position attributes.
            element.updateMatrixWorld(true);
        }

        // Use vertices to compute bounds
        if (element.type === "Mesh" && element.visible===true) {

            if (element.geometry instanceof THREE.BufferGeometry) {
                foundBufferGeometry = true;
                var positions = element.geometry.attributes.position.array;
                var i = 0;
                while (i < positions.length) {
                    tmp.set(positions[i],positions[i+1],positions[i+2]);
                    tmp.applyMatrix4(element.matrix);
                    bbMin.min(tmp);
                    bbMax.max(tmp);
                    i+=3;
                }
            }
            else { // regular (non buffer) geometry
                foundRegularGeometry = true;
                var vertices = element.geometry.vertices;
                vertices.forEach( function (vert) {
                    vert.applyMatrix4(element.matrix);
                    bbMin.min(vert);
                    bbMax.max(vert);
                });
            }

        }
        elementIndex++;
    });
    if (foundBufferGeometry) {
        console.log("Found buffer geometry");
    }
    if (foundRegularGeometry) {
        console.log("Found regular geometry");
    }
    // Compute size from bounds
    tmp.copy(bbMax);
    tmp.sub(bbMin);
    console.log("Maximum axis aligned length:",Math.max(Math.max(tmp.x,tmp.y),tmp.z));
};

/**
* Send an xhr to retrieve the model at the given url.
* @param  {String}   url      GCS item to retrieve.
* @param  {Function} callback The function to act on the model.
*/
FluxBuildings.prototype.requestModel = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        if (this.status === 200) { // OK
            var responseObj = JSON.parse(this.response);
            callback(responseObj);
        } else {
            console.error(this.status, this.response);
        }
    });
    xhr.open("GET", url, true);
    xhr.send();
};

/**
* Print the amount of memory used by Chrome
* Requires --enable-precise-memory-info when launching Chrome to get around security barrier.
* @return {[type]} [description]
*/
FluxBuildings.prototype.printMemory = function () {
    if (window.performance && window.performance.memory) {
        console.log("Js Heap used: ", window.performance.memory.usedJSHeapSize/1000000,"M");
    } else {
        console.log("This browser does not support memory statistics.");
    }
};

/**
* Render a certain number of times and output
* @return {[type]} [description]
*/
FluxBuildings.prototype._testRender = function () {
    // Trial run a few renders
    this._perf.startRecording();
    this._inTrial = true;
    this._renderCount = 0;
    for (var i=0;i<this._maxCount;i++) {
        this._perf.begin();
        fluxViewport.render();
        this._perf.end();
    }
    this._perf.stopRecording();
};
