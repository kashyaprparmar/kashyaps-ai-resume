import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        border: "oklch(1 0 0 / 0.10)",
        input: "oklch(1 0 0 / 0.14)",
        ring: "oklch(0.83 0.155 168 / 0.55)",
        background: "oklch(0.155 0.014 255 / <alpha-value>)",
        foreground: "oklch(0.965 0.004 250 / <alpha-value>)",
        surface: "oklch(0.192 0.016 255 / <alpha-value>)",
        "surface-raised": "oklch(0.232 0.018 255 / <alpha-value>)",
        signal: "oklch(0.83 0.155 168 / <alpha-value>)",
        "signal-soft": "oklch(0.83 0.155 168 / 0.12)",
        primary: {
          DEFAULT: "oklch(0.83 0.155 168 / <alpha-value>)",
          foreground: "oklch(0.17 0.02 200 / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(0.232 0.018 255 / <alpha-value>)",
          foreground: "oklch(0.965 0.004 250 / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(0.62 0.2 25 / <alpha-value>)",
          foreground: "oklch(0.98 0.004 250 / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(0.232 0.018 255 / <alpha-value>)",
          foreground: "oklch(0.705 0.018 255 / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(0.232 0.018 255 / <alpha-value>)",
          foreground: "oklch(0.83 0.155 168 / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(0.192 0.016 255 / <alpha-value>)",
          foreground: "oklch(0.965 0.004 250 / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(0.192 0.016 255 / <alpha-value>)",
          foreground: "oklch(0.965 0.004 250 / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
