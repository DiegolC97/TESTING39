import { InkBackdrop } from "@/components/InkBackdrop";
import { WaitlistForm } from "@/components/WaitlistForm";
import { site } from "@/lib/site";

/*
 * Full-viewport hero. min-h-dvh (not vh) so the box tracks the real visible
 * area when the mobile keyboard or browser chrome changes it, keeping the
 * email field on screen while typing.
 *
 * The vertical padding is not decoration: it reserves the top and bottom
 * bands where InkBackdrop places its splats (see that file). From lg the
 * text column is capped so the right side becomes the ink zone.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-dvh flex-1 flex-col overflow-hidden"
    >
      <InkBackdrop />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24 lg:pt-16 lg:pb-20">
        <div className="lg:max-w-[62%]">
          <p className="animate-rise mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-ground-ink/70 px-3 py-1 text-xs font-bold tracking-wide uppercase text-ink-green ring-1 ring-ink-green/40 motion-reduce:animate-none">
            <span className="size-2 rounded-full bg-ink-green" aria-hidden="true" />
            Now taking names for the beta
          </p>

          <h1
            id="hero-heading"
            className="animate-rise font-display text-hero motion-reduce:animate-none"
          >
            <span className="block text-ink-pink">{site.name}</span>
            <span className="mt-2 block text-cream text-balance">{site.descriptor}</span>
          </h1>

          <p className="animate-rise-late mt-5 max-w-2xl text-lede text-cream-muted text-pretty motion-reduce:animate-none sm:mt-6">
            {site.subheadline}
          </p>

          <div className="animate-rise-late mt-7 motion-reduce:animate-none sm:mt-10">
            <WaitlistForm />
            <p className="mt-3 max-w-xl text-sm text-cream-muted text-pretty">
              {site.waitlistNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
