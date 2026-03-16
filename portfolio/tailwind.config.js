/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Outfit'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#08080f",
        surface: "#0e0e1a",
        surface2: "#13131f",
        border: "#1c1c2e",
        border2: "#2a2a45",
        primary: "#6035F2",
        primary2: "#8B5CF6",
        glow: "#4f28e0",
        cyan: "#06b6d4",
        rose: "#f43f5e",
        amber: "#f59e0b",
        muted: "#5a5a7a",
        subtle: "#3a3a55",
        text: "#e2e4f0",
        textDim: "#9898b8",
      },
      boxShadow: {
        "glow-sm": "0 0 16px rgba(96,53,242,0.3)",
        "glow-md": "0 0 32px rgba(96,53,242,0.35)",
        "glow-lg": "0 0 60px rgba(96,53,242,0.25)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        flicker: "flicker 5s step-end infinite",
        "spin-slow": "spin 25s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        flicker: {
          "0%,100%": { opacity: 1 },
          "94%": { opacity: 1 },
          "95%": { opacity: 0.5 },
          "96%": { opacity: 1 },
          "98%": { opacity: 0.7 },
          "99%": { opacity: 1 },
        },
      },
    },
  },
};
