'use strict';

/**
 * Whether to draw edges on front and back faces
 */
EdgesHelper.EDGES_MODES = {
    NONE: 0,
    FRONT: 1,
    BACK: 2,
    BOTH: 3
};

/**
 * Create an object to render the edges of a mesh
 * @param  {Three.Mesh} mesh            The mesh to convert
 * @param  {Three.Material} material    The material on the mesh
 * @return {Three.EdgesHelper}          The edges object
 */
var createEdges = function(mesh, material) {
    var helper = new THREE.EdgesHelper(mesh);
    helper.material = material;
    helper.matrixAutoUpdate = false;
    helper.matrix = mesh.matrix;
    return helper;
};

/**
 * Create an object to render a mesh as edges
 * @param  {Three.Object3D} model The mesh
 */
export default function EdgesHelper(model) {
    THREE.Object3D.call( this );
    this.type = 'EdgesHelper';

    this.frontMaterial = new THREE.LineBasicMaterial({color: 0x000000});
    this.frontMaterial.depthFunc = THREE.LessEqualDepth;

    this.backMaterial = new THREE.LineBasicMaterial({color: 0x000000});
    this.backMaterial.transparent = true;
    this.backMaterial.depthFunc = THREE.GreaterDepth;
    this.backMaterial.opacity = 0.25;

    var _this = this;
    model.traverse(function(child) {
        if (child instanceof THREE.Mesh) {
            // create edge helper for front and back edges
            _this.add(
                createEdges(child, _this.frontMaterial)
            );
            _this.add(
                createEdges(child, _this.backMaterial)
            );
        }
    });
}

EdgesHelper.prototype = Object.create( THREE.Object3D.prototype );
EdgesHelper.prototype.constructor = EdgesHelper;

/**
 * Create the edges geometry for a model
 * @param {THREE.Object3D} newModel The model with edges
 * @param {EdgesHelper.EDGES_MODES} edgesMode Whether to draw edges enumeration
 * @return {EdgesHelper} The edges object
 */
EdgesHelper.AddEdges = function(newModel, edgesMode) {
    if (edgesMode === EdgesHelper.EDGES_MODES.NONE) return null;

    newModel.edgesHelper = new EdgesHelper(newModel);

    newModel.edgesHelper.frontMaterial.visible = false;
    if (edgesMode === EdgesHelper.EDGES_MODES.FRONT || edgesMode === EdgesHelper.EDGES_MODES.BOTH) {
        newModel.edgesHelper.frontMaterial.visible = true;
    }

    newModel.edgesHelper.backMaterial.visible = false;
    if (edgesMode === EdgesHelper.EDGES_MODES.BACK || edgesMode === EdgesHelper.EDGES_MODES.BOTH) {
        newModel.edgesHelper.backMaterial.visible = true;
    }
    return newModel.edgesHelper;
};