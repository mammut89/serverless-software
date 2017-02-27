var webpack = require('webpack')

module.exports = {
  entry: {
    'react': ['react', 'react-router', 'react-dom', 'react-fontawesome']
  },

  output: {
    filename: 'react-bundle.js',
    path: 'public/',
    library: 'react_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      path: 'public/react-manifest.json',
      name: 'react_lib'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
}
