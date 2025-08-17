/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        "textColor-secondary": "rgba(133,127,148,1)",
        primaryBg: "#100c18",
        darkBg: "#100c18",
        "primary-border": "rgb(35, 30, 47)",
        primaryPink: "rgba(236,19,109,1)",
        sectionBg: "rgba(21,17,29,1)",
        "button-dimmed-active": "rgba(71,64,89,0.6)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [tailwindcssAnimate],
};
