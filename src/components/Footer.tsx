import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Logo variant="light" size="lg" />
            </Link>
            <p className="mt-3 text-sm text-white/45">Home Cleaning · East Bay</p>
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

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                Services
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="/#services" className="hover:text-white">
                    Standard Clean
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white">
                    Deep Clean
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white">
                    Move-In / Out
                  </Link>
                </li>
                <li>
                  <Link href="/#book" className="hover:text-white">
                    Request Assessment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                About
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="/areas" className="hover:text-white">
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link href="/refer" className="hover:text-white">
                    Refer a Neighbor
                  </Link>
                </li>
                <li>
                  <Link href="/#method" className="hover:text-white">
                    Our Method
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@serahome.co" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                Policies
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="/policies" className="hover:text-white">
                    Service Policies
                  </Link>
                </li>
                <li>
                  <Link href="/policies#cancellation" className="hover:text-white">
                    Cancellation
                  </Link>
                </li>
                <li>
                  <Link href="/policies#payment" className="hover:text-white">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link href="/policies#reclean" className="hover:text-white">
                    Re-Clean Guarantee
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/agreement" className="hover:text-white">
                    Client Agreement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
            Flexible Maintenance & Cancellation Policy
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/55">
            Pause, reschedule, or cancel your recurring estate visits anytime with
            at least 48 hours’ notice. Cancellations made within 48 hours of your
            scheduled start time are subject to a late cancellation fee equal to
            50% of the service total.{" "}
            <Link
              href="/policies#cancellation"
              className="text-white/75 underline-offset-2 hover:underline"
            >
              Read full policies
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-[11px] leading-relaxed text-white/40">
            By requesting an assessment or booking, you agree to our{" "}
            <Link href="/terms" className="underline-offset-2 hover:underline">
              Terms
            </Link>
            ,{" "}
            <Link href="/privacy" className="underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/agreement" className="underline-offset-2 hover:underline">
              Client Agreement
            </Link>
            .
          </p>
          <p className="text-xs text-white/35">
            © 2026 SeraHome. East Bay, California.
          </p>
        </div>
      </div>
    </footer>
  );
}
