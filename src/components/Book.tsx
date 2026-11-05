"use client";

export function Book() {
  return (
    <section id="book" className="bg-forest text-white">
      <div className="mx-auto flex max-w-[900px] flex-col items-center px-6 py-24 text-center sm:px-10 sm:py-32">
        <p className="text-xs font-medium tracking-[0.16em] text-lime uppercase">
          East Bay · Oakland · Berkeley · Alameda · Piedmont · Rockridge
        </p>
        <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          Ready for a home that feels calm when you walk in?
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
          Tell us your neighborhood, home size, and preferred cadence. We’ll
          match you with the same SeraHome cleaner for every visit.
        </p>
        <form
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            className="h-12 flex-1 rounded-full border border-white/25 bg-transparent px-5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-lime"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-white px-6 text-[15px] font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            Request a clean
          </button>
        </form>
      </div>
    </section>
  );
}
