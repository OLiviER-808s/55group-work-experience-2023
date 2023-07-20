/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'yellow-medium' : '#F2BD4A',
        'green-low' : '#4AB866',
        'red-high' : '#DB6154',
        'primary': '#1f2e42',
        'secondary': '#2F2F2F',
        'tertiary': '#3F3F3F',
      }
    },
  },
  plugins: [],
}

