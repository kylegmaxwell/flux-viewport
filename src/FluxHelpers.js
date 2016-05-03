'use strict';
/**
 * Manages viewport helpers (grid and axis).
 */
export default function FluxHelpers() {

    //Viewport helpers to be rendered in this viewport.
    this.scene = new THREE.Scene();

    // Determines the size of the grid cell
    this.gridSize = 10;

    // Determines the total grid width
    this.gridWidth = 10;

    // Grid axis color
    this.gridColor1 = new THREE.Color(0x111111);

    // Grid color
    this.gridColor2 = new THREE.Color(0xaaaaaa);

    this.grid = new THREE.GridHelper(this.gridSize * this.gridWidth, this.gridSize);
    this.grid.setColors(this.gridColor1, this.gridColor2);
    this.scene.add(this.grid);
    this.grid.material.transparent = true;
    this.grid.material.opacity = 0.5;
    this.grid.material.depthWrite = false;
    this.grid.rotation.set(Math.PI / 2, 0, 0);

    this.axis = new THREE.AxisHelper(10);
    this.axis.traverse(function(child) {
        if (child.material) {
            child.material.depthWrite = false;
        }
    });
    this.scene.add(this.axis);

    // compass is not part of the scene and it is rendered with its own camera
    // because it needs to sit in the corner of the viewport and not have
    // perspective distortion or be dependent on viewports field of view.
    var compassScene = new THREE.Scene();
    var compassObj = new THREE.Object3D();
    var compassAxis = new THREE.AxisHelper(10);
    this.compass = compassObj;
    compassObj.add(compassAxis);
    compassScene.add(compassObj);
    this.compass.scene = compassScene;
    this.compass.matrixAutoUpdate = false;
    this.compass.camera = new THREE.PerspectiveCamera(10, 1, 0.01, 200);
    this.compass.camera.position.z = 150;
    this.compass.update = function(camera) {
        this.matrix.extractRotation(camera.matrix);
        this.matrix.getInverse(this.matrix);
    }
};

FluxHelpers.prototype.setView = function(view) {
  switch (view) {
    case 'top':
    case 'bottom':
    case 'persp':
        // facing Y
        this.grid.rotation.set(Math.PI / 2, 0, 0);
        break;
    case 'left':
    case 'right':
        // facing X
        this.grid.rotation.set(0, 0, Math.PI / 2);
        break;
    case 'front':
    case 'back':
        // facing Z
        this.grid.rotation.set(0, 0, 0);
    break;
  }
};

FluxHelpers.prototype.setShowGrid = function(showGrid) {
    this.grid.visible = showGrid;
};

FluxHelpers.prototype.setShowAxis = function(showAxis) {
    this.axis.visible = showAxis;
};

FluxHelpers.prototype.setShowCompass = function(showCompass) {
    this.compass.visible = showCompass;
};
