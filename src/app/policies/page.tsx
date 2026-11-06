import type { Metadata } from "next";
import { LegalShell, PolicySection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Service Policies — SeraHome",
  description:
    "Cancellation, payment, re-clean guarantee, access, and service policies for SeraHome East Bay estate cleaning.",
};

export default function PoliciesPage() {
  return (
    <LegalShell title="Service Policies">
      <p>
        SeraHome provides plant-based, high-touch estate cleaning across the East
        Bay. These policies protect your home, your schedule, and our specialists’
        time—so the relationship stays calm, clear, and professional.
      </p>

      <PolicySection id="cancellation" title="1. Flexible Maintenance & Cancellation">
        <p>
          For recurring estate maintenance, we use a <strong>48-hour notice</strong>{" "}
          window. High-end schedules are booked in advance; 48 hours gives us time
          to offer a freed slot to another client or adjust the weekly route.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>48+ hours before your appointment:</strong> $0 charge. We skip
            or reschedule the session. Your card stays on file for the next visit.
          </li>
          <li>
            <strong>Under 48 hours or same-day:</strong> A late cancellation fee
            equal to <strong>50% of the service total</strong> (or a flat $75–$100
            minimum when stated in your quote) is charged to the card on file.
          </li>
          <li>
            <strong>Reminders:</strong> Recurring clients typically receive a
            reminder about <strong>72 hours</strong> before each visit so there is
            time to adjust without a fee.
          </li>
          <li>
            <strong>Pause or end recurring service:</strong> You may pause or
            cancel your maintenance plan anytime. Canceling stops future automated
            charges; your payment method may remain securely saved if you want
            on-demand cleans later.
          </li>
        </ul>
        <p>
          Official summary: Pause, reschedule, or cancel anytime with at least 48
          hours’ notice. Cancellations within 48 hours of the scheduled start time
          are subject to a late fee of 50% of the service total.
        </p>
      </PolicySection>

      <PolicySection id="payment" title="2. Payment, Card on File & Billing">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            We do <strong>not</strong> accept cash or paper checks for standard
            service. Payments run through <strong>Stripe</strong> (or an equivalent
            secure processor).
          </li>
          <li>
            After your Estate Assessment and agreed quote, a card is saved to{" "}
            <strong>reserve your booking slot</strong>. Saving a card does not
            charge you for the consult.
          </li>
          <li>
            The card on file is charged <strong>after the clean is completed</strong>
            —typically the afternoon of service—unless a late-cancellation fee
            applies.
          </li>
          <li>
            Digital receipts are issued automatically. Tips may be added on the
            receipt when available.
          </li>
          <li>
            Prices quoted after assessment are flat for the agreed scope. Material
            changes in condition, access, or requested add-ons may require a
            revised quote before work begins.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="assessment" title="3. Estate Assessment & Booking">
        <p>
          New clients begin with a brief consult (form, text, or call)—not an
          instant checkout. Square footage alone does not define condition. We
          confirm neighborhood, size, baths/beds, focus areas, and access before
          locking a date.
        </p>
        <p>
          Submitting an assessment request does not guarantee availability. Service
          begins only after mutual confirmation of scope, price, date, and card on
          file.
        </p>
      </PolicySection>

      <PolicySection id="reclean" title="4. Re-Clean Guarantee">
        <p>
          If something on the agreed checklist was missed, tell us within{" "}
          <strong>24 hours</strong> of service completion. We will return to
          correct the item at no additional charge, subject to reasonable access
          and the original scope.
        </p>
        <p>
          The guarantee does not cover damage discovered after the visit that was
          not reported promptly, work outside the agreed checklist, or conditions
          that reappear from normal living (e.g., new dishes, fresh footprints).
        </p>
      </PolicySection>

      <PolicySection id="access" title="5. Access, Keys & Presence">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You are responsible for providing safe, lawful access at the scheduled
            time (lockbox, key, code, or in-person entry).
          </li>
          <li>
            Failed access or blocked entry with less than 48 hours’ notice may be
            treated as a late cancellation.
          </li>
          <li>
            Please secure valuables, firearms, and sensitive documents. We treat
            every home as private; we do not rummage through personal storage
            beyond normal cleaning surfaces.
          </li>
          <li>
            Pets should be secured or noted in advance. Aggressive animals that
            prevent safe work may require rescheduling.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="products" title="6. Products & Materials">
        <p>
          We default to plant-based, low-VOC products suitable for most homes.
          If you require fragrance-free only, specific brands, or have material
          restrictions (marble, raw wood, specialty finishes), tell us during
          assessment. We are not liable for damage caused by undisclosed surface
          sensitivities or client-supplied products used at your request.
        </p>
      </PolicySection>

      <PolicySection id="scope" title="7. Scope, Exclusions & Add-Ons">
        <p>
          Each visit follows the checklist confirmed for your plan (Standard,
          Deep, Move-In/Out, or Office). Items such as interior oven deep-cleans,
          interior fridge deep-cleans, garage sweeps, exterior windows, or
          biohazard situations are add-ons unless included in writing.
        </p>
        <p>
          We may decline or stop work that is unsafe, unlawful, or outside our
          residential estate-cleaning scope.
        </p>
      </PolicySection>

      <PolicySection id="same-cleaner" title="8. Same Cleaner Commitment">
        <p>
          We aim to send the same specialist for recurring visits whenever
          scheduling and staffing allow. Substitutions may occur for illness,
          emergencies, or capacity—always with professionals held to the same
          standards.
        </p>
      </PolicySection>

      <PolicySection id="liability" title="9. Care, Breakage & Liability">
        <p>
          We work carefully and carry applicable business insurance. Please report
          any accidental damage within 24 hours. Pre-existing wear, fragile items
          left in high-risk locations, and open containers of liquids are your
          responsibility to protect or disclose.
        </p>
        <p>
          To the fullest extent permitted by law, SeraHome’s liability for any
          claim related to a visit is limited to the amount paid for that visit,
          except where prohibited.
        </p>
      </PolicySection>

      <PolicySection id="conduct" title="10. Respect & Safety">
        <p>
          Everyone deserves a respectful environment. Harassment, discrimination,
          or unsafe conditions directed at our team may result in immediate
          termination of service without a future booking obligation.
        </p>
      </PolicySection>
    </LegalShell>
  );
}
