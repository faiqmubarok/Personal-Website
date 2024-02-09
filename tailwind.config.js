/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{index.html, script.js}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accentColor: '#FF5500',
        darkModeBody: '#212428',
        lightText: '#C4CFDE',
        bodyColor: '#DFDFDF',
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      boxShadow: {
        shadowFirst : "10px 10px 19px #1C1E22, -10px -10px 19px #262A2E",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

