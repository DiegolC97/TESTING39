"use client";

import { useId, useState, type FormEvent } from "react";

/*
 * Presentation of the waitlist call to action. Validation and announcements
 * are handled here; the actual capture (where the address goes) belongs to a
 * separate work order and plugs into `submitEmail` below.
 */

// TODO(waitlist-capture): replace with the real capture call.
async function submitEmail(email: string): Promise<void> {
  void email;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = "idle" | "submitting" | "success";

export function WaitlistForm() {
  const inputId = useId();
  const hintId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();

    if (value.length === 0) {
      setError("Enter your email address to join the waitlist.");
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError("That doesn't look like an email address. Check it and try again.");
      return;
    }

    setError(null);
    setStatus("submitting");
    await submitEmail(value);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="w-full max-w-xl rounded-blob bg-ground-raised p-6 shadow-ink ring-2 ring-ink-green"
      >
        <p className="font-display text-2xl text-ink-green">You&apos;re on the list.</p>
        <p className="mt-2 text-cream-muted">
          We&apos;ll write to you at <span className="font-bold text-cream">{email.trim()}</span>{" "}
          the moment the doors open.
        </p>
      </div>
    );
  }

  const invalid = error !== null;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={hintId}
      className="w-full max-w-xl"
    >
      <p id={hintId} className="sr-only">
        Join the waitlist
      </p>

      <div className="rounded-blob bg-ground-raised p-3 shadow-ink ring-1 ring-cream/15 sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col">
            <label htmlFor={inputId} className="mb-1.5 text-sm font-bold text-cream">
              Email address
            </label>
            <input
              id={inputId}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              autoCapitalize="none"
              spellCheck={false}
              enterKeyHint="go"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (invalid) setError(null);
              }}
              aria-invalid={invalid || undefined}
              aria-describedby={invalid ? errorId : undefined}
              className={`h-14 w-full scroll-mb-28 rounded-2xl bg-cream px-4 text-lg text-ground-ink placeholder:text-ground-ink/50 ${
                invalid ? "ring-4 ring-ink-pink" : ""
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="h-14 shrink-0 rounded-2xl bg-ink-green px-6 font-display text-lg text-ground-ink transition-transform duration-200 ease-splat hover:scale-[1.03] hover:bg-ink-green-deep active:scale-[0.98] disabled:opacity-70 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:self-end"
          >
            {status === "submitting" ? "Joining…" : "Join the waitlist"}
          </button>
        </div>

        {/* Validation lives in a polite live region so screen readers announce it. */}
        <p
          id={errorId}
          aria-live="polite"
          className={`px-1 text-sm font-bold text-ink-pink ${invalid ? "mt-3" : "sr-only"}`}
        >
          {error}
        </p>
      </div>
    </form>
  );
}
