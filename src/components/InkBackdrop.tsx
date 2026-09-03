import { SplatBurst, SplatDrip, SplatPuddle } from "@/components/ink/Splat";

/*
 * The hero's artwork layer. Text never overlaps ink because the two are kept
 * in separate zones by construction:
 *
 *   - Below lg, the text column reserves a top band (5rem, 7rem from sm) and
 *     a bottom band (4rem, 6rem from sm) as padding. Every splat is sized and
 *     offset so its visible part fits inside a band and bleeds off an edge.
 *   - From lg, the text column is capped at 62% of the container and the
 *     right 38% plus the outer gutters become the ink zone. Top/bottom bands
 *     shrink to 4rem / 5rem (splats show 4rem) for two small corner splats.
 *
 * If you change the band heights in Hero.tsx, change the offsets here.
 * The layer is decorative: aria-hidden, no pointer events, behind content.
 */
export function InkBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
    >
      {/* Dominant ink: drips running down from the top-right. */}
      <SplatDrip
        size={200}
        className="absolute h-auto text-ink-pink
          w-[44vw] top-[calc(5rem-44vw)] right-[-10vw]
          sm:w-[20rem] sm:-top-52 sm:-right-16
          lg:w-[26rem] lg:-top-24 lg:-right-12
          xl:w-[32rem] 2xl:w-[38rem]"
      />

      {/* Second pink mass rising from the bottom-left band. */}
      <SplatPuddle
        size={200}
        className="absolute h-auto text-ink-pink-deep
          w-[56vw] left-[-22vw] bottom-[calc(4rem-56vw)]
          sm:w-[22rem] sm:-left-32 sm:-bottom-64
          lg:w-[24rem] lg:-left-40 lg:-bottom-[20rem]"
      />

      {/* Deep pink puddle filling the lower right of the ink zone on wide screens. */}
      <SplatPuddle
        size={200}
        className="absolute hidden h-auto text-ink-pink-deep xl:block xl:w-[24rem] xl:-right-24 xl:-bottom-24"
      />

      {/* Accent: the one green burst, kept close to the call to action. */}
      <SplatBurst
        size={200}
        className="absolute h-auto text-ink-green
          w-[26vw] right-[-8vw] bottom-[calc(4rem-26vw)]
          sm:w-[9rem] sm:-right-8 sm:-bottom-12
          lg:w-[10rem] lg:right-24 lg:bottom-24"
      />

      {/* Stray pink drops in the top-left band. */}
      <SplatBurst
        size={200}
        className="absolute h-auto text-ink-pink
          w-[24vw] left-[-8vw] top-[calc(5rem-24vw)]
          sm:w-[8rem] sm:-left-8 sm:-top-4
          lg:w-[7rem] lg:-left-6 lg:-top-12"
      />
    </div>
  );
}
