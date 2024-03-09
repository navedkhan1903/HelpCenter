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
        primaryDark: "#ffc94d",
        gray: "#767676",
        lightGray: "#e6e6e6",
        darkGray: "#1a1a1a",
      },
      boxShadow: {
        sm: "0px 8px 24px rgba(149, 157, 165, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
