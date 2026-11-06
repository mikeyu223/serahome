import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, PolicySection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Client Service Agreement — SeraHome",
  description:
    "SeraHome client service agreement covering assessment, payment, cancellation, access, and the re-clean guarantee.",
};

export default function AgreementPage() {
  return (
    <LegalShell title="Client Service Agreement">
      <p>
        This Client Service Agreement (“Agreement”) is between you (“Client”) and
        SeraHome for residential estate cleaning in the East Bay. By confirming a
        booking after your Estate Assessment—or by saving a card to hold a
        date—you accept this Agreement together with our{" "}
        <Link href="/policies" className="text-forest underline-offset-2 hover:underline">
          Service Policies
        </Link>
        ,{" "}
        <Link href="/terms" className="text-forest underline-offset-2 hover:underline">
          Terms
        </Link>
        , and{" "}
        <Link href="/privacy" className="text-forest underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <PolicySection title="1. Onboarding">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Client requests an Estate Assessment (web, text, or call).</li>
          <li>
            SeraHome confirms details (neighborhood, size, condition focus, access)
            and provides a flat quote.
          </li>
          <li>
            Client accepts the quote and saves a payment method via Stripe to
            reserve the appointment.
          </li>
          <li>
            SeraHome confirms date/time and sends reminders for recurring plans
            (typically ~72 hours before each visit).
          </li>
        </ol>
      </PolicySection>

      <PolicySection title="2. Services">
        <p>
          SeraHome will perform the agreed checklist for the selected plan
          (Standard, Deep, Move-In/Out, Office, or custom). Same-cleaner assignment
          is our goal for recurring clients when staffing allows.
        </p>
      </PolicySection>

      <PolicySection title="3. Client Responsibilities">
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate home and access information</li>
          <li>Ensure safe entry at the scheduled time</li>
          <li>Disclose pets, alarms, HOA rules, and fragile or specialty surfaces</li>
          <li>Clear or identify items that should not be moved or cleaned</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Fees & Authorization">
        <p>
          Client authorizes SeraHome (via Stripe) to charge the card on file for:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Completed services at the agreed rate</li>
          <li>Approved tips</li>
          <li>
            Late cancellation / failed-access fees under the 48-hour policy (50% of
            service total, or the flat minimum stated in the quote)
          </li>
        </ul>
        <p>Charges for completed cleans typically post the afternoon of service.</p>
      </PolicySection>

      <PolicySection title="5. Cancellation & Skipping">
        <p>
          Recurring visits may be paused, skipped, or rescheduled with{" "}
          <strong>48+ hours’ notice</strong> at no charge. Notice under 48 hours
          triggers the late fee. Permanent cancellation stops future automated
          visits; card data may remain on file for future on-demand requests unless
          Client asks us to remove it.
        </p>
      </PolicySection>

      <PolicySection title="6. Re-Clean Guarantee">
        <p>
          Missed checklist items reported within 24 hours will be corrected at no
          extra charge, per our Service Policies.
        </p>
      </PolicySection>

      <PolicySection title="7. Independent Operation">
        <p>
          Specialists may be employees or vetted contractors of SeraHome. They are
          not Client’s employees. Client will not solicit SeraHome personnel for
          direct private employment during an active plan and for six months after
          the last visit without written consent (a reasonable placement fee may
          apply if agreed separately).
        </p>
      </PolicySection>

      <PolicySection title="8. Photos">
        <p>
          We may take before/after photos of surfaces for quality control. We will
          not publish images that identify your address or personal belongings
          without consent. Marketing photos of anonymous rooms may be used if
          identifiable details are removed—opt out anytime in writing.
        </p>
      </PolicySection>

      <PolicySection title="9. Termination">
        <p>
          Either party may end recurring service with notice. SeraHome may suspend
          or end service for non-payment, unsafe conditions, harassment, or material
          breach of this Agreement.
        </p>
      </PolicySection>

      <PolicySection title="10. Acknowledgement">
        <p>
          Client acknowledges they have read the Flexible Maintenance & Cancellation
          Policy, understand that a card on file is required to hold dates, and that
          charges occur after completed service unless a late fee applies.
        </p>
      </PolicySection>
    </LegalShell>
  );
}
