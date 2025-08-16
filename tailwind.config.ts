import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f7f8",
          100: "#eaecef",
          600: "#1f2937",
          700: "#111827",
          gold: "#caa86a"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
