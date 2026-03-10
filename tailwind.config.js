/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vertex: {
          bg: "rgb(var(--vertex-bg) / <alpha-value>)",
          bgSoft: "rgb(var(--vertex-bg-soft) / <alpha-value>)",
          panel: "rgb(var(--vertex-panel) / <alpha-value>)",
          text: "rgb(var(--vertex-text) / <alpha-value>)",
          muted: "rgb(var(--vertex-muted) / <alpha-value>)",
          gold: "rgb(var(--vertex-gold) / <alpha-value>)",
          goldDeep: "rgb(var(--vertex-gold-deep) / <alpha-value>)",
          orange: "rgb(var(--vertex-orange) / <alpha-value>)",
          line: "rgb(var(--vertex-line) / <alpha-value>)",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        tech: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        glowGold:
          "0 0 0 1px rgba(200, 164, 106, 0.35), 0 12px 35px rgba(200, 164, 106, 0.18)",
        glowOrange:
          "0 0 0 1px rgba(255, 106, 61, 0.45), 0 16px 40px rgba(255, 106, 61, 0.18)",
        panel: "0 20px 55px rgba(0, 0, 0, 0.35)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
