/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #FFFFFFFF 0%, #FFFEFEFF 100%)',
        'gradient-nav': 'linear-gradient(to right, #FFFFFFFF, #FFFFFFFF)',
        'gradient-card': 'linear-gradient(145deg, #FFFFFFFF, #FFFFFFFF)',
        'gradient-card-hover': 'linear-gradient(145deg, #BCBCBCFF, #BCBCBCFF)',
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
}

const devDependencies = {
  "autoprefixer": "^10.4.21",
  "postcss": "^8.5.3",
  "tailwindcss": "^3.3.0"
};
