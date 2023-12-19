/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fefefe",
        primary: "#9fc131",
        secondary1: "#dbf227",
        secondary2: "#042940",
        tertiary1: "#f5ffd3",
        tertiary2: "#d6d5",
      },
    },
  },
  plugins: [],
};
