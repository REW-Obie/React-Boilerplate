var path = require('path');
var webpack = require('webpack');

module.exports = {
  //the top level file(s) that we want to include in our build
  entry: './default.js',
  // an object containing your output configuration
  output: { path: __dirname, filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
