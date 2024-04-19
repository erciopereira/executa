/* eslint-disable prettier/prettier */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "var(--font-helixa)",
    },
    extend: {
      colors: {
        "gray-top": "#E7E7E8",
        "gray-back": "#D9D9D9",
        "button-color": "#68820C",
        "button-color-hover": "#7fa106",
        "button-text-color": "#FFFFFF",
        "typing-text": "#4E319E",
        "gray-dark": "#2D2D2D",
        "gray-medium": "#353535",
        "gray-ligth": "#c5c5c5",
        "green-light": "#C3FF83",
        black: "#131313",
      },
      fontSize: {
        base: "3.5rem",
        "clamp-executa-co": "clamp(1rem, 16vw, 16vw)",
      },
      margin: {
        "top-20": "20rem",
        "top-25": "25rem",
        "top-30": "30rem",
        "top-44": "44rem",
      },
      screens: {
        "1090": "1090px",
        "880": "880px",
      },
    },
  },
  plugins: [],
};
export default config;
