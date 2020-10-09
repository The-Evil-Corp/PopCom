import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
    input: './src/index.js',

    output: [
        {
            name: 'comlib',
            sourcemap: true,
            file: './dist/index.js',
            format: 'umd',
        },
    ],

    plugins: [
        postcss({
            modules: true, // To use CSS Modules
            use: ['sass'], // To use SASS/SCSS
            extract: true, // To extract CSS to a different file
        }),
        resolve({ 
            browser: true,
            extensions: [ '.js', '.jsx', '.json' ],
        }),
        babel({
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-env', 
                '@babel/preset-react'
            ],
        }),
        commonjs(),
    ],

    external: [
        'react', 
        'react-dom'
    ],

    globals: { 
        react: 'React' 
    },
};