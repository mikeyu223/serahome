"use client";

import { FormEvent, useState, type ReactNode } from "react";

const neighborhoods = [
  "Oakland",
  "Berkeley",
  "Berkeley Hills",
  "Piedmont",
  "Rockridge",
  "Alameda",
  "Emeryville",
  "Other East Bay",
];

const phoneDisplay =
  process.env.NEXT_PUBLIC_SERAHOME_PHONE ?? "(510) 555-0148";
const phoneHref = `sms:${(process.env.NEXT_PUBLIC_SERAHOME_PHONE ?? "5105550148").replace(/\D/g, "")}`;

type Status = "idle" | "loading" | "success" | "error";

export function Book() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [contactPreference, setContactPreference] = useState<"text" | "call">(
    "text",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          neighborhood: data.get("neighborhood"),
          squareFootage: data.get("squareFootage"),
          bedrooms: data.get("bedrooms"),
          contactPreference,
          notes: data.get("notes"),
        }),
      });

      const json = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        json.message ??
          "Thanks — we’ll reach out shortly to tailor your quote, then send a secure Stripe link to save your card and hold the date.",
      );
      form.reset();
      setContactPreference("text");
    } catch {
      setStatus("error");
      setMessage("Network error. Text us directly and we’ll take it from there.");
    }
  }

  return (
    <section id="book" className="bg-forest text-white">
      <div className="mx-auto max-w-[1080px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.16em] text-lime uppercase">
            Estate Assessment · East Bay
          </p>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            Request an Estate Assessment
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/65 sm:text-base">
            High-touch onboarding starts with a short consult—not an instant cart.
            Share a few details, we’ll quote your space, then hold the date with a
            card on file via Stripe (charged only when the clean is complete).
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Alex Rivera"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="email" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Mobile phone" htmlFor="phone" required>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(510) 555-0100"
                  className={inputClass}
                />
              </Field>
              <Field label="Neighborhood" htmlFor="neighborhood" required>
                <select
                  id="neighborhood"
                  name="neighborhood"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    Select neighborhood
                  </option>
                  {neighborhoods.map((n) => (
                    <option key={n} value={n} className="text-forest">
                      {n}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Approx. square footage"
                htmlFor="squareFootage"
                required
              >
                <input
                  id="squareFootage"
                  name="squareFootage"
                  required
                  placeholder="e.g. 1,800"
                  className={inputClass}
                />
              </Field>
              <Field label="Bedrooms" htmlFor="bedrooms">
                <input
                  id="bedrooms"
                  name="bedrooms"
                  placeholder="e.g. 3"
                  className={inputClass}
                />
              </Field>
            </div>

            <fieldset>
              <legend className="mb-2 text-[13px] text-white/70">
                Preferred contact <span className="text-lime">*</span>
              </legend>
              <div className="flex gap-2">
                {(
                  [
                    ["text", "Text"],
                    ["call", "Call"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setContactPreference(value)}
                    className={`h-11 flex-1 rounded-full border text-[14px] font-medium transition-colors ${
                      contactPreference === value
                        ? "border-lime bg-lime text-forest"
                        : "border-white/25 text-white hover:border-white/50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <Field label="Anything we should know?" htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Pets, focus areas, preferred days…"
                className={`${inputClass} resize-none rounded-[1.25rem] py-3`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-[15px] font-medium text-forest transition-transform hover:scale-[1.01] disabled:cursor-wait disabled:opacity-70"
            >
              {status === "loading"
                ? "Sending…"
                : "Request Estate Assessment"}
            </button>

            {message ? (
              <p
                className={`text-sm leading-relaxed ${
                  status === "error" ? "text-red-200" : "text-lime"
                }`}
              >
                {message}
              </p>
            ) : null}

            <p className="text-[12px] leading-relaxed text-white/45">
              Fields marked <span className="text-lime">*</span> are required. No
              charge to request. After we agree on scope and price, you’ll save a
              card securely with Stripe to reserve your slot. Recurring visits use
              a{" "}
              <a
                href="/policies#cancellation"
                className="text-white/70 underline-offset-2 hover:underline"
              >
                48-hour cancellation policy
              </a>
              .
            </p>
          </form>

          <aside className="rounded-[1.75rem] border border-white/15 bg-white/5 p-7 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
              How it works
            </p>
            <ol className="mt-5 space-y-5 text-[14px] leading-relaxed text-white/75">
              <li>
                <span className="font-medium text-white">1. Assessment</span>
                <br />
                You share neighborhood, size, and preferences. We reply the same day.
              </li>
              <li>
                <span className="font-medium text-white">2. Short consult</span>
                <br />
                A quick text or call to confirm condition, focus areas, and a flat quote.
              </li>
              <li>
                <span className="font-medium text-white">3. Card on file</span>
                <br />
                Secure Stripe link to save your card and hold the date—billed when
                complete, with tip-ready receipts.
              </li>
            </ol>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[13px] text-white/60">Prefer to text directly?</p>
              <a
                href={phoneHref}
                className="mt-2 inline-flex text-lg font-medium text-lime underline-offset-4 hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-2 text-[12px] text-white/40">
                Reach the SeraHome team · East Bay
              </p>
            </div>
          </aside>
        </div>

        <div
          id="policy"
          className="mx-auto mt-14 max-w-4xl rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-7 sm:mt-16 sm:p-9"
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
            Flexible Maintenance & Cancellation
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/80">
            Pause, reschedule, or cancel your recurring estate visits anytime with
            at least 48 hours’ notice. Cancellations made within 48 hours of your
            scheduled start time are subject to a late cancellation fee equal to
            50% of the service total, charged to the card on file.
          </p>
          <ul className="mt-6 grid gap-4 text-[13px] leading-relaxed text-white/55 sm:grid-cols-3">
            <li>
              <span className="font-medium text-white/85">48+ hours ahead</span>
              <br />
              $0 charge. We skip or reschedule your session with one click—your
              card stays on file for the next visit.
            </li>
            <li>
              <span className="font-medium text-white/85">Under 48 hours</span>
              <br />
              Late-notice fee of 50% of the service total (or a flat $75–$100
              minimum, whichever applies to your quote).
            </li>
            <li>
              <span className="font-medium text-white/85">Reminders</span>
              <br />
              You’ll get a reminder about 72 hours before each visit so there’s
              time to adjust without a fee.
            </li>
          </ul>
          <p className="mt-6 text-[12px] text-white/45">
            Full details:{" "}
            <a
              href="/policies"
              className="text-white/70 underline-offset-2 hover:underline"
            >
              Service Policies
            </a>
            ,{" "}
            <a
              href="/agreement"
              className="text-white/70 underline-offset-2 hover:underline"
            >
              Client Agreement
            </a>
            ,{" "}
            <a
              href="/privacy"
              className="text-white/70 underline-offset-2 hover:underline"
            >
              Privacy
            </a>
            , and{" "}
            <a
              href="/terms"
              className="text-white/70 underline-offset-2 hover:underline"
            >
              Terms
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-left">
      <span className="mb-2 block text-[13px] text-white/70">
        {label}
        {required ? <span className="text-lime"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "h-12 w-full rounded-full border border-white/25 bg-transparent px-5 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-lime";
