/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        mkp: {
          background: "#050510",
          surface: "#101020",
          accent: "#fbbf24",
          accentSoft: "#fde68a",
          text: "#f9fafb",
          muted: "#9ca3af"
        }
      }
    }
  },
  plugins: []
};