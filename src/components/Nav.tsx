"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#method", label: "Method" },
  { href: "#stories", label: "Stories" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-10 z-50 border-b transition-colors duration-300 sm:top-11 ${
        scrolled
          ? "border-forest/10 bg-cream/95 backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-forest"
        >
          SeraHome
          <span className="inline-block h-2 w-2 rounded-full bg-forest" />
          <span className="hidden text-[13px] font-normal text-sage sm:inline">
            Home Cleaning
          </span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-3 py-2 text-[15px] text-forest/80 transition-colors hover:text-forest sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full border border-forest/20 bg-white px-4 py-2 text-[15px] font-medium text-forest transition-colors hover:border-forest/40 sm:px-5"
          >
            Book
          </a>
        </nav>
      </div>
    </header>
  );
}
