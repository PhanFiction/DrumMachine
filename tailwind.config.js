/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: "#cfdbd5",
        black: "#000",
        white: "#fff",
        goldenrod: {
          "100": "#f5cb5c",
          "200": "#f8c644",
          "300": "rgba(245, 203, 92, 0.35)",
          "400": "rgba(245, 203, 92, 0.6)",
        },
        gray: {
          "100": "#242423",
          "200": "rgba(0, 0, 0, 0.75)",
          "300": "rgba(36, 36, 35, 0.9)",
        },
        olive: "rgba(142, 113, 36, 0.8)",
        oldlace: "#e8eddf",
      },
      fontFamily: {
        lemonada: "Lemonada",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
      },
    },
  },
  plugins: [],
}

