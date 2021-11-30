/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      'fs': false,
      'tls': false,
      'net': false,
      'path': false,
      'zlib': false,
      'http': require.resolve('http-browserify'),
      'https': require.resolve('https-browserify'),
      'stream': require.resolve('stream-http'),
      'crypto': require.resolve('crypto-browserify'),
      'crypto-browserify': require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      'assert': false,
      'os': require.resolve('os-browserify/browser')
    } 
  },
  devServer: {
    historyApiFallback: true,
    webSocketServer: 'ws',
  },
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
    publicPath: '/'
  },
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};