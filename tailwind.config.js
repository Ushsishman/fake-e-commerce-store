/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'men-clothes': "url('./src/assets/men-clothes.jpg')",
        'women-clothes': "url('./src/assets/women-clothes.jpg')",
        'jewelery': "url('./src/assets/jewellery.jpg')",
      },
      height: {
        '300': '300px',
        '30rem': '30rem',
      }
    },
  },
  plugins: [],
};
