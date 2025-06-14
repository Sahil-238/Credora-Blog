const path = require('path');

module.exports = {
  entry: './src/index.js', // ✅ your confirmed entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // optional: clean old build files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // supports both .js and .jsx
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // for Tailwind and global styles
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // for images
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true, // for React Router
  },
  mode: 'production', // or 'development'
};
