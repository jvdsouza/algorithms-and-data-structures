// import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';


export default {
    input: 'src/index.ts',
    output: {
        dir: 'build',
        format: 'cjs',
    },
    plugins: [
        typescript(), 
        babel({ babelHelpers: 'bundled' }),
    ],
  };