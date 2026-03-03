import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        senzu: "#00843D",
        senzuGlow: "#4ade80",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
      animation: {
        aurora: "aurora 15s infinite alternate",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "100%": { transform: "translate(50px, 50px) rotate(10deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
