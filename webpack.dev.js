const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpackConfig = merge(common, {
  entry: {
    index: './demo/src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: '[name].[hash].min.js',
    // if use cdn, remember adding publicPath
    // publicPath: 'https://cdn.example.com/assets/[hash]/',
    // library: 'rect-ui',
    // libraryTarget: 'umd',
  },
  mode: 'development',
  devtool: 'cheap-module-source-map', // 'eval' is not supported by error-overlay-webpack-plugin
  plugins: [
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      title: 'Rect-UI Demo',
      filename: 'index.html',
      template: './demo/static/index.html',
      inject: true,
      hash: true,
    }),
  ],
  devServer: {
    contentBase: './demo/dist',
    host: '0.0.0.0',
    port: 1997,
    historyApiFallback: true,
    overlay: {
      errors: true,
    },
    open: false,
    inline: true,
    hot: true,
    compress: false,
  },
});

module.exports = webpackConfig;
