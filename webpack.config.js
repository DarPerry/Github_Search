const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
  },
  mode: 'development'
}