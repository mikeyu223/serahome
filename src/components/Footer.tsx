export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-2xl font-medium tracking-tight">
              SeraHome
              <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-white align-middle" />
            </p>
            <p className="mt-1 text-sm text-white/45">Home Cleaning</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Plant-based home cleaning for the East Bay—same cleaner every
              visit, nothing missed, and a re-clean guarantee.
            </p>
            <form
              className="mt-8 flex items-center gap-2 rounded-full border border-white/20 px-4 py-2"
              action="#"
            >
              <input
                type="email"
                placeholder="Sign up for our newsletter"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-white/80 transition-colors hover:text-white"
              >
                →
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                Services
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <a href="#services" className="hover:text-white">
                    Standard Clean
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Deep Clean
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Move-In / Out
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Office Refresh
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                About
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <a href="#method" className="hover:text-white">
                    Our Method
                  </a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-white">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#book" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                Help
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <a href="#book" className="hover:text-white">
                    Book a Clean
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@serahome.co" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#book" className="hover:text-white">
                    Service Areas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xs rounded-xl border border-white/15 p-3 text-[10px] leading-relaxed text-white/40">
            SeraHome cleaning products and practices are designed for residential
            use. Results vary by home condition, materials, and cadence of
            service.
          </p>
          <p className="text-xs text-white/35">
            © 2026 SeraHome. East Bay, California.
          </p>
        </div>
      </div>
    </footer>
  );
}
