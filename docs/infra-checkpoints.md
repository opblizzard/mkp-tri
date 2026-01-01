## Checkpoint: mkptri.org – 522 Resolution

**Date:** 2026-01-01  
**Scope:** Cloudflare Pages + Worker + DNS

**Actions:**

- Rebuilt Astro static site to `dist/`.
- Verified GitHub Actions → Cloudflare Pages deploy (`mkp-tri`).
- Deployed Worker `mkp-tri` with `mkptri.org/*` route and `site.bucket = ./dist`.
- Cleaned DNS to point only to active Cloudflare origin path.

**Outcome:** `mkptri.org` serves the living codex without origin timeouts.
