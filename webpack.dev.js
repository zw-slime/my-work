const merge = require('webpack-merge');
const common = require('./webpack.common.js');
let path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true
  }
});