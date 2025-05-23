module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      tailwindConfig: './tailwind.config.js',
    }),
    require('autoprefixer'),
  ],
};
