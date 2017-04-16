const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/js/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /.\js?$/,
        include: [
          path.resolve(__dirname, "src/js")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "test.html"
    })
  ]
}