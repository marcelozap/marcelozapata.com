import { site } from "@/content/site";
export default function BookingSection() {
  return (
    <section className="panel dark booking" id="book" aria-labelledby="booking-title">
      <div className="container section-grid">
        <div><p className="label light">Contact</p><h2 id="booking-title">Get in touch.</h2></div>
        <div>
          <p className="contact-copy">Songs, collaborations, a hello — write me here. Occasional sessions, not a booking desk.</p>
          <a className="contact-email" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
          <div className="contact-socials" id="contact">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.socials.spotify} target="_blank" rel="noreferrer">Spotify</a>
          </div>
        </div>
      </div>
    </section>
  );
}
