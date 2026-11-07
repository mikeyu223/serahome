import Image from "next/image";

const proofs = [
  { title: "Same cleaner", detail: "Every visit" },
  { title: "Nothing missed", detail: "Detailed checklist" },
  { title: "Re-clean guarantee", detail: "If we fall short" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="bg-cream px-3 pb-8 pt-3 sm:px-6 sm:pb-14 sm:pt-5"
    >
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-c.jpg"
            alt="Sunlit modern East Bay open-plan living room after a SeraHome clean"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/22 to-black/58" />
        </div>

        <div className="relative z-10 flex min-h-[34rem] flex-col px-5 py-8 text-white sm:min-h-[82vh] sm:px-10 sm:py-12">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="max-w-[15ch] font-serif text-[2.35rem] font-medium leading-[1.08] tracking-tight sm:max-w-3xl sm:text-5xl lg:text-[4rem]">
              Your home. Calm again.
            </h1>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/90 sm:mt-4 sm:max-w-xl sm:text-lg">
              Plant-based cleaning for East Bay homes. Same cleaner every visit,
              nothing missed, and a re-clean guarantee.
            </p>

            <div className="mt-6 flex w-full max-w-xl flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-lg sm:shadow-black/15">
              <label className="sr-only" htmlFor="hero-zip">
                ZIP or neighborhood
              </label>
              <div className="flex items-center rounded-full bg-white px-4 shadow-lg shadow-black/10 sm:flex-1 sm:shadow-none sm:px-0">
                <span className="text-forest/40 sm:pl-4" aria-hidden>
                  ⌕
                </span>
                <input
                  id="hero-zip"
                  name="zip"
                  type="text"
                  placeholder="Neighborhood for assessment"
                  className="min-w-0 flex-1 bg-transparent py-3.5 pl-2 text-[15px] text-forest outline-none placeholder:text-forest/40 sm:py-3"
                />
              </div>
              <a
                href="#book"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-[15px] font-medium text-white transition-transform hover:scale-[1.02] sm:h-11 sm:w-auto sm:shrink-0 sm:px-6"
              >
                Request Assessment
              </a>
            </div>
            <p className="mt-3 text-[12px] text-white/75">
              Brief consult first · Card on file via Stripe after we quote
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/20 pt-5 text-center sm:mt-10 sm:gap-6 sm:pt-6 sm:text-left">
            {proofs.map((proof, i) => (
              <div
                key={proof.title}
                className={
                  i === 1
                    ? "sm:text-center"
                    : i === 2
                      ? "sm:text-right"
                      : undefined
                }
              >
                <p className="text-[12px] font-medium leading-snug sm:text-sm">
                  {proof.title}
                </p>
                <p className="mt-0.5 text-[10px] text-white/70 sm:text-[12px]">
                  {proof.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
