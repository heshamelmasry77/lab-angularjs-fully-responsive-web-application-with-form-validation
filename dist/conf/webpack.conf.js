'use strict';

var webpack = require('webpack');
var conf = require('./gulp.conf');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var FailPlugin = require('webpack-fail-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre'
    }, {
      test: /\.(css|scss)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['ng-annotate-loader']
    }, {
      test: /\.html$/,
      loaders: ['html-loader']
    }]
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin(), new webpack.NoEmitOnErrorsPlugin(), FailPlugin, new HtmlWebpackPlugin({
    template: conf.path.src('index.html')
  }), new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function postcss() {
        return [autoprefixer];
      }
    },
    debug: true
  }), new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Tether: 'tether',
    Popper: 'popper.js'
  })],
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: './' + conf.path.src('index')
};
//# sourceMappingURL=webpack.conf.js.map