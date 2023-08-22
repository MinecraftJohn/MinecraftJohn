/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { top: "10%" },
          "50%": { top: "50%" },
        },
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        floatDelay: "float 10s ease-in-out 4s infinite",
      },
    },
  },
  plugins: [],
};
