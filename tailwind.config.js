/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ff5151",
      white: "#ffffff",
      black: "#000000",
      gray: { dark: "#415161", light: "#b4b4b4" },
    },
    extend: {},
  },
  plugins: [],
};
