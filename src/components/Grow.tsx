import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";

export function Grow() {
  return (
    <section className="bg-cream text-forest">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-sage uppercase">
              Find us locally
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Built for your East Bay neighborhood.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-moss">
              Dedicated pages for the places we clean most—so neighbors searching
              “house cleaning near me” find a calm, local option instead of a
              mega-crew.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {neighborhoods.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm text-forest transition-colors hover:border-forest/35"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link
              href="/areas"
              className="mt-6 inline-flex text-sm font-medium text-forest underline-offset-4 hover:underline"
            >
              See all service areas →
            </Link>
          </div>

          <div className="rounded-[1.75rem] bg-forest p-8 text-white sm:p-10">
            <p className="text-xs font-medium tracking-[0.14em] text-lime uppercase">
              Referrals
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight">
              Your neighbors are the best clients.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              When someone you trust completes their first paid clean, you both
              get <strong className="text-white">$75 credit</strong> toward a
              future visit.
            </p>
            <Link
              href="/refer"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-6 text-[15px] font-medium text-forest transition-transform hover:scale-[1.02]"
            >
              Refer a neighbor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
