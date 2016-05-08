const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 8080;
config.entry.app.unshift(`webpack-dev-server/client?http://localhost:${port}/`, "webpack/hot/only-dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: './dist',
  hot: true
});
server.listen(port);