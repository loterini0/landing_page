import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cobent: {
          // Primarios
          blue:  "#0c254a",  // Azul oscuro principal
          gray:  "#a4b1c0",  // Gris claro principal
          white: "#ffffff",
          // Secundarios
          "gray-light": "#d2deec",  // Gris claro secundario 1
          "gray-dark":  "#29384b",  // Gris oscuro secundario 2
          "gray-mid":   "#536174",  // Gris oscuro secundario 3
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;