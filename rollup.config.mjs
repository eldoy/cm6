import { nodeResolve } from '@rollup/plugin-node-resolve'
export default {
  input: './editor.mjs',
  output: {
    file: './editor.js',
    format: 'iife'
  },
  plugins: [nodeResolve()]
}
