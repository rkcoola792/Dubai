/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // rajdhani: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        mainBlue: "#0E4464",
        textColor: "#170F49",
        secondaryBlue: "#A5DBFF",
        subtleBlue: "#F8FCFF",
      },
      screens: {
        "3xl": "2000px",
        "4xl": "2500px",
        "5xl": "2800px",
      },
    },
  },
  plugins: [],
};