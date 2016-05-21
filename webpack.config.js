var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssExtractor = new ExtractTextPlugin('styles.css', {allChunks: true});
var htmlExtractor = new ExtractTextPlugin('index.html');

module.exports = {
  entry: {
    app: [
      './src/index',
      './src/index.html',
      './src/styles.scss'
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: cssExtractor.extract('style', 'css!sass')
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.html?$/,
        loader: htmlExtractor.extract('html')
      }
    ]
  },
  plugins: [
    cssExtractor,
    htmlExtractor,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [path.join(__dirname, './src')]
  }
};
