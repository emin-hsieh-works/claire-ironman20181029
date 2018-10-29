const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpackConfig = {
  entry: path.resolve('src/Main.ts'),
  output: {
    filename: 'app.js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', 'd.ts']
  },
  externals: {
    'jQuery': true,
    'pixi.js': true,
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      inject: false
    }),
    new CopyWebpackPlugin(
      [
        { from: 'src/assets', to: 'assets', tyType: 'dir' }
      ]
    )
  ]
};

module.exports = webpackConfig;
