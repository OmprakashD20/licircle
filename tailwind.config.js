/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
      },keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins:  [require("tailwindcss-animate")],
};
