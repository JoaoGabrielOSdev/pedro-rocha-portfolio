/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        paper: '#f4f1ea',
        line: '#26333a',
        sky: '#a9dcf6',
      },
      fontFamily: {
        display: ['"Arial Narrow"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.28em',
      },
    },
  },
  plugins: [],
};
