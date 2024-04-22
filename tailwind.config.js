/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "xxs": ".5rem",
        "xs": ".75rem",
        "xl": "1rem",
        "md": "1.2rem",
        "md-d":"1.3rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "6xl": "4rem",
        "8xl": "6rem",
        
      },
      fontFamily: {
        inter: [ "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

