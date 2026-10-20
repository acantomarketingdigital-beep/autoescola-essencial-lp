import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B3474", deep: "#082859" },
        brand: { DEFAULT: "#0868B0", light: "#4FB3F0" },
        sun: { DEFAULT: "#FFD34E", dark: "#F2C230" },
        mist: "#D6E2EA",
        paper: "#F5F7F9",
        ink: "#5B6573",
        whats: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1180px" },
      // Todas as animações usam apenas transform/opacity (compostas na GPU).
      keyframes: {
        "led-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.92)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        "led-bloom": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        shine: {
          "0%": { transform: "translate3d(-120%, 0, 0) skewX(-20deg)" },
          "40%, 100%": { transform: "translate3d(420%, 0, 0) skewX(-20deg)" },
        },
        glint: {
          "0%, 100%": { opacity: "0.15", transform: "scale(0.85)" },
          "50%": { opacity: "0.95", transform: "scale(1.1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 20px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "led-pulse": "led-pulse 2.4s ease-in-out infinite",
        "led-bloom": "led-bloom 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shine: "shine 7s ease-in-out 1.2s infinite",
        glint: "glint 3s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
