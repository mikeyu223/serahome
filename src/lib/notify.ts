import { Resend } from "resend";

type AssessmentNotifyPayload = {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  squareFootage: string;
  bedrooms: string;
  contactPreference: string;
  notes: string;
};

/** Server-only inbox — never expose via NEXT_PUBLIC_* */
function getNotifyEmail() {
  return process.env.ASSESSMENT_NOTIFY_EMAIL?.trim() || "";
}

export async function notifyAssessmentRequest(
  payload: AssessmentNotifyPayload,
) {
  const to = getNotifyEmail();
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!to) {
    console.warn(
      "[assessment] ASSESSMENT_NOTIFY_EMAIL is not set; skipping email notify",
    );
    return { sent: false as const, reason: "missing_notify_email" };
  }

  if (!apiKey) {
    console.info("[assessment] RESEND_API_KEY missing; inquiry logged only", {
      to,
      ...payload,
    });
    return { sent: false as const, reason: "missing_resend_key" };
  }

  const from =
    process.env.ASSESSMENT_FROM_EMAIL?.trim() ||
    "SeraHome Assessments <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `New Estate Assessment — ${payload.name} · ${payload.neighborhood}`,
    text: [
      "New SeraHome Estate Assessment request",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Prefer: ${payload.contactPreference}`,
      `Neighborhood: ${payload.neighborhood}`,
      `Square footage: ${payload.squareFootage}`,
      `Bedrooms: ${payload.bedrooms || "—"}`,
      `Notes: ${payload.notes || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[assessment] Resend failed", error);
    return { sent: false as const, reason: "resend_error" };
  }

  return { sent: true as const };
}
