import Image from "next/image";

const services = [
  {
    code: "SC-01",
    name: "Standard Clean",
    blurb: "Weekly or biweekly upkeep for lived-in homes.",
    price: "From $149 founding · $165 after",
    image: "/images/living.jpg",
    tag: null as string | null,
    featured: false,
  },
  {
    code: "DC-02",
    name: "Deep Clean",
    blurb: "Baseboards, appliances, and every overlooked edge.",
    price: "Starting at $285",
    image: "/images/kitchen.jpg",
    tag: "Most booked",
    featured: false,
  },
  {
    code: "MX-03",
    name: "Move-In / Out",
    blurb: "Turnover-ready resets for empty homes and rentals.",
    price: "Starting at $340",
    image: "/images/bedroom.jpg",
    tag: null,
    featured: true,
  },
  {
    code: "OF-04",
    name: "Office Refresh",
    blurb: "Quiet, thorough cleans for home offices & studios.",
    price: "Starting at $195",
    image: "/images/office.jpg",
    tag: null,
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-forest text-white">
      <div className="mx-auto max-w-[1400px] py-20 sm:py-28">
        <div className="flex flex-col gap-6 px-6 sm:px-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Whole-home calm starts with a better clean.
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/65 lg:text-right">
            Four routines built for East Bay homes—same cleaner every visit,
            plant-based products, and a re-clean guarantee.
          </p>
        </div>

        <div className="mt-10 md:mt-14 md:px-6 lg:px-10">
          <div className="scroll-x flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 md:grid md:snap-none md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.code}
                className={`group relative flex w-[78vw] max-w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] bg-forest-mid transition-transform duration-500 hover:-translate-y-1 md:w-auto md:max-w-none ${
                  service.featured
                    ? "min-h-[26rem] xl:-mt-4 xl:mb-0 xl:min-h-[28rem]"
                    : "min-h-[24rem]"
                }`}
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 78vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-mid via-forest-mid/20 to-transparent" />
                  {service.tag ? (
                    <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-[11px] font-semibold text-forest">
                      {service.tag}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
                  <span className="inline-flex w-fit rounded-full border border-white/25 px-2.5 py-0.5 text-[11px] tracking-wide text-white/70">
                    {service.code}
                  </span>
                  <h3 className="mt-3 text-lg font-medium tracking-tight">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {service.blurb}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-8">
                    <p className="text-xs text-white/45">{service.price}</p>
                    <a
                      href="#book"
                      className={`inline-flex h-9 items-center rounded-full px-4 text-[13px] font-medium transition-colors ${
                        service.featured
                          ? "bg-white text-forest hover:bg-cream"
                          : "bg-forest-deep text-white hover:bg-black/40"
                      }`}
                    >
                      Request
                    </a>
                  </div>
                </div>
              </article>
            ))}
            {/* Peek spacer so the last card can center/snap with padding */}
            <div
              aria-hidden
              className="w-3 shrink-0 snap-end md:hidden"
            />
          </div>
          <p className="mt-4 px-6 text-[12px] text-white/40 md:hidden">
            Swipe to compare routines →
          </p>
        </div>
      </div>
    </section>
  );
}
