const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "fs": false,
      "path": false,
      "url": false,
      "stream": false,
      "buffer": false,
      "process": false,
      "util": false
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /scripts\/build/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}; 