import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2B2E34", // grey
          primary: "#FF6B4A", // orange 1
          hover: "#DD553E", // orange 2
          background: "#fffaf4", //orange white
        },
      },
    },
  },
  plugins: [],
};

export default config;
