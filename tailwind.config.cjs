/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'ui-sans-serif', 'system-ui'],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: {
          DEFAULT: '#181A20',
          gradient: 'linear-gradient(135deg,#181A20 0%,#23263a 100%)',
        },
        accent: {
          purple: '#7C3AED',
          gold: '#FFD700',
          teal: '#2DD4BF',
        },
        surface: 'rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 16px 0 rgba(6,182,212,0.5)",
        glass: "0 4px 32px 0 rgba(6,182,212,0.10)",
      },
      backgroundImage: {
        "codex-gradient": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      transitionProperty: {
        glow: "box-shadow, transform",
        'fade': 'opacity',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
};
