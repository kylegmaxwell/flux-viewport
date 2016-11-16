import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default ({
    entry: 'test/index.test.js',
    external: ['three'],
    plugins: [
        builtins(),
        nodeResolve({ jsnext: true, module:true }),
        commonjs({
            ignoreGlobal: true,
            exclude: [
                '**/rollup-plugin-node-globals/**',
                '**/rollup-plugin-node-builtins/**',
                '**/three/**'
            ]
        }),
        globals(),
        json(),
        replace({
            ENVIRONMENT: 'TEST',
            delimiters: [ '${', '}' ]
        }),
        // Workaround below is based on this issue.
        // https://github.com/rollup/rollup/issues/1007
        // Will not be needed after gl-matrix uses ES6 modules
        // https://github.com/toji/gl-matrix/pull/209
        replace({
          include: '**/gl-matrix/src/gl-matrix/common.js',
          values: { '\'SIMD\' in this': '\'SIMD\' in global' }
        }),
        replace({
          include: '**/rollup-plugin-node-builtins/**',
          values: { 'global.location.host ': '(!global.location?global.location:global.location.host) ' }
        })
    ]
});
