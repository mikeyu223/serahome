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
          className={`pointer-events-auto flex items-center gap-0.5 rounded-full px-2.5 py-2 text-[15px] text-white transition-colors duration-500 sm:gap-1 sm:px-3 sm:py-2.5 sm:text-base ${
            scrolled ? "glass-nav-light shadow-sm" : "glass-nav"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full px-3.5 py-2.5 font-medium tracking-tight sm:px-4"
          >
            <span className="flex items-center gap-2">
              SeraHome
              <span className="inline-block h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="hidden font-normal text-white/55 sm:inline">
              Home Cleaning
            </span>
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-3.5 py-2.5 text-white/85 transition-colors hover:bg-white/10 hover:text-white sm:inline-block"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className={`pointer-events-auto rounded-full px-5 py-3 text-[15px] font-medium text-white transition-colors duration-500 sm:px-6 sm:py-3.5 sm:text-base ${
            scrolled ? "glass-nav-light" : "glass-nav"
          }`}
        >
          Book
        </a>
      </div>
    </header>
  );
}
