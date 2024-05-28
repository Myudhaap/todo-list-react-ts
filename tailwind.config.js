/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8ecae6",
        secondary: "#219ebc",
        accent: "#023047"
      },
      fontFamily: {
        latto: "Lato, sans-serif"
      }
    },
  },
  plugins: [],
}

