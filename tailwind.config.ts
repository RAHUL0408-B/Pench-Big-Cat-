import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          night: "#192421",
          deep: "#0F1815",
          canopy: "#324D3C",
          leaf: "#41634E",
          mist: "#E8EFEA",
        },
        stone: {
          dawn: "#D9D8D1",
          sand: "#EFECE6",
          cream: "#F7F5F0",
          warm: "#C5C3B8",
        },
        earth: {
          bark: "#5E3A29",
          soil: "#43281C",
          terracotta: "#8D4E35",
        },
        brass: {
          DEFAULT: "#C8A97E",
          light: "#D7C8A4",
          dark: "#A38257",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        luxury: "0.25em",
        wide: "0.15em",
        tightest: "-0.04em",
      },
      animation: {
        "marquee-left": "marquee-left var(--marquee-duration, 35s) linear infinite",
        "marquee-right": "marquee-right var(--marquee-duration, 35s) linear infinite",
        "float-gentle": "float-gentle 6s ease-in-out infinite",
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
