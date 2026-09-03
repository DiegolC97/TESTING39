# decision

A technical decision that was made and WHY (which alternatives were discarded).

## Placeholder product copy for Inkwave settled on a tagline 'Splat your ideas onto a shared…

What: Placeholder product copy for Inkwave settled on a tagline 'Splat your ideas onto a shared canvas' and description 'a real-time shared canvas for teams that think fast', used in the hero headline/subheadline and in metadata · Why: needed concrete marketing copy to fill the headline/descriptor/OG-description requirements since none was given · Where: src/lib/site.ts <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-17 -->

## Deployed via static export (`output: 'export'`) to GitHub Pages with a GitHub Actions wor…

What: Deployed via static export (`output: 'export'`) to GitHub Pages with a GitHub Actions workflow, rather than Vercel · Why: no Vercel/Netlify CLI or token existed on the machine, but the GitHub CLI was authenticated and the repo public, so Pages required no new credentials · Where: next.config.ts, .github/workflows deploy workflow · Learned: static export means no server routes exist, so the separate waitlist-capture work order will need a third-party form endpoint, or the project will need to drop `output`/`basePath` and move to Vercel. <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-4 -->

## Stack pinned to Next.js 16.3 App Router + TypeScript, React 19.2, Tailwind CSS 4.3, pnpm

What: Stack pinned to Next.js 16.3 App Router + TypeScript, React 19.2, Tailwind CSS 4.3, pnpm · Why: chosen as "current latest" for a greenfield build · Where: package.json / repo root <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-0 -->

## Entrance/hover motion (fade-and-rise on content, slight scale on button hover) is wrapped…

What: Entrance/hover motion (fade-and-rise on content, slight scale on button hover) is wrapped in `@media (prefers-reduced-motion: no-preference)` so nothing plays when the OS reduced-motion setting is on · Why: — · Where: hero animation CSS <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-13 -->

## The Splatoon palette treatment is dark-only, with pink as the dominant colour and green u…

What: The Splatoon palette treatment is dark-only, with pink as the dominant colour and green used only as an accent, not a 50/50 split · Why: recommendation carried over from the earlier scaffolding conversation, applied consistently in the hero · Where: src/app/globals.css, hero components <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-2 -->

## Deployed to GitHub Pages (static export + GitHub Actions workflow) at https://diegolc97.g…

What: Deployed to GitHub Pages (static export + GitHub Actions workflow) at https://diegolc97.github.io/TESTING39/ instead of Vercel/Netlify · Why: no Vercel/Netlify CLI or token existed on the machine, while GitHub CLI was already authenticated and the repo public · Where: next.config.ts (output: 'export', basePath), .github/workflows <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-3 -->

## Placeholder product name chosen is "Inkwave" since none was specified by the user

What: Placeholder product name chosen is "Inkwave" since none was specified by the user · Why: needed a concrete name to write copy/metadata against; can be swapped later by editing src/lib/site.ts <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-9 -->
