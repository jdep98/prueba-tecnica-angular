/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ['selector', '[class*="app-dark"]'],
  plugins: [require('tailwindcss-primeui')],
}
