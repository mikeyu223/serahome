"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/refer", label: "Refer" },
  { href: "#book", label: "Assess" },
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
        <a href="#top" className="transition-opacity hover:opacity-75">
          <Logo size="md" />
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-[15px] transition-colors sm:inline-block ${
                link.label === "Assess"
                  ? "border border-forest/20 bg-white font-medium text-forest hover:border-forest/40"
                  : "hidden text-forest/80 hover:text-forest sm:inline-block"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
