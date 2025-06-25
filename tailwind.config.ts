// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}", // si tu as un dossier components
  "./pages/**/*.{js,ts,jsx,tsx,mdx}", // au cas où tu as des fichiers dans pages/
],


  theme: {
    extend: {
      colors: {
      rose: {
        DEFAULT: "#ED1C8F"
      }
    },
  },
  },
  plugins: []
};

export default config;
