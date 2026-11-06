import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { notifyAssessmentRequest } from "@/lib/notify";

type AssessmentBody = {
  name?: string;
  email?: string;
  phone?: string;
  neighborhood?: string;
  squareFootage?: string;
  bedrooms?: string;
  contactPreference?: "text" | "call";
  notes?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssessmentBody;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const phone = body.phone?.trim() ?? "";
    const neighborhood = body.neighborhood?.trim() ?? "";
    const squareFootage = body.squareFootage?.trim() ?? "";
    const bedrooms = body.bedrooms?.trim() ?? "";
    const contactPreference =
      body.contactPreference === "call" ? "call" : "text";
    const notes = body.notes?.trim() ?? "";

    if (!name || !email || !phone || !neighborhood || !squareFootage) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email." },
        { status: 400 },
      );
    }

    const inquiry = {
      name,
      email,
      phone,
      neighborhood,
      squareFootage,
      bedrooms,
      contactPreference,
      notes,
    };

    await notifyAssessmentRequest(inquiry);

    if (!process.env.STRIPE_SECRET_KEY) {
      console.info("[assessment] Stripe not configured; inquiry accepted", inquiry);

      return NextResponse.json({
        ok: true,
        mode: "local",
        message:
          "Assessment received. We’ll reach out shortly by your preferred contact method.",
      });
    }

    const stripe = getStripe();

    const existing = await stripe.customers.list({ email, limit: 1 });
    const customer =
      existing.data[0] ??
      (await stripe.customers.create({
        name,
        email,
        phone,
        metadata: {
          source: "serahome_web_assessment",
          neighborhood,
          square_footage: squareFootage,
          bedrooms,
          contact_preference: contactPreference,
          notes: notes.slice(0, 450),
          status: "assessment_requested",
        },
      }));

    if (existing.data[0]) {
      await stripe.customers.update(customer.id, {
        name,
        phone,
        metadata: {
          ...customer.metadata,
          neighborhood,
          square_footage: squareFootage,
          bedrooms,
          contact_preference: contactPreference,
          notes: notes.slice(0, 450),
          status: "assessment_requested",
          last_assessment_at: new Date().toISOString(),
        },
      });
    }

    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      automatic_payment_methods: { enabled: true },
      usage: "off_session",
      metadata: {
        purpose: "card_on_file_after_consult",
        neighborhood,
        square_footage: squareFootage,
      },
    });

    return NextResponse.json({
      ok: true,
      mode: "stripe",
      customerId: customer.id,
      setupIntentClientSecret: setupIntent.client_secret,
      message:
        "Assessment received. We’ll text or call shortly to tailor your quote, then send a secure Stripe link to save a card and hold your date.",
    });
  } catch (error) {
    console.error("[assessment]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or text us directly." },
      { status: 500 },
    );
  }
}
