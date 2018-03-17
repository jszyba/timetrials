let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'build');
let APP_DIR = path.resolve(__dirname, 'react');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.OldWatchingPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
    ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  debug: false,
  devtool: 'cheap-module-source-map',
  // debug: true,
  // devtool: '#eval-source-map'
};
