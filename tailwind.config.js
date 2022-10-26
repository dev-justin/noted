/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      "bg-light-lime": "#abd699",
      "bg-fresh-lemon": "#ffe26a",
      "bg-teal": "#75c9b7",
      "bg-mint": "#c7ddcc",
      "bg-navy": "#16123f",
      "bg-white": "#ffffff",
      "bg-black": "#18181b",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
