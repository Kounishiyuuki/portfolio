import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--color-muted-foreground) / <alpha-value>)",
        line: "hsl(var(--color-line) / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        "surface-strong": "hsl(var(--color-surface-strong) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--color-accent-foreground) / <alpha-value>)"
      },
      borderRadius: {
        shell: "var(--radius-shell)",
        card: "var(--radius-card)",
        pill: "999px"
      },
      boxShadow: {
        shell: "var(--shadow-shell)",
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)"
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem"
      },
      maxWidth: {
        container: "72rem",
        prose: "44rem"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      backdropBlur: {
        chrome: "20px"
      }
    }
  },
  plugins: [],
};

export default config;
