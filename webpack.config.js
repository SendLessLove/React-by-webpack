const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:9000' }), // 自动打开端口
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    }),
    new ExtractTextPlugin({
     filename: 'css/style.css'
    }),
    new webpack.optimize.UglifyJsPlugin() // 代码丑化
  ]
}