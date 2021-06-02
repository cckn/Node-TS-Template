const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: { main: './src/index.ts' },
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new NodemonPlugin()],
}
