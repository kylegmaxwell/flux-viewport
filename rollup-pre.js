// Workaround for https://github.com/rollup/rollup-plugin-commonjs/issues/105
if (!window.require) {
	window.require = function () {};
};
// Workaround for code that is meant to run in node.js
window.global = window;

// Workaround so that umd will be loaded as global not require.js
var define__default = window.define;
window.define=null;