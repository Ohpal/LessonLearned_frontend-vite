const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../BACKEND_1111'),
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }),
    ],
  },
  devServer: {
    port: 4800,
    // host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://:4600/api/',
        changeOrigin: true,
        // ws: false,
        // WebSocket: false,
        pathRewrite: { '^/api': '' },
      },
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    allowedHosts: 'all',
  },
})
