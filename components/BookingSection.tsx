import { site } from "@/content/site";
export default function BookingSection() {
  return (
    <section className="panel dark booking" id="hello" aria-labelledby="hello-title">
      <div className="container section-grid">
        <div><p className="label light">Last screen</p><h2 id="hello-title">Hello</h2></div>
        <div>
          <p className="contact-copy">Songs, a collab, a note.</p>
          <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  );
}
