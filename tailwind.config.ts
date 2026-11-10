import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1C1F26",
          card: "#2A2E38",
          border: "#3A3F4B",
          muted: "#6B7280",
        },
        offwhite: "#F5F7FA",
        blue: {
          electric: "#1E5BFF",
          hover: "#5B8CFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "electric-glow": "0 0 25px -4px rgba(30, 91, 255, 0.45)",
        "electric-subtle": "0 0 12px 0 rgba(30, 91, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
