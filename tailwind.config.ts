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
        "gray-menu": "#e9e9e9",
        "button-color": "#68820C",
        "button-color-hover": "#7fa106",
        "button-text-color": "#FFFFFF",
        "typing-text": "#4E319E",
        "gray-dark": "#2D2D2D",
        "gray-medium": "#353535",
        "gray-ligth": "#c5c5c5",
        "green-light": "#C3FF83",
        black: "#131313",
        "button-link-hover": "#C2C2C2",
      },
      fontSize: {
        base: "clamp(1rem, 9vw, 3.5rem)",
        "start-text": "clamp(1rem, 7vw, 3.5rem)",
        "clamp-text-slider": "clamp(1rem, 7vw, 3.75rem)",
        "clamp-text-position": "clamp(1rem, 6vw, 2.25rem)",
        "clamp-executa-co": "clamp(1rem, 16vw, 16vw)",
        "clamp-title-large": "clamp(1rem, 8vw, 6rem)",
        "clamp-text-body": "clamp(1rem, 6vw, 1.875rem)",
        "clamp-text-button": "clamp(1rem, 5vw, 1.875rem)",
        "clamp-text-collapsed": "clamp(1rem, 5vw, 1.875rem)",
        "clamp-message-error": "clamp(0.75rem, 3vw, 1rem)",
        responsive: "7vw",
      },
      margin: {
        "top-20": "20rem",
        "top-25": "25rem",
        "top-30": "30rem",
        "top-44": "44rem",
      },
      screens: {
        "1090": "1090px",
        "940": "940px",
        "900": "900px",
        "880": "880px",
        "790": "790px",
        "700": "700px",
        "660": "660px",
        "616": "616px",
        "580": "580px",
        "570": "570px",
        "520": "520px",
        "540": "540px",
        "424": "424px",
        "374": "374px",
      },
      height: {
        "page-link": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
export default config;
