const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  watch: true,
  entry: [
    'webpack/hot/poll?1000',
    './src/index.js'
  ],
  target: 'node',
  devServer: {
    hot: true,
    writeToDisk: true
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
  },
  externals: [
    nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
