/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      brand: ['Great Vibes'],
    },
    animation: {
      beat: "beat 1s ease-out infinite",
    },
    keyframes: {
      beat: {
        "0%, 100%": { transform: "scale(1)" },
        "25%": { transform: "scale(1.2)" },
      },
    }

  },
  plugins: [],
  darkMode: 'class'
}