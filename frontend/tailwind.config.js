/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        Poppins: ["Poppins", "sans-serif"],
        Libre_Baskerville: ["Libre Baskerville", "serif"],
        Inter: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
