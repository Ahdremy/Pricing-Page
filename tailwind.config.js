/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bgMain": '#24374e',
        "bgSecondary": '#2bae76'
      },
      fontFamily: {
        Lato: ['Lato'],
      }
    },
  },
  plugins: [],
}
