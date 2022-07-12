/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  mode: 'jit',
  purge: ["../*.html"],
  content: ["../*.html","../**/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}
