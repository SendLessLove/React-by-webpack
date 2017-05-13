const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: ["react"],
    app: "./src/js/index"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/css')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'src/css')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 2 } },
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader'
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
    extensions: [' ', '.js', '.jsx', 'css', '.less', '.scss'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.min.js',
    }), // 提取公共文件
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    }),
    new ExtractTextPlugin({
     filename: 'css/[name].[hash].css'
    }),
    new webpack.BannerPlugin("Copyright yusin..."),
    new webpack.optimize.UglifyJsPlugin()
  ]
}