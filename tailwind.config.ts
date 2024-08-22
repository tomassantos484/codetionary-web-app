import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: '#1C3A5F', // Use kebab-case for color names
        primary: '#2A4A7B',
        secondary: '#B0B6C2',
        accent: '#AAC4E4',
      },
      backgroundColor: {
        'page': '#F2F2F2',
      },
    },
  },
  plugins: [],
};

export default config;
