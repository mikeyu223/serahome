import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { getNeighborhood, neighborhoods } from "@/lib/neighborhoods";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getNeighborhood(slug);
  if (!area) return {};

  return {
    title: `${area.name} House Cleaning — SeraHome`,
    description: area.blurb,
    keywords: [
      area.searchPhrase,
      `${area.name} house cleaner`,
      `plant-based cleaning ${area.name}`,
      "East Bay home cleaning",
    ],
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const area = getNeighborhood(slug);
  if (!area) notFound();

  const others = neighborhoods.filter((n) => n.slug !== area.slug).slice(0, 3);

  return (
    <>
      <header className="border-b border-forest/10 bg-cream">
        <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between px-5 sm:px-8">
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
        <article className="mx-auto max-w-[900px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-medium tracking-[0.14em] text-sage uppercase">
            {area.region} · East Bay
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-forest sm:text-5xl">
            {area.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-moss">
            {area.blurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#book"
              className="inline-flex h-12 items-center rounded-full bg-forest px-6 text-[15px] font-medium text-white"
            >
              Request {area.name} Assessment
            </Link>
            <Link
              href="/refer"
              className="inline-flex h-12 items-center rounded-full border border-forest/20 bg-white px-6 text-[15px] font-medium text-forest"
            >
              Refer a neighbor
            </Link>
          </div>

          <section className="mt-14">
            <h2 className="text-xl font-medium text-forest">
              What {area.name} clients care about
            </h2>
            <ul className="mt-5 space-y-3">
              {area.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.25rem] border border-forest/10 bg-white px-5 py-4 text-[15px] text-moss"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-[1.75rem] bg-forest px-7 py-9 text-white sm:px-10">
            <h2 className="text-2xl font-medium tracking-tight">
              How booking works in {area.name}
            </h2>
            <ol className="mt-5 space-y-4 text-[15px] text-white/75">
              <li>
                <strong className="text-white">1. Assessment</strong> — Tell us
                your street area, size, and priorities. No instant cart.
              </li>
              <li>
                <strong className="text-white">2. Flat quote</strong> — A short
                text or call, then a clear price for your space.
              </li>
              <li>
                <strong className="text-white">3. Card on file</strong> — Secure
                Stripe hold. Charged after the clean—or 50% if cancelled under 48
                hours.
              </li>
            </ol>
            <Link
              href="/#book"
              className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-5 text-[14px] font-medium text-forest"
            >
              Start your assessment
            </Link>
          </section>

          <section className="mt-14">
            <h2 className="text-xl font-medium text-forest">Nearby areas</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {others.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm text-forest hover:border-forest/30"
                >
                  {n.name}
                </Link>
              ))}
              <Link
                href="/areas"
                className="rounded-full px-4 py-2 text-sm text-sage hover:text-forest"
              >
                All areas →
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
