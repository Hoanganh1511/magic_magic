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
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
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
        "button-dimmed": "rgba(42,37,55,0.4)",
        "button-dimmed-active": "rgba(71,64,89,0.6)",

        // layer
        "layer-01": "rgba(21,17,29,1)",
        "layer-03": "rgba(30,25,41,1)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      borderRadius: {
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.25rem", // 4px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "4xl": "2rem",
        "5xl": "2.5rem",
        circle: "50%", // tròn hoàn toàn
        card: "1.25rem", // custom cho card
      },
      keyframes: {
        shimmer: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.4 },
          "100%": { opacity: 0 },
        },
        sparkle: {
          "0%,100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite ease-in-out",
        sparkle: "sparkle 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
