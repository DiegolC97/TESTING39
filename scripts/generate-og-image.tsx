import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/*
 * Static 1200x630 share card rendered at build time. Colours mirror the ink
 * tokens in globals.css (satori cannot read CSS custom properties, so the
 * resolved values are repeated here on purpose).
 */
export const dynamic = "force-static";
export const alt = `${site.name} — ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = {
  ground: "#1a1520",
  pink: "#ff2d9b",
  pinkDeep: "#b3146b",
  green: "#b8ff1a",
  cream: "#faf8f3",
  creamMuted: "#cfcac1",
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 88px",
          background: ink.ground,
          color: ink.cream,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <svg
          width="560"
          height="560"
          viewBox="0 0 200 200"
          fill={ink.pink}
          style={{ position: "absolute", top: -150, right: -140 }}
        >
          <path d="M40 60c0-22 26-40 60-40s60 18 60 40c0 14-10 22-10 40 0 12 6 26-2 34-8 6-14-4-16-16-2-14 2-30-6-32-8-2-8 14-8 26 0 16-2 40-12 40s-10-26-10-42c0-10 2-22-6-22s-6 14-8 26c-2 10-8 14-14 8-8-8 0-26-4-40-6-6-14-10-14-22Z" />
        </svg>
        <svg
          width="520"
          height="520"
          viewBox="0 0 200 200"
          fill={ink.pinkDeep}
          style={{ position: "absolute", bottom: -260, left: -200 }}
        >
          <path d="M100 12c22-6 46 4 58 22 10 15 28 18 30 38 2 18-14 30-16 48-2 20 12 40-4 54-14 12-34 2-52 6-20 4-38 20-58 12-18-8-16-32-30-46C12 130-2 112 6 92c8-18 30-20 44-34C64 44 78 18 100 12Z" />
        </svg>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill={ink.green}
          style={{ position: "absolute", bottom: 40, right: 120 }}
        >
          <path d="M100 30l14 30 32-10-16 30 30 16-34 6 8 34-28-20-18 30-4-36-34 8 22-26-28-22 36 2-4-36 24 28Z" />
        </svg>

        <div style={{ display: "flex", fontSize: 132, fontWeight: 900, color: ink.pink, lineHeight: 1 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 54, fontWeight: 700, marginTop: 16, lineHeight: 1.1, maxWidth: 820 }}>
          {site.descriptor}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: ink.creamMuted, marginTop: 36 }}>
          Join the waitlist · {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
