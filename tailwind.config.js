/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
        shadowSecond : "10px 10px 19px rgba(0, 0, 0, 0.25), -10px -10px 19px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

