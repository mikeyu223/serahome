import Image from "next/image";

const steps = [
  {
    label: "Assess",
    detail: "We map materials, traffic, and priorities unique to your home.",
  },
  {
    label: "Purify",
    detail: "Plant-based formulas safe for kids, pets, and sensitive air.",
  },
  {
    label: "Detail",
    detail: "Edges, fixtures, and soft surfaces get the same care as floors.",
  },
  {
    label: "Reset",
    detail: "You return to a space that feels clear, quiet, and ready.",
  },
];

export function Method() {
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
            Discover the method
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-[10px]">
              ▶
            </span>
          </a>
        </div>

        <div className="order-1 relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-warm sm:aspect-[5/4] lg:order-2 lg:aspect-[5/4]">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
