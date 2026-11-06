import type { Metadata } from "next";
import { LegalShell, PolicySection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — SeraHome",
  description:
    "How SeraHome collects, uses, and protects personal information for East Bay estate cleaning clients.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        This Privacy Policy explains how SeraHome (“we,” “us”) collects, uses, and
        shares information when you use serahome.co, request an Estate Assessment,
        book service, or communicate with us.
      </p>

      <PolicySection title="1. Information We Collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Contact details:</strong> name, email, phone, preferred
            contact method.
          </li>
          <li>
            <strong>Home details:</strong> neighborhood, approximate square
            footage, bedrooms, access notes, and service preferences you provide.
          </li>
          <li>
            <strong>Payment details:</strong> processed by Stripe (or similar). We
            do not store full card numbers on our servers; the processor stores
            tokens/cards on file as needed to bill completed service or fees.
          </li>
          <li>
            <strong>Communications:</strong> texts, emails, and notes from consults
            or support.
          </li>
          <li>
            <strong>Technical data:</strong> basic site analytics (pages viewed,
            device type, approximate location) if enabled.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="2. How We Use Information">
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to assessment requests and schedule consults</li>
          <li>Quote, book, remind, and deliver cleaning services</li>
          <li>Process payments, receipts, tips, and cancellation fees</li>
          <li>Improve our service quality and website experience</li>
          <li>Send service-related messages (reminders, confirmations)</li>
          <li>
            Send optional marketing only if you opt in; you can unsubscribe anytime
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Sharing">
        <p>We do not sell your personal information.</p>
        <p>We may share information with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Payment processors</strong> (e.g., Stripe) to save cards and
            charge for completed work or applicable fees
          </li>
          <li>
            <strong>Operational tools</strong> (email/SMS providers, scheduling)
            solely to run the business
          </li>
          <li>
            <strong>Legal or safety needs</strong> when required by law or to
            protect rights, property, or people
          </li>
        </ul>
        <p>
          Specialists assigned to your home receive only the details needed to
          perform the clean.
        </p>
      </PolicySection>

      <PolicySection title="4. Retention">
        <p>
          We keep client and booking records as long as needed for service,
          accounting, dispute resolution, and legal obligations, then delete or
          anonymize when no longer required.
        </p>
      </PolicySection>

      <PolicySection title="5. Security">
        <p>
          We use reasonable administrative and technical safeguards. No method of
          transmission or storage is 100% secure; please use strong unique
          passwords on any portals we provide and avoid sending card numbers over
          SMS.
        </p>
      </PolicySection>

      <PolicySection title="6. Your Choices">
        <ul className="list-disc space-y-2 pl-5">
          <li>Update or correct your contact and home details by emailing us</li>
          <li>Opt out of marketing emails via the unsubscribe link</li>
          <li>
            Request deletion of personal data where applicable (we may retain
            records required for taxes, fraud prevention, or legal claims)
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="7. Children">
        <p>
          Our services are for adults arranging residential cleaning. We do not
          knowingly collect information from children under 13.
        </p>
      </PolicySection>

      <PolicySection title="8. California / CCPA-style Rights">
        <p>
          East Bay residents may request to know, delete, or correct personal
          information we hold, subject to legal exceptions. Contact{" "}
          <a
            href="mailto:hello@serahome.co"
            className="text-forest underline-offset-2 hover:underline"
          >
            hello@serahome.co
          </a>
          . We will not discriminate against you for exercising privacy rights.
        </p>
      </PolicySection>

      <PolicySection title="9. Changes">
        <p>
          We may update this policy from time to time. The “Last updated” date at
          the top will change when we do. Continued use of our site or services
          after updates means you accept the revised policy.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact">
        <p>
          Privacy questions:{" "}
          <a
            href="mailto:hello@serahome.co"
            className="text-forest underline-offset-2 hover:underline"
          >
            hello@serahome.co
          </a>
          · SeraHome · East Bay, California.
        </p>
      </PolicySection>
    </LegalShell>
  );
}
