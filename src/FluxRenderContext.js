/**
* Class to represent a WebGL context which can render for multiple viewports
*/
export default function FluxRenderContext () {
    /**
    * Pointer to the shared THREE.js renderer
    */
    try {
        this._hasWebGL = true;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true,
            alpha: false
        });
        this.renderer.autoClear = false;
        this.renderer.autoClearStencil = false;
        this.renderer.gammaInput = false;
        this.renderer.gammaOutput = false;
        // Allow interactive canvas to overlap other canvas
        this.renderer.domElement.style.position = "absolute";
    } catch (err) {
        // Replace renderer with mock renderer for tests
        this.renderer = {
            render: function () {},
            setSize: function () {},
            clear: function () {},
            setViewport: function () {},
            setClearColor: function () {},
            getSize: function () { return {width: 100, height: 100}; },
            getPixelRatio: function () { return 1; },
            domElement: document.createElement('div')
        };
        this._hasWebGL = false;
    }
    /**
    * Pointer to the three-viewport-renderer instance that is currently being rendered.
    */
    this.currentHost = null;
}

/**
* Maximum number of WebGL contexts allowed.
* Should be less than or equal to 16, the limit on recent systems.
*/
FluxRenderContext.MAX_CONTEXTS = 16;

// List of all render contexts shared globally
FluxRenderContext.contexts = [];

// Counter so new viewports know which context to create or reuse.
FluxRenderContext.nextContext = 0;

/**
* Each viewport uses the next available render context defined by this function
* @return {[type]} [description]
*/
FluxRenderContext.getNextContext = function () {
    var i = FluxRenderContext.nextContext;
    FluxRenderContext.nextContext += 1;
    FluxRenderContext.nextContext = FluxRenderContext.nextContext % FluxRenderContext.MAX_CONTEXTS;
    return FluxRenderContext.contexts[i];
};

FluxRenderContext.getNewContext = function () {
    var context;
    if (FluxRenderContext.contexts.length >= FluxRenderContext.MAX_CONTEXTS) {
        context = FluxRenderContext.getNextContext();
    } else {
        context = new FluxRenderContext();
        FluxRenderContext.contexts.push(context);
    }
    return context;
};

FluxRenderContext.prototype.hasWebGL = function() {
    return this._hasWebGL;
};