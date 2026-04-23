import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        "cream-card": "#FFFFFF",
        ink: "#2A2520",
        muted: "#5A5249",
        clay: "#E07856",
        "clay-hover": "#C9623F",
        teal: "#2D5F5D",
        "teal-hover": "#234B49",
        sage: "#5A8A5B",
        amber: "#F4D47C",
        border: "#E8DFD3",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(42, 37, 32, 0.04), 0 8px 24px rgba(42, 37, 32, 0.06)",
        "soft-lg": "0 4px 12px rgba(42, 37, 32, 0.06), 0 20px 40px rgba(42, 37, 32, 0.08)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
