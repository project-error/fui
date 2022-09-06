import babel from '@rollup/plugin-babel';

export default {
  plugins: [
    babel({ babelHelpers: 'bundled', plugins: [["jsx-dom-expressions", {moduleName: '../dist/index.js'}]]})
  ],
  input: 'main.js',
  output: {
    format: 'es',
    file: 'out.js'
  }
}