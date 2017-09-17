var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist');
var APP_DIR = path.resolve(__dirname, 'lib/');

var config = {

  entry: APP_DIR + '/index.jsx',

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  node:{
    "fs": "empty",
    "child_process": "empty"
  }
};

module.exports = config;
