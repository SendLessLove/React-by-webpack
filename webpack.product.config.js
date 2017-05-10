const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/js/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "src/css")
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        // test: /.\js?$/,
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "src/js")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|svg)$/,
        loaders: [
          'url-loader?limit=10000&name=[hash:8].[name].[ext]',
        ]
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.less', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "test.html"
    }),
    new ExtractTextPlugin({
     filename: 'css/style.css'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}