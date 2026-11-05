import Image from "next/image";

export function Stories() {
  return (
    <section id="stories" className="bg-cream text-forest">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 sm:py-16">
        <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]">
          Stories from homeowners, hosts, and neighbors like you.
        </h2>

        <div className="mt-12 flex gap-4 overflow-x-auto scroll-x pb-4 sm:grid sm:grid-cols-12 sm:gap-5 sm:overflow-visible sm:pb-0">
          <div className="relative h-64 w-56 shrink-0 overflow-hidden rounded-full sm:col-span-3 sm:h-auto sm:min-h-[280px] sm:w-auto sm:rounded-[50%]">
            <Image
              src="/images/sink.jpg"
              alt="Clean bathroom fixture"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>

          <div className="relative h-72 w-52 shrink-0 overflow-hidden rounded-[1.75rem] sm:col-span-3 sm:h-auto sm:min-h-[320px] sm:w-auto">
            <Image
              src="/images/linen.jpg"
              alt="Fresh linens on a made bed"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>

          <div className="flex h-72 w-64 shrink-0 flex-col justify-between rounded-[1.75rem] bg-cream-warm p-6 sm:col-span-3 sm:h-auto sm:min-h-[320px] sm:w-auto">
            <p className="text-[15px] leading-relaxed text-forest">
              “They push the boundaries on what a home clean can feel like—quiet,
              precise, and somehow restorative.”
            </p>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-sage uppercase">
              SF Chronicle · Homes
            </p>
          </div>

          <div className="relative h-64 w-56 shrink-0 overflow-hidden rounded-[40%] sm:col-span-3 sm:h-auto sm:min-h-[280px] sm:w-auto">
            <Image
              src="/images/shelves.jpg"
              alt="Organized home shelves"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>

          <div className="relative h-72 w-52 shrink-0 overflow-hidden rounded-[1.75rem] sm:col-span-4 sm:h-auto sm:min-h-[300px] sm:w-auto">
            <Image
              src="/images/marble.jpg"
              alt="Marble kitchen detail"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>

          <div className="relative h-72 w-64 shrink-0 overflow-hidden rounded-[1.75rem] sm:col-span-4 sm:h-auto sm:min-h-[300px] sm:w-auto">
            <Image
              src="/images/window.jpg"
              alt="Sunlit clean window"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>

          <div className="relative h-72 w-52 shrink-0 overflow-hidden rounded-[1.75rem] sm:col-span-4 sm:h-auto sm:min-h-[300px] sm:w-auto">
            <Image
              src="/images/exterior.jpg"
              alt="Modern Bay Area home exterior"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
