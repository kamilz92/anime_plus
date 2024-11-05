/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      background: "#0d0d1a", // Deep navy for a smooth dark background
      backgroundContrast: "#1f1f3b", // A slightly lighter shade of navy for contrast
      textBlack: "#3f3f3f", // Light grey for text contrast on dark backgrounds
      white: "#ffffff", // Keep white for contrast
      black: "#000000", // Keep black for contrast
      primary: "#ff4db8", // Vivid pink often used in anime art
      secondary: "#ffd700", // Bright gold for highlights
      accent: "#6fa3ef", // Sky blue for softer accents
      danger: "#ff0033", // Red for warnings or critical elements
    },
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1.0625rem", // 17px
      lg: ["1.1875rem", "1.21"], // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": ["2.5rem", "1.1"], // 40px
      "5xl": ["4.5rem", "1.05"], // 72px
    },
    keyframes: {
      carousel: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
    },
    animation: {
      "carousel-move": "carousel var(--duration, 60s) linear infinite",
    },
    extend: {},
  },
  plugins: [],
};
