const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils')
    },
    configure: {
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
      }
    }
  },
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  }
}; 