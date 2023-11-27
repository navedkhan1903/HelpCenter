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
        primary: "#FFD369",
        primaryLight: "#fff7e6",
        lightGray: "#e6e6e6",
        primaryDark: "#ffc94d",
        gray: "#767676",
        darkGray: "#1a1a1a",
      },
      boxShadow: {
        sm: "0px 8px 24px rgba(149, 157, 165, 0.1)",
      },
      keyframes: {
        primaryBtnClick: {
          "0%, 100%": { backgroundColor: "#ffc94d" },
          "50%": { backgroundColor: "#FFD369" },
        },
        socialBtnClick: {
          "0%, 100%": { backgroundColor: "#f5f5f5" },
          "50%": { backgroundColor: "white" },
        },
      },
      animation: {
        primaryBtnAnimation: "primaryBtnClick 200ms",
        socialBtnAnimation: "socialBtnClick 200ms",
      },
    },
  },
  plugins: [],
};
export default config;
