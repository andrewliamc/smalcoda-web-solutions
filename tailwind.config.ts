import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          night: "#0C1A16",
          moss: "#1F2E28",
          sage: "#9FBDAA",
          sand: "#E8E5D8",
          clay: "#C2A98A",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        subheading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(0, 0, 0, 0.35)",
        card: "0 12px 45px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
