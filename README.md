# MKP-TRI — Living Codex

This repo is the sovereign, inspectable codex for MKP-TRI.

- Frontend: Astro + Tailwind
- Edge: Cloudflare Workers (router, omni, codex)
- Data: Static artifacts with ceremonial checkpoints
- CI/CD: GitHub Actions → Cloudflare Pages

## Commands

- `npm install`
- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview built site
- `npm run generate:artifacts` — regenerate codex artifacts
- `npm run sync:transparency` — update transparency data
- `npm run deploy` — scripted deploy hook
