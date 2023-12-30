/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ebf0f2",
        primary: "#225926",
        secondary1: "#1e4020",
        secondary2: "#042940",
        tertiary1: "#64a646",
        tertiary2: "#90bf6f",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
        quando: ["Quando", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
