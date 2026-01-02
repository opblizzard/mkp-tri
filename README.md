# MKP-TRI — Living Codex

This repo is the sovereign, inspectable codex and dashboard for MKP-TRI.

## Features

- **Astro + Tailwind** frontend with Flowbite and Alpine.js for interactive UI
- **Glassmorphic dashboard**: stacked, rounded, transparent panels with unique blue-to-purple gradients per page
- **Mobile-first**: fully responsive, with movable (hide-on-scroll) header and touch-friendly spacing
- **Interactive panels**: Flowbite modals, Alpine.js stats, and dashboard widgets
- **Edge**: Cloudflare Workers (router, omni, codex)
- **Data**: Static artifacts with ceremonial checkpoints
- **CI/CD**: GitHub Actions → Cloudflare Pages

## Commands

- `npm install`
- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview built site
- `npm run generate:artifacts` — regenerate codex artifacts
- `npm run sync:transparency` — update transparency data
- `npm run deploy` — scripted deploy hook
