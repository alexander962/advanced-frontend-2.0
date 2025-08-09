const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // стартовая точка нашего приложения
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  // настройки куда и как мы будем делать сборку нашего приложения
  output: {
    // главный файл сборки нашего приложения
    filename: '[name].[contenthash].js',
    //путь, куда сборка должна происходить
    path: path.resolve(__dirname, 'build'),
    // подчищает ненужные файлы
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // используем наш index.html файл как шаблон
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}