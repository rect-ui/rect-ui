const path = require('path');

const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackCommon = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.([jt])sx?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          // { loader: MiniCssExtractPlugin.loader },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          // { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
            // 1024 == 1kb, pack to base64 inline url if size <- 10240 bytes
              limit: 10240,
              name: path.join('img/[name].[hash].[ext]'),
            },
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.join('font/[name].[hash].[ext]'),
          },
        }],
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 58888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info',
    })
  ]
};

module.exports = webpackCommon;
