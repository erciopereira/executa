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
      },
    },
  },
  plugins: [],
};
export default config;
