import { site, whatToExpect, repertoire, schedule } from "@/content/site";
import BookingForm from "@/components/BookingForm";

function fmtDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export default function Home() {
  const upcoming = schedule
    .filter((s) => new Date(s.date + "T23:59:59") >= new Date())
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <header className="header">
        <div className="wrap">
          <a className="brand" href="#top">{site.name}</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#repertoire">Repertoire</a>
            {upcoming.length > 0 && <a href="#schedule">Schedule</a>}
            <a className="cta" href="#book">Book a night</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">{site.tagline} · {site.city}</p>
            <h1>
              Music that makes <em>the room</em> feel right.
            </h1>
            <p className="lede">
              Soft piano and a warm, unhurried voice for restaurants, hotels and private dinners.
              Present enough to notice. Never in the way of the conversation.
            </p>
            <div className="actions">
              <a className="btn" href="#book">Book a night</a>
              <a className="btn ghost" href={site.socials.instagram} target="_blank" rel="noreferrer">
                Watch on Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap about">
            <div className="portrait">
              {/* Drop a photo at public/marcelo.jpg and swap this block for <img src="/marcelo.jpg" alt="Marcelo Zapata at the piano" /> */}
              <div className="placeholder">photo coming soon</div>
            </div>
            <div className="copy">
              <p>
                <strong>I&rsquo;m Marcelo</strong> — a pianist and singer based in Miami. I play the kind of
                sets you don&rsquo;t have to listen to but end up listening to anyway: standards, boleros,
                soul, a few things people didn&rsquo;t expect to hear on a piano.
              </p>
              <p>
                Restaurants and hotels book me for weekly residencies. Hosts book me for the dinner
                where they want the music to be a detail people remember, not the loudest thing in the
                room.
              </p>
              <p>
                I sing in English and Spanish, take requests, and know how to read a room that is
                still on its first course.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="expect">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">What to expect</span>
              <h2>Simple for you. Right for the room.</h2>
            </div>
            <div className="cards">
              {whatToExpect.map((c) => (
                <article className="card" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="repertoire">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Repertoire</span>
              <h2>A few from the book</h2>
              <p>Tell me the mood of the night and I&rsquo;ll build the set around it.</p>
            </div>
            <div className="rep">
              {repertoire.map((g) => (
                <div key={g.heading}>
                  <h3>{g.heading}</h3>
                  <ul>
                    {g.songs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="rep-note">Have a song that matters to the night? Send it with the booking — I&rsquo;ll learn it.</p>
          </div>
        </section>

        {upcoming.length > 0 && (
          <section className="section" id="schedule">
            <div className="wrap">
              <div className="section-head">
                <span className="kicker">Schedule</span>
                <h2>Where I&rsquo;m playing</h2>
                <p>Residencies are streamed live on TikTok when the venue allows it. Come by, or watch from wherever you are.</p>
              </div>
              <div className="schedule">
                {upcoming.map((s) => (
                  <div className="row" key={s.date + s.venue}>
                    <div className="date">{fmtDate(s.date)}</div>
                    <div>
                      <div className="venue">
                        {s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.venue}</a> : s.venue}
                      </div>
                      <div className="meta">{s.area} · {s.time}</div>
                    </div>
                    {s.note && <div className="tag">{s.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section book" id="book">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Booking</span>
              <h2>Book a night</h2>
              <p>Tell me about the room and the date. I reply within a day with availability and a quote.</p>
            </div>
            <div className="book-grid">
              <div className="book-aside">
                <p>
                  Residencies, one-off dinners, weddings, corporate evenings. Two-hour minimum. Miami and
                  surrounding areas; further with travel.
                </p>
                <p>
                  Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>&copy; {new Date().getFullYear()} {site.name} · {site.city}</span>
          <div className="links">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
