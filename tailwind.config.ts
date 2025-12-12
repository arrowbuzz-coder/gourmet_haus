import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        charcoal: "var(--charcoal)",
        cream: "var(--cream)",
        cognac: "var(--cognac)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        cursive: ["var(--font-cursive)"],
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "fade-in-scale": {
          from: { opacity: "0", transform: "scale(0.85)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "float-leaf": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-30px) rotate(5deg)" },
          "50%": { transform: "translateY(-60px) rotate(-5deg)" },
          "75%": { transform: "translateY(-30px) rotate(3deg)" },
        },
        "scroll-down": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
        "leaf-float-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(15px, -20px) rotate(5deg)" },
          "50%": { transform: "translate(-10px, 10px) rotate(-3deg)" },
          "75%": { transform: "translate(20px, 5px) rotate(4deg)" },
        },
        "leaf-float-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "30%": { transform: "translate(-20px, 15px) rotate(-4deg)" },
          "60%": { transform: "translate(10px, -10px) rotate(6deg)" },
          "80%": { transform: "translate(-15px, 20px) rotate(-2deg)" },
        },
        "leaf-float-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "20%": { transform: "translate(10px, 15px) rotate(3deg)" },
          "50%": { transform: "translate(-15px, -10px) rotate(-5deg)" },
          "70%": { transform: "translate(18px, -5px) rotate(4deg)" },
        },
        "leaf-float-4": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "35%": { transform: "translate(-12px, 18px) rotate(-6deg)" },
          "65%": { transform: "translate(15px, -12px) rotate(5deg)" },
          "85%": { transform: "translate(-8px, 10px) rotate(-3deg)" },
        },
        "leaf-float-5": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(12px, -15px) rotate(4deg)" },
          "55%": { transform: "translate(-18px, 12px) rotate(-5deg)" },
          "75%": { transform: "translate(8px, 8px) rotate(3deg)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-left": "fade-in-left 0.8s ease-out forwards",
        "fade-in-right": "fade-in-right 0.8s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slow-zoom": "slow-zoom 12s ease-in-out infinite",
        "fade-in-scale": "fade-in-scale 0.6s ease-out forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        "scroll-down": "scroll-down 2s ease-in-out infinite",
        "leaf-float-1": "leaf-float-1 15s ease-in-out infinite",
        "leaf-float-2": "leaf-float-2 18s ease-in-out infinite",
        "leaf-float-3": "leaf-float-3 20s ease-in-out infinite",
        "leaf-float-4": "leaf-float-4 16s ease-in-out infinite",
        "leaf-float-5": "leaf-float-5 22s ease-in-out infinite",
        "float-1": "float-1 2s ease-in-out infinite",
        "float-2": "float-2 2.5s ease-in-out infinite 0.2s",
        "float-3": "float-3 2.2s ease-in-out infinite 0.4s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
