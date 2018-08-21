const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack');

const vendors = [
  'framework7',
];

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', 'manifest.json'),
      name: '[name]_[hash]',
      context: __dirname
    })
  ]
};
