import type { SVGProps } from "react";

/*
 * Static ink splats. Every shape is a single hand-authored path filled with
 * currentColor so the colour comes from a token utility (text-ink-pink,
 * text-ink-green) on the element. width/height attributes are explicit so
 * the browser reserves space before paint and nothing shifts.
 */

type SplatProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill"> & {
  size?: number;
};

const base = {
  viewBox: "0 0 200 200",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
} as const;

/** Big lobed puddle with two stray drops. */
export function SplatPuddle({ size = 200, ...props }: SplatProps) {
  return (
    <svg {...base} width={size} height={size} {...props}>
      <path d="M100 12c22-6 46 4 58 22 10 15 28 18 30 38 2 18-14 30-16 48-2 20 12 40-4 54-14 12-34 2-52 6-20 4-38 20-58 12-18-8-16-32-30-46C12 130-2 112 6 92c8-18 30-20 44-34C64 44 78 18 100 12Z" />
      <circle cx="176" cy="30" r="9" />
      <circle cx="22" cy="176" r="6" />
    </svg>
  );
}

/** Puddle with ink running downward. */
export function SplatDrip({ size = 200, ...props }: SplatProps) {
  return (
    <svg {...base} width={size} height={size} {...props}>
      <path d="M40 60c0-22 26-40 60-40s60 18 60 40c0 14-10 22-10 40 0 12 6 26-2 34-8 6-14-4-16-16-2-14 2-30-6-32-8-2-8 14-8 26 0 16-2 40-12 40s-10-26-10-42c0-10 2-22-6-22s-6 14-8 26c-2 10-8 14-14 8-8-8 0-26-4-40-6-6-14-10-14-22Z" />
      <circle cx="152" cy="178" r="7" />
    </svg>
  );
}

/** Sharp burst, the moment of impact. */
export function SplatBurst({ size = 200, ...props }: SplatProps) {
  return (
    <svg {...base} width={size} height={size} {...props}>
      <path d="M100 30l14 30 32-10-16 30 30 16-34 6 8 34-28-20-18 30-4-36-34 8 22-26-28-22 36 2-4-36 24 28Z" />
      <circle cx="160" cy="46" r="6" />
      <circle cx="42" cy="160" r="8" />
    </svg>
  );
}
