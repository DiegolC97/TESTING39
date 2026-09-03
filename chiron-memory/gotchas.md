# gotcha

A non-obvious pitfall or trap, learned the hard way.

## `metadataBase` must be the origin only when `basePath` is set

- **What**: With `basePath: "/TESTING39"`, setting `metadataBase` to `https://host/TESTING39` produces `og:image` URLs of `https://host/TESTING39/TESTING39/opengraph-image.png` (404 on Pages).
- **Why**: Next prepends `basePath` to file-convention assets (`opengraph-image.png`, `icon.svg`) before resolving them against `metadataBase`, so the base path is applied twice. Canonical and `og:url`, by contrast, are *not* prefixed and need the base path spelled out.
- **Where**: `src/app/layout.tsx` (`metadataBase: new URL(site.origin)`, `canonical: \`${site.basePath}/\``), `src/lib/site.ts` (`origin` vs `url`).
- **Learned**: 2026-09-03, landing hero work order, caught by grepping `out/index.html` after `pnpm build`.

## Static export needs a real `opengraph-image.png`, not `opengraph-image.tsx`

- **What**: A `.tsx` share-card generator under `output: "export"` emits a file named `opengraph-image` with no extension, which GitHub Pages serves without an image content type. The generator is kept in `scripts/generate-og-image.tsx`; its PNG output is committed as `src/app/opengraph-image.png` with `opengraph-image.alt.txt` beside it.
- **Why**: Social scrapers rely on the extension/content type. Regenerate by temporarily moving the script back into `src/app/`, running `pnpm build`, and copying `out/opengraph-image` over the PNG.
- **Where**: `src/app/opengraph-image.png`, `scripts/generate-og-image.tsx`.
- **Learned**: 2026-09-03, landing hero work order.
