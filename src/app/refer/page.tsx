"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export default function ReferPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const yourName = String(data.get("yourName") || "");
    const friendName = String(data.get("friendName") || "");
    const friendPhone = String(data.get("friendPhone") || "");
    const neighborhood = String(data.get("neighborhood") || "");

    const body = [
      `Hi SeraHome — I'd like to refer a neighbor.`,
      ``,
      `My name: ${yourName}`,
      `Friend: ${friendName}`,
      `Friend phone/email: ${friendPhone}`,
      `Neighborhood: ${neighborhood}`,
      ``,
      `Please apply the referral credit when they book their first clean.`,
    ].join("\n");

    const mailto = `mailto:hello@serahome.co?subject=${encodeURIComponent(
      `Neighbor referral from ${yourName}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <>
      <header className="border-b border-forest/10 bg-cream">
        <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between px-5 sm:px-8">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <Link
            href="/#book"
            className="rounded-full border border-forest/20 bg-white px-4 py-2 text-[14px] font-medium text-forest"
          >
            Request Assessment
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-cream">
        <div className="mx-auto max-w-[900px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-medium tracking-[0.14em] text-sage uppercase">
            Referral program
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-medium tracking-tight text-forest sm:text-5xl">
            Give calm. Get credit.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-moss">
            Introduce a neighbor to SeraHome. When they complete their first paid
            clean, you both receive <strong>$75 credit</strong> toward a future
            visit—our simplest way to grow through trust, not ads.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "1. Share",
                d: "Send your neighbor this page or introduce us by text.",
              },
              {
                t: "2. They book",
                d: "They request an Estate Assessment and complete a first clean.",
              },
              {
                t: "3. You both earn",
                d: "$75 credit each, applied to the next scheduled visit.",
              },
            ].map((step) => (
              <div
                key={step.t}
                className="rounded-[1.5rem] border border-forest/10 bg-white p-5"
              >
                <p className="font-medium text-forest">{step.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-moss">{step.d}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-12 space-y-4 rounded-[1.75rem] border border-forest/10 bg-white p-6 sm:p-8"
          >
            <h2 className="text-xl font-medium text-forest">
              Refer a neighbor
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-moss">
                Your name
                <input
                  name="yourName"
                  required
                  className="mt-2 h-12 w-full rounded-full border border-forest/15 px-4 text-forest outline-none focus:border-forest"
                />
              </label>
              <label className="block text-sm text-moss">
                Their neighborhood
                <input
                  name="neighborhood"
                  required
                  placeholder="e.g. Rockridge"
                  className="mt-2 h-12 w-full rounded-full border border-forest/15 px-4 text-forest outline-none focus:border-forest"
                />
              </label>
              <label className="block text-sm text-moss">
                Friend’s name
                <input
                  name="friendName"
                  required
                  className="mt-2 h-12 w-full rounded-full border border-forest/15 px-4 text-forest outline-none focus:border-forest"
                />
              </label>
              <label className="block text-sm text-moss">
                Friend’s phone or email
                <input
                  name="friendPhone"
                  required
                  className="mt-2 h-12 w-full rounded-full border border-forest/15 px-4 text-forest outline-none focus:border-forest"
                />
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center rounded-full bg-forest px-6 text-[15px] font-medium text-white"
            >
              Send referral email
            </button>
            {status === "sent" ? (
              <p className="text-sm text-moss">
                Your mail app should open—send it and we’ll take it from there.
              </p>
            ) : null}
            <p className="text-[12px] text-sage">
              Credits apply after the referred client’s first completed paid clean.
              One credit per new household. Not combinable with founding rates
              unless we say otherwise in writing.
            </p>
          </form>

          <p className="mt-10 text-sm text-moss">
            Prefer to text us the intro directly? Mention “referral” and both
            names—we’ll track the credit manually.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
