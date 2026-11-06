import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, PolicySection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — SeraHome",
  description:
    "Terms governing use of the SeraHome website and estate cleaning services in the East Bay.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service">
      <p>
        These Terms of Service (“Terms”) govern your use of the SeraHome website
        and related services. By submitting an Estate Assessment, booking, or
        using our site, you agree to these Terms and our{" "}
        <Link href="/policies" className="text-forest underline-offset-2 hover:underline">
          Service Policies
        </Link>
        ,{" "}
        <Link href="/privacy" className="text-forest underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        , and{" "}
        <Link href="/agreement" className="text-forest underline-offset-2 hover:underline">
          Client Service Agreement
        </Link>
        .
      </p>

      <PolicySection title="1. Who We Are">
        <p>
          SeraHome provides residential estate cleaning and related home-care
          services in the East Bay (including Oakland, Berkeley, Alameda,
          Piedmont, Rockridge, and nearby areas as capacity allows).
        </p>
      </PolicySection>

      <PolicySection title="2. Website Use">
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the site only for lawful purposes</li>
          <li>Do not attempt to disrupt, scrape abusively, or misuse forms</li>
          <li>
            Content on the site (branding, copy, design) is owned by SeraHome or
            its licensors and may not be copied for commercial use without
            permission
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Services Are Not Instant Checkout">
        <p>
          Online forms request an assessment or consultation. They do not create a
          binding booking until we confirm scope, price, date, and payment method
          on file. We may decline service at our discretion.
        </p>
      </PolicySection>

      <PolicySection title="4. Quotes & Pricing">
        <p>
          Published “starting at” or founding rates are informational. Final pricing
          is confirmed after assessment based on size, condition, cadence, and
          scope. Taxes may apply where required.
        </p>
      </PolicySection>

      <PolicySection title="5. Payments & Fees">
        <p>
          By saving a card and confirming a booking, you authorize charges for
          completed services, agreed tips, and applicable late-cancellation or
          failed-access fees described in our Service Policies. Disputed charges
          should be raised with us first at hello@serahome.co.
        </p>
      </PolicySection>

      <PolicySection title="6. Cancellations">
        <p>
          The 48-hour Flexible Maintenance & Cancellation Policy in our{" "}
          <Link href="/policies#cancellation" className="text-forest underline-offset-2 hover:underline">
            Service Policies
          </Link>{" "}
          applies to scheduled visits.
        </p>
      </PolicySection>

      <PolicySection title="7. Warranties & Disclaimers">
        <p>
          We strive for careful, consistent work. Except for the Re-Clean Guarantee
          and any written commitment we give you, services are provided “as is” to
          the extent permitted by law. We do not guarantee a specific aesthetic
          outcome beyond the agreed checklist.
        </p>
      </PolicySection>

      <PolicySection title="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, SeraHome is not liable for
          indirect, incidental, or consequential damages. Our total liability for
          any claim related to a visit is limited to the fees paid for that visit,
          except where liability cannot be limited.
        </p>
      </PolicySection>

      <PolicySection title="9. Indemnity">
        <p>
          You agree to indemnify SeraHome against claims arising from inaccurate
          access information, unsafe conditions you fail to disclose, or misuse of
          the website, except to the extent caused by our negligence or willful
          misconduct.
        </p>
      </PolicySection>

      <PolicySection title="10. Governing Law">
        <p>
          These Terms are governed by the laws of the State of California, without
          regard to conflict-of-law rules. Venue for disputes shall be in courts
          located in Alameda County or San Francisco County, California, unless
          otherwise required.
        </p>
      </PolicySection>

      <PolicySection title="11. Changes">
        <p>
          We may update these Terms periodically. Continued use after changes
          constitutes acceptance. Material changes to active recurring clients may
          also be communicated by email or text.
        </p>
      </PolicySection>

      <PolicySection title="12. Contact">
        <p>
          <a
            href="mailto:hello@serahome.co"
            className="text-forest underline-offset-2 hover:underline"
          >
            hello@serahome.co
          </a>{" "}
          · SeraHome · East Bay, California.
        </p>
      </PolicySection>
    </LegalShell>
  );
}
