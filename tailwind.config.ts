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
    colors: {
      "gray-back": "#E7E7E8",
      "button-color": "#68820C",
      "button-color-hover": "#7fa106",
      "button-text-color": "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
