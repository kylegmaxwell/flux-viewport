import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default ({
    entry: 'src/index.js',
    external: ['three'],
    globals: ['three:THREE'],
    plugins: [json(), nodeResolve(), commonjs(),
        replace({
            ENVIRONMENT: 'BROWSER',
            delimiters: [ '${', '}' ]
        })
    ]
});
