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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-10 z-50 px-4 pt-3 sm:top-11 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3">
        <nav
          className={`pointer-events-auto flex items-center gap-1 rounded-full px-2 py-1.5 text-[13px] text-white transition-colors duration-500 sm:gap-0.5 sm:px-2.5 ${
            scrolled ? "glass-nav-light shadow-sm" : "glass-nav"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-1.5 rounded-full px-3 py-2 font-medium tracking-tight"
          >
            SeraHome
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-3 py-2 text-white/85 transition-colors hover:text-white sm:inline-block"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className={`pointer-events-auto rounded-full px-4 py-2.5 text-[13px] font-medium text-white transition-colors duration-500 ${
            scrolled ? "glass-nav-light" : "glass-nav"
          }`}
        >
          Book
        </a>
      </div>
    </header>
  );
}
