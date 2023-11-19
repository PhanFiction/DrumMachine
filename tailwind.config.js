/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        turqoise: '#CFDBD5',
        lightTurqoise: '#E8EDDF',
        yellow: '#F5CB5C',
        dark: '#242423',
        gray: '#D9D9D9',
      }
    },
  },
  plugins: [],
}

