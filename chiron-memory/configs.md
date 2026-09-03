# config

Setup and configuration — env vars, flags, how to run the project.

## Deployed as a static export to GitHub Pages under `/TESTING39`

- **What**: `next.config.ts` sets `output: "export"`, `basePath: "/TESTING39"` and `images.unoptimized`. A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on push to `main` and publishes `out/` to Pages. Public URL: https://diegolc97.github.io/TESTING39/
- **Why**: No Vercel/Netlify credentials exist on the build machine; GitHub Pages needs only the already-authenticated `gh` and a public repo. The trade-off is no server runtime, so the waitlist capture must call an external endpoint (or the site moves to Vercel later, in which case drop `output`/`basePath`).
- **Where**: `next.config.ts`, `.github/workflows/deploy.yml`, `metadataBase` in `src/lib/site.ts` (must stay the absolute Pages URL so Open Graph image links resolve).
- **Learned**: 2026-09-03, landing hero work order.
