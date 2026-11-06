import Image from "next/image";

export function Featured() {
  return (
    <section className="bg-cream text-forest">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="max-w-md text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem]">
            Essential care for every room you live in.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-moss">
            Our Home Essentials Duo pairs a recurring Standard Clean with a
            seasonal Deep Clean—same cleaner, plant-based products, and a
            re-clean guarantee if anything falls short.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="inline-flex h-12 items-center rounded-full bg-forest px-6 text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Request Essentials Duo
            </a>
            <span className="rounded-full bg-lime px-3 py-1.5 text-[12px] font-semibold text-forest">
              Bundle + Save 15%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-cream-warm">
            <Image
              src="/images/marble.jpg"
              alt="Polished marble countertop after cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-white/60" />
              <span className="text-[11px] font-medium tracking-wide text-white drop-shadow">
                SC-01 · Surfaces
              </span>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-cream-warm">
            <Image
              src="/images/linen.jpg"
              alt="Fresh folded linen"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-cream-warm">
            <Image
              src="/images/sink.jpg"
              alt="Minimal bathroom sink"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-[1.5rem] bg-cream-warm">
            <Image
              src="/images/shelves.jpg"
              alt="Organized shelves in a calm home"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
