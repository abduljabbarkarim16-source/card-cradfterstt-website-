import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f7",
          100: "#e9e9e9",
          200: "#c9c9c9",
          300: "#8a8a8a",
          400: "#4a4a4a",
          500: "#2a2a2a",
          600: "#1a1a1a",
          700: "#111111",
          800: "#0a0a0a",
          900: "#070707",
        },
        accent: {
          DEFAULT: "#eab308",
          soft: "#facc15",
          deep: "#a16207",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(234, 179, 8, 0.35)",
        panel: "0 1px 0 rgba(255,255,255,0.04) inset, 0 10px 40px -20px rgba(0,0,0,0.8)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        badgePulse: {
          "0%,100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(234,179,8,0.6)" },
          "50%": { transform: "scale(1.08)", boxShadow: "0 0 0 8px rgba(234,179,8,0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sheen: "sheen 2.8s ease-in-out infinite",
        badgePulse: "badgePulse 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
