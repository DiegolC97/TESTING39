# TESTING39 — Inkwave landing page

Single-page landing with a Splatoon-inspired ink hero and a waitlist call to action.

- **Stack**: Next.js 16 (App Router, TypeScript), React 19, Tailwind CSS v4 with CSS-first design tokens.
- **Tokens**: everything visual lives in `src/app/globals.css` under `@theme`. Components never use raw colour values.
- **Copy and name**: `src/lib/site.ts`.
- **Deploy**: static export to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`). Live at https://diegolc97.github.io/TESTING39/

```bash
pnpm install
pnpm dev      # http://localhost:3000/TESTING39/
pnpm build    # static export to ./out
```

Project knowledge (decisions, conventions, gotchas) is kept in `chiron-memory/`.
