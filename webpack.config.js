var webpack = require("webpack");

var path = require('path');
var node_modules_dir=path.resolve(__dirname,'node_modules');

module.exports = {

  context: __dirname,
  //debug: true,
  //devtool: 'source-map',
  //historyApiFallback: true,
  entry: {
    main: getEntrySources(['./index.js'])
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module:{
    loaders: [
      //besides following, also use babelrc to config hot module replacement if BABLE_ENV is set to 'hot'
      {test: /\.js$/, exclude: '/node_modules/',loader: "babel-loader", query:{presets: ['react', 'es2015']}},
      {test: /\.scss$/, loaders: ["style", "css", "sass"]},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      //url-loader will encode resource to base64 string if size smaller than limit
      {test: /\.png$/, loader: "url-loader?limit=100"},
      {test: /\.jpg$/, loader: "file-loader"},
    ]

  }
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV == 'hot') {
    //below only needed when using nodejs api
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/dev-server');
  } 

  return sources;
}
