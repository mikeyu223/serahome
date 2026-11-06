"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

type ExpandKey = "purify" | "detail" | null;

const expands: Record<
  Exclude<ExpandKey, null>,
  { trigger: string; title: string; body: string }
> = {
  purify: {
    trigger: "+ View Ingredients",
    title: "Curated chemistry",
    body: "Method plant-derived surface care, pH-neutral solutions, Dawn Free & Clear—zero chlorine bleach, ammonia, or phthalates.",
  },
  detail: {
    trigger: "+ View Technique",
    title: "Hand detailing",
    body: "100% manual hand-detailing with narrow nylon crevice brushes and color-coded microfibers—zero abrasive power tools on your marble or brass.",
  },
};

const steps: {
  label: string;
  detail: string;
  expand?: Exclude<ExpandKey, null>;
}[] = [
  {
    label: "Assess",
    detail: "We map materials, traffic, and priorities unique to your home.",
  },
  {
    label: "Purify",
    detail:
      "Plant-derived botanical formulas & micro-fiber care—safe for kids, pets, and sensitive air.",
    expand: "purify",
  },
  {
    label: "Detail",
    detail: "Edges, fixtures, and soft surfaces get the same care as floors.",
    expand: "detail",
  },
  {
    label: "Reset",
    detail: "You return to a space that feels clear, quiet, and ready.",
  },
];

export function Method() {
  const [open, setOpen] = useState<ExpandKey>(null);

  return (
    <section id="method" className="bg-cream text-forest">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-sage">
            Method / Clean Science
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Your home is more than surfaces.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-moss">
            Foggy windows, worn counters, and crowded calendars—SeraHome treats
            cleaning as care for East Bay homes, not a checklist of chores. The
            same cleaner learns your space so nothing gets missed.
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-forest px-6 text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Request an assessment
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-[10px]">
              ▶
            </span>
          </a>
        </div>

        <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-warm sm:aspect-[5/4] lg:order-2 lg:aspect-[5/4]">
          <Image
            src="/images/bathroom.jpg"
            alt="Bright minimal bathroom with soft natural light"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest/25 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="grid gap-6 rounded-[2rem] bg-cream-warm p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.label} className="relative">
              <p className="text-[11px] font-medium tracking-[0.16em] text-sage uppercase">
                0{i + 1}
              </p>
              <h3 className="mt-3 text-lg font-medium tracking-tight">
                {step.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-moss">
                {step.detail}
              </p>
              {step.expand ? (
                <StepExpand
                  expandKey={step.expand}
                  open={open === step.expand}
                  onToggle={() =>
                    setOpen((current) =>
                      current === step.expand ? null : step.expand!,
                    )
                  }
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepExpand({
  expandKey,
  open,
  onToggle,
}: {
  expandKey: Exclude<ExpandKey, null>;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const content = expands[expandKey];

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onToggle();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onToggle]);

  return (
    <div ref={panelRef} className="mt-3">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="text-left text-[13px] font-medium text-forest underline decoration-forest/25 underline-offset-4 transition-colors hover:decoration-forest"
      >
        {open ? content.trigger.replace("+", "–") : content.trigger}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="mt-3 rounded-[1.15rem] border border-forest/10 bg-white p-4 shadow-[0_12px_40px_rgba(26,48,29,0.06)]"
      >
        <p className="text-[11px] font-semibold tracking-[0.12em] text-sage uppercase">
          {content.title}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-moss">
          {content.body}
        </p>
      </div>
    </div>
  );
}
