/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        primary: "#e0e0e0",
        neon: "#39ff14",
        orange: "#ff6600",
        purple: "#6b46c1",
      },
      fontFamily: {
        mono: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};