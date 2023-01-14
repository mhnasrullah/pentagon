/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      black : '#000000',
      transparent : '#00000000',
      white : "#ffffff",
      halfWhite : "#FFFFFF80",
      white80 : "#ffffffcc",
      blue : "#2C50F4"
    }
  },
  plugins: [],
}
