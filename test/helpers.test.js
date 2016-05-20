'use strict';

import FluxHelpers from '../src/FluxHelpers.js';

export function initHelpers(t) {
    var helpers = new FluxHelpers();
    t.ok(helpers.add, 'Should inherit add from Objec3D');
    t.ok(helpers._grid, 'Helpers should have a grid property');
    t.end();
};