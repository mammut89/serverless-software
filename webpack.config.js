const path = require('path')
const webpack = require('webpack');
const HappyPack = require('happypack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        enforce: "pre",
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'happypack/loader?id=jsx',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./public/react-manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new HappyPack({
      id: 'jsx',
      threads: 4,
      loaders: ['babel-loader?cacheDirectory']
    }),
    new ExtractTextPlugin({
      filename: 'app.css'
    })
  ]
}
