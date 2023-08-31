/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'men-clothes': "url('https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=740&t=st=1693510823~exp=1693511423~hmac=f8f02f6221d4c18ad34631efbfa81963eb59c80d62a78d51ef7dc01221889660')",
        'women-clothes': "url('https://img.freepik.com/free-photo/happy-smiling-short-haired-girl-posing-yellow-wall-warm-colors-positive-mood_273443-1599.jpg?w=740&t=st=1693510869~exp=1693511469~hmac=00b51c1bc9dcabd9b9b74c9558c4d945274ca39ac3c7c83b24d14e3788b54315')",
        'jewelery': "url('https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599059.jpg?w=360&t=st=1693510945~exp=1693511545~hmac=87c78cf0bb657fff3ef4fcd13c363335988972e8677d0a4c18b3e912c97629f1')",
      },
      height: {
        '300': '300px',
        '30rem': '30rem',
      }
    },
  },
  plugins: [],
};
