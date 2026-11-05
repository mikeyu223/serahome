import Image from "next/image";

export function Split() {
  return (
    <section className="bg-cream px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-2 lg:gap-5">
        <article className="relative min-h-[28rem] overflow-hidden rounded-[1.75rem] sm:min-h-[34rem]">
          <Image
            src="/images/exterior.jpg"
            alt="Modern home in the Bay Area hills"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-forest/45" />
          <p className="absolute left-4 top-1/2 origin-left -translate-y-1/2 -rotate-90 text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase sm:left-6">
            Oakland Hills — California
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
            <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Sera 【 Labs 】
            </h3>
            <p className="mt-3 max-w-xs text-sm text-white/80">
              Because a clean home is not just surfaces.
            </p>
            <a
              href="#method"
              className="mt-7 inline-flex h-11 items-center rounded-full bg-white px-6 text-[14px] font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              Read More
            </a>
          </div>
        </article>

        <article className="relative min-h-[28rem] overflow-hidden rounded-[1.75rem] bg-forest sm:min-h-[34rem]">
          <Image
            src="/images/living.jpg"
            alt="Calm living room after cleaning"
            fill
            className="object-cover opacity-50"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/50 to-forest/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
            <h3 className="max-w-sm text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Change how your home feels for good.
            </h3>
            <p className="mt-4 max-w-xs text-sm text-white/75">
              Feel lasting calm in one visit with DC-02 Deep Clean.
            </p>
            <a
              href="#book"
              className="mt-7 inline-flex h-11 items-center rounded-full bg-white px-6 text-[14px] font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              Book Now
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
