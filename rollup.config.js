import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default [
 {
  input: 'src/plus.ts',
  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es',
    exports: 'auto'
  }],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {})
  ],
  plugins: [
    nodeResolve(),
    typescript({ sourceMap: true })
  ]
}];