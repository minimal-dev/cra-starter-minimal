/* eslint-disable import/no-extraneous-dependencies */
/* craco.config.js */

const CracoAlias = require('craco-alias')

module.exports = {
  style: {
    css: {
      loaderOptions: {
        esModule: true,
        modules: {
          namedExport: true,
          // exportLocalsConvention: 'dashesOnly',
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from jsconfig
        baseUrl: './',
      },
    },
  ],
  // Example of polyfills for Web3.js / Solana to work with webpack 5
  // webpack: {
  //   configure: {
  //     resolve: {
  //       fallback: {
  //         process: require.resolve('process/browser'),
  //         zlib: require.resolve('browserify-zlib'),
  //         stream: require.resolve('stream-browserify'),
  //         util: require.resolve('util'),
  //         buffer: require.resolve('buffer'),
  //         asset: require.resolve('assert'),
  //       },
  //     },
  //     plugins: [
  //       new webpack.ProvidePlugin({
  //         Buffer: ['buffer', 'Buffer'],
  //         process: 'process/browser',
  //       }),
  //     ],
  //   },
  // },
}
