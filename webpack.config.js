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
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: cssExtractor.extract('style', 'css!sass')
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ],
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
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [path.join(__dirname, './src')]
  }
};
