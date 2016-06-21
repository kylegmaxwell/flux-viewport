import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default ({
    entry: 'test/index.test.js',
    external: ['three'],
    globals: ['three:THREE'],
    plugins: [
        builtins(),
        nodeResolve({ jsnext: true, main: true, browser: true }),
        commonjs({
            ignoreGlobal: true,
            exclude: ['node_modules/rollup-plugin-node-globals/**']
        }),
        globals(),
        json(),
        replace({
            ENVIRONMENT: 'TEST',
            delimiters: [ '${', '}' ]
        })
    ]
});
