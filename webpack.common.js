const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const  PurifyCSSPlugin = require("purifycss-webpack");
const PurifyCssWebpack = require('purifycss-webpack');

const webpackConfig = {
  entry: {
    app: ['./src/app/index.js'],
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        }),
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, '/node_modules/'),
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        }),
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: [{
          loader: 'url-loader',
          options: { // 这里的options选项参数可以定义多大的图片转换为base64
            limit: 50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
            outputPath: 'images' //定义输出的图片文件夹
          }
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/pages',
        to: './src/pages'
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      minify:{
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: true
      }
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },
  resolve:{
    extensions: [".js",".css",".json"],
    alias: {} //配置别名可以加快webpack查找模块的速度
  },
};

module.exports = webpackConfig;
