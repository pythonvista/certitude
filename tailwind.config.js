/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      emerald: "#8AAB0E",
      fern: "#81A303",
      basil: "#BCD55E",
      maverick: "#05334F",
      aegean: "#016EB1",
      eerie: "#121212",
      white: "#ffffff",
      black: "#000000",
      "eerie-50": "#12121280",
      "aegean-60": "#016eb299",
      "aegean-80": "#016EB1cc",
      "eerie-80": "#121212cc",
      "white-90": "#ffffffe6",
    },
    extend: {
      fontFamily: {
        lemon: ["var(--lemon-font)", ...fontFamily.sans],
        poppins: ["var(--poppins-font)", ...fontFamily.sans],
        segoe: ["var(--segoe-font)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-bg": "url('/hero-section-bg.png')",
      },
    },
  },
  plugins: [],
};
