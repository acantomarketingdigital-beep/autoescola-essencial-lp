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
    },
  },
  plugins: [],
};
export default config;
