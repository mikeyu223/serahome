import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { neighborhoods } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "East Bay Service Areas — SeraHome",
  description:
    "Plant-based home cleaning across Berkeley Hills, Piedmont, Rockridge, Oakland Hills, North Berkeley, and Alameda.",
};

export default function AreasPage() {
  return (
    <>
      <header className="border-b border-forest/10 bg-cream">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <Link
            href="/#book"
            className="rounded-full bg-forest px-4 py-2 text-[14px] font-medium text-white"
          >
            Request Assessment
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-medium tracking-[0.14em] text-sage uppercase">
            Service areas
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-medium tracking-tight text-forest sm:text-5xl">
            East Bay homes we care for.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-moss">
            Local pages help neighbors find SeraHome when they search for cleaning
            nearby—and help you see exactly how we work in your pocket of the East
            Bay.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group rounded-[1.5rem] border border-forest/10 bg-white p-6 transition-transform hover:-translate-y-0.5"
              >
                <p className="text-[11px] font-medium tracking-[0.12em] text-sage uppercase">
                  {area.region}
                </p>
                <h2 className="mt-2 text-xl font-medium tracking-tight text-forest">
                  {area.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-moss line-clamp-3">
                  {area.blurb}
                </p>
                <span className="mt-5 inline-flex text-sm font-medium text-forest group-hover:underline">
                  View {area.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
