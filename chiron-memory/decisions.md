# decision

A choice made and the reasoning behind it — the path taken over the alternatives.

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
