const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add .jsx extension to the list of resolvable extensions
      webpackConfig.resolve.extensions = ['.js', '.jsx', '.json'];
      
      // Update module resolution
      webpackConfig.resolve.modules = [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ];

      // Add fallbacks for Node.js core modules
      webpackConfig.resolve.fallback = {
        "path": require.resolve("path-browserify"),
        "fs": false,
        "url": false,
        "util": false,
        "stream": false,
        "crypto": false
      };
      
      // Update the module rules to handle .jsx files
      const babelLoader = webpackConfig.module.rules.find(
        (rule) => rule.loader && rule.loader.includes('babel-loader')
      );
      
      if (babelLoader) {
        babelLoader.options = {
          ...babelLoader.options,
          plugins: [
            ...(babelLoader.options.plugins || []),
            '@babel/plugin-syntax-dynamic-import'
          ]
        };
      }
      
      return webpackConfig;
    },
  },
}; 