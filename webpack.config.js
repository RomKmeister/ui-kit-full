const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: /fonts/,
        use: ['file-loader?name=fonts/[name].[ext]']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /fonts/,
        use: ['file-loader?name=images/[name].[ext]']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'main-page.html',
      template: 'src/pages/main.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'new-event.html',
      template: 'src/pages/new-event.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'add-friends.html',
      template: 'src/pages/add-friends.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'seat.html',
      template: 'src/pages/seat.pug',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
