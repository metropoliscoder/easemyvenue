/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        gold: "#C9A96E",
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};

export default config;