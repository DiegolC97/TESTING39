# decision

A choice made and the reasoning behind it — the path taken over the alternatives.

## Ink palette is dark-only, pink dominant, green reserved for the CTA

- **What**: The site uses a near-black violet-tinted ground with Splatoon hot pink as the dominant ink and lime green only as the accent on the primary call to action. There is no light theme.
- **Why**: A 50/50 pink/green split reads as noise and neither colour owns the page. Pink carries the brand as artwork; green is scarce so the single thing it touches (the waitlist button) becomes the focal point. A dark ground is the only one on which both inks stay saturated and keep text contrast above AA.
- **Where**: `src/app/globals.css` (`@theme` block) is the sole source of colour, font, motion and shape values. Components use Tailwind utilities derived from those tokens (`bg-ink-pink`, `text-cream`, `font-display`, `animate-rise`) and never raw hex/oklch values.
- **Learned**: 2026-09-03, while building the landing hero (work order "Build the landing page with the Splatoon-inspired hero section").

## Design tokens are CSS-first via Tailwind v4 `@theme`, no tailwind.config

- **What**: Tokens live in CSS (`@theme { --color-ink-pink: … }`) and Tailwind v4 generates utilities from them. `--color-*: initial` wipes Tailwind's default palette so only ink tokens exist.
- **Why**: Tailwind v4 dropped the JS config as the primary path; CSS-first keeps tokens usable by plain CSS (SVG fills, `currentColor`, keyframes) and by utilities from a single definition. Removing the default palette makes an off-token colour a build-visible mistake rather than a silent drift.
- **Where**: `src/app/globals.css`. Fluid type steps (`--text-hero`, `--text-lede`) and the entrance animation (`--animate-rise`) are defined there too.
- **Learned**: 2026-09-03, landing hero work order.

## Splatter artwork is hand-authored inline SVG filled with `currentColor`

- **What**: Ink splats are small React SVG components (`src/components/ink/Splat.tsx`) with `fill="currentColor"`, coloured by a `text-ink-*` utility on the element, explicit `width`/`height` attributes and `aria-hidden`.
- **Why**: Inline SVG is a few hundred bytes, needs no network request, causes no layout shift because dimensions are known before paint, and inherits the token colour instead of duplicating it inside the file. Bitmap or externally-loaded splats would fail the fast-load and CLS requirements.
- **Where**: `src/components/ink/Splat.tsx`, composed in `src/components/InkBackdrop.tsx`.
- **Learned**: 2026-09-03, landing hero work order.
