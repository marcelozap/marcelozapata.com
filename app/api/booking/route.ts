import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  date?: string;
  guests?: string;
  venue?: string;
  message?: string;
  company?: string; // honeypot
};

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, "\n").trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  if (body.company) return NextResponse.json({ delivered: true }); // bot; pretend success

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  const fields: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", clean(body.phone, 60)],
    ["Event", clean(body.eventType, 80)],
    ["Date", clean(body.date, 40)],
    ["Guests", clean(body.guests, 10)],
    ["Venue / location", clean(body.venue, 200)],
  ];
  const message = clean(body.message);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet — tell the client to use the mailto fallback.
    return NextResponse.json({ delivered: false, reason: "email_not_configured" });
  }

  const to = process.env.BOOKING_TO_EMAIL || site.email;
  const from = process.env.BOOKING_FROM_EMAIL || "onboarding@resend.dev";
  const subject = `Booking request — ${fields[3][1] || "event"} · ${fields[4][1] || "date TBD"} — ${name}`;
  const text =
    fields
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n") + (message ? `\n\n${message}` : "");

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${site.name} Bookings <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
    });
    if (error) {
      console.error("resend error", error);
      return NextResponse.json({ delivered: false, reason: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ delivered: true });
  } catch (err) {
    console.error("booking send failed", err);
    return NextResponse.json({ delivered: false, reason: "send_failed" }, { status: 502 });
  }
}
