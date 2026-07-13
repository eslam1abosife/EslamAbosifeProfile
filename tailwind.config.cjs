/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#aa3bff',
        dark: '#16171d',
        light: '#f3f4f6',
      },
    },
  },
  plugins: [],
}