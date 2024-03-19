/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // rajdhani: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}