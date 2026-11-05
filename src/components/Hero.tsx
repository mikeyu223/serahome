import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-forest-deep text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-interior.jpg"
          alt="Sunlit East Bay living room after a SeraHome clean"
          fill
          priority
          className="animate-drift object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/70 to-forest-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/40" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-24 lg:justify-center lg:pb-20">
        <div className="max-w-xl">
          <p className="animate-fade-up text-sm font-medium tracking-[0.08em] text-lime">
            SeraHome · Home Cleaning
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            Calm, plant-based cleaning for East Bay homes.
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            The same cleaner every visit. Nothing missed. A re-clean guarantee if
            we ever fall short.
          </p>
          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#book"
              className="inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-medium text-forest transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a Clean
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-white"
            >
              See services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
