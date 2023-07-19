/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1f2e42',
        'secondary': '#2F2F2F',
        'tertiary': '#3F3F3F',
      }
    },
  },
  plugins: [],
}

