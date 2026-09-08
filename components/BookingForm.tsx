"use client";

import { useState } from "react";
import { eventTypes, site } from "@/content/site";

type Status = { kind: "idle" | "sending" | "ok" | "err"; msg?: string };

export default function BookingForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data.company) return; // honeypot
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.delivered) {
        form.reset();
        setStatus({ kind: "ok", msg: "Got it. I'll reply within a day." });
        return;
      }

      // Email delivery not configured yet (or failed): hand off to the visitor's mail app.
      const subject = encodeURIComponent(`Booking request — ${data.eventType || "event"} · ${data.date || "date TBD"}`);
      const body = encodeURIComponent(
        [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : null,
          `Event: ${data.eventType}`,
          `Date: ${data.date || "TBD"}`,
          `Venue / location: ${data.venue || "—"}`,
          data.guests ? `Guests: ${data.guests}` : null,
          "",
          data.message || "",
        ]
          .filter((l) => l !== null)
          .join("\n")
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus({
        kind: "ok",
        msg: `Opening your email app with the request filled in. If nothing opened, write to ${site.email}.`,
      });
    } catch {
      setStatus({ kind: "err", msg: `Something went wrong. Email me directly at ${site.email}.` });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="eventType">Type of event</label>
        <select id="eventType" name="eventType" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" />
      </div>
      <div className="field">
        <label htmlFor="guests">Guests (approx.)</label>
        <input id="guests" name="guests" type="number" min={1} inputMode="numeric" />
      </div>
      <div className="field full">
        <label htmlFor="venue">Venue or location</label>
        <input id="venue" name="venue" placeholder="Restaurant name, hotel, or neighborhood" />
      </div>
      <div className="field full">
        <label htmlFor="message">About the night</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hours, mood, special songs, whether there's a piano on site — anything that helps."
        />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="full">
        <button className="btn" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send booking request"}
        </button>
      </div>
      <p className={`form-status ${status.kind === "ok" ? "ok" : status.kind === "err" ? "err" : ""}`} role="status">
        {status.msg}
      </p>
    </form>
  );
}
