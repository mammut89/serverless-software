const path = require('path')
const webpack = require('webpack');
const HappyPack = require('happypack');


module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader?id=jsx'
      }
    ]
  },
  plugins: [
     new webpack.optimize.UglifyJsPlugin({
       minimize: true,
       compress: {
         warnings: false
       }
     }),
     new HappyPack({
       id: 'jsx',
       threads: 4,
       loaders: [ 'babel-loader?cacheDirectory' ]
     })
   ]
}
