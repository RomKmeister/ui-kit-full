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
        test: /\.(png|svg|jpe?g|gif|ico|xml|webmanifest)$/,
        include: /favicon/,
        use: ['file-loader?name=favicon/[name].[ext]']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: [/fonts/, /favicon/],
        use: ['file-loader?name=images/[name].[ext]']
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 70
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          }
        }
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
      template: 'src/pages/main-page/main-page.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'performance.html',
      template: 'src/pages/performance/performance.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'choosing-seat.html',
      template: 'src/pages/choosing-seat/choosing-seat.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'customer-info.html',
      template: 'src/pages/customer-info/customer-info.pug',
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
