const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/index.js'
  ],
  stats: 'minimal',
  target: 'node',
  devServer: {
    hot: true,
    writeToDisk: true
  },
  module: {
    // rules: [
    //   {
    //     test: /\.m?js$/,
    //     include: /src/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: [['@babel/preset-env', { "targets": {"node": 12} }]],
    //         plugins: [["@babel/plugin-proposal-pipeline-operator", { "proposal": "fsharp" }]]
    //       }
    //     }
    //   }
    // ]
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
