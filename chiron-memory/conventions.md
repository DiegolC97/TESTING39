# convention

A rule the codebase follows — naming, patterns, and where things live.

## All design tokens (ink pink, ink green, near-black ground, off-white text, spacing, radiu…

What: All design tokens (ink pink, ink green, near-black ground, off-white text, spacing, radius, motion) live in a single Tailwind v4 `@theme` block; no hex values are used anywhere else in the codebase · Why: keeps the ink design system centralized and swappable · Where: src/app/globals.css <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-1 -->

## The hero uses dynamic viewport height units (dvh) rather than 100vh so the layout doesn't…

What: The hero uses dynamic viewport height units (dvh) rather than 100vh so the layout doesn't break when the mobile on-screen keyboard opens, keeping the email field and submit button visible/reachable · Why: — · Where: hero section CSS/layout <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-10 -->

## Keyboard focus ring uses an off-white/cream colour with a dark offset so it clears 3:1 co…

What: Keyboard focus ring uses an off-white/cream colour with a dark offset so it clears 3:1 contrast against both the pink ground and the green-accented card · Why: — · Where: form/button focus styles in globals.css <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-11 -->

## The favicon and the Open Graph share image are both generated programmatically at build t…

What: The favicon and the Open Graph share image are both generated programmatically at build time (SVG icon route, 1200x630 PNG route) from the same ink design tokens rather than committed as static asset files · Why: keeps the share/favicon art in sync with the token palette instead of duplicating hardcoded colours · Where: src/app/icon.svg, opengraph-image route <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-15 -->

## Splatter artwork is implemented as hand-authored static SVG React components (~400 bytes…

What: Splatter artwork is implemented as hand-authored static SVG React components (~400 bytes each) filled via `currentColor` so they inherit the theme's ink tokens, marked `aria-hidden`, positioned in reserved top/bottom bands on mobile and a right-hand zone on desktop so they never overlap text at any breakpoint · Why: — · Where: src/components/ink/Splat.tsx, InkBackdrop.tsx <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-6 -->

## Headline/hero fonts are self-hosted via `next/font` (Archivo Black for display, Space Gro…

What: Headline/hero fonts are self-hosted via `next/font` (Archivo Black for display, Space Grotesk for body) with size-adjusted fallbacks to avoid layout shift on load · Why: — · Where: src/app/layout.tsx <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-7 -->

## Product name and hero/CTA copy are centralized as constants in one file rather than scatt…

What: Product name and hero/CTA copy are centralized as constants in one file rather than scattered inline · Why: — · Where: src/lib/site.ts <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-8 -->
