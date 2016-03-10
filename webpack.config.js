var webpack = require("webpack");

var path = require('path');
var node_modules_dir=path.resolve(__dirname,'node_modules');

module.exports = {

    context: __dirname,
    debug: true,
    devtool: 'source-map',
    entry: {
      main: getEntrySources(['./index.js'])
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "dist"),
        publicPath: "http://localhost:8080/dist/",
    },
    module:{
        loaders: [
            {test: /\.js$/, exclude: '/node_modules/',loader: "babel-loader", query:{presets: ['react', 'es2015']}},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "url-loader?limit=9999999999"},
            {test: /\.jpg$/, loader: "file-loader"},
            /*/ { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" } */
        ]

    }
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}
