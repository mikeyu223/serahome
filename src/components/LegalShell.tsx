import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

const legalNav = [
  { href: "/policies", label: "Service Policies" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/agreement", label: "Client Agreement" },
];

export function LegalShell({
  children,
  title,
  updated = "November 5, 2026",
}: {
  children: ReactNode;
  title: string;
  updated?: string;
}) {
  return (
    <>
      <header className="border-b border-forest/10 bg-cream">
        <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
          <Link href="/" className="transition-opacity hover:opacity-75">
            <Logo size="md" />
          </Link>
          <Link
            href="/#book"
            className="rounded-full border border-forest/20 bg-white px-4 py-2 text-[14px] font-medium text-forest transition-colors hover:border-forest/40"
          >
            Request Assessment
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-cream">
        <div className="mx-auto max-w-[900px] px-5 py-12 sm:px-8 sm:py-16">
          <nav className="flex flex-wrap gap-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-forest/10 bg-white px-3.5 py-1.5 text-[13px] text-forest/75 transition-colors hover:border-forest/25 hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <h1 className="mt-8 font-serif text-3xl font-medium tracking-tight text-forest sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-sage">Last updated {updated}</p>

          <div className="prose-sera mt-10 space-y-10 text-[15px] leading-relaxed text-moss">
            {children}
          </div>

          <p className="mt-14 rounded-[1.25rem] border border-forest/10 bg-cream-warm p-5 text-[12px] leading-relaxed text-sage">
            These documents describe how SeraHome operates for East Bay estate
            cleaning. They are provided for transparency and are not a substitute
            for personalized legal advice. Contact{" "}
            <a
              href="mailto:hello@serahome.co"
              className="text-forest underline-offset-2 hover:underline"
            >
              hello@serahome.co
            </a>{" "}
            with questions before booking.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-medium tracking-tight text-forest">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
