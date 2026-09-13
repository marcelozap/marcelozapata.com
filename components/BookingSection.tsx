import BookingForm from "@/components/BookingForm";
import { site } from "@/content/site";
export default function BookingSection() {
  return (
    <section className="panel dark booking" id="book" aria-labelledby="booking-title">
      <div className="container section-grid">
        <div><p className="label light">Bookings & contact</p><h2 id="booking-title">Get in touch.</h2></div>
        <div>
          <p className="contact-copy">For live music bookings, collaborations, or a hello, you can reach me here.</p>
          <a className="contact-email" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
          <p className="booking-hint">For a booking, include the date, location, and a little about your event.</p>
          <details className="booking-details">
            <summary>Send a booking request <span aria-hidden="true">+</span></summary>
            <BookingForm />
          </details>
          <div className="contact-socials" id="contact">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
}
