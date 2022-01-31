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
}
