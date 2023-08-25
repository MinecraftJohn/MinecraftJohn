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
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-6deg)" },
          "40%": { transform: "rotate(-4deg)" },
        },
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        floatDelay: "float 10s ease-in-out 4s infinite",
        wave: "wave 2.1s 0.6s infinite",
      },
    },
  },
  plugins: [],
};
