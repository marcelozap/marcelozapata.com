import { site, schedule } from "@/content/site";
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
      <main>
        <header className="topbar">
          <div className="container">
            <a className="brand" href="#top">
              {site.name}
            </a>
            <nav className="nav">
              <a href="#top">Home</a>
              <a href="#live-shows">Shows</a>
              <a href={site.links.contact}>Contact</a>
              <a href="#social">Follow</a>
            </nav>
          </div>
        </header>

        <section className="panel" id="top">
          <div className="container">
            <h1 className="hero-title">{site.name}</h1>
            <p className="hero-sub">Solo piano, voice, and live atmosphere for intimate Miami venues.</p>
          </div>
        </section>

        <section className="panel" id="live-shows">
          <div className="container">
            <p className="label">live shows</p>
            <h2>Upcoming performances</h2>
            {upcoming.length > 0 ? (
              <a className="button" href="#schedule">
                Schedule
              </a>
            ) : (
              <p className="lede">No public dates announced yet — follow on Instagram or TikTok for the next one.</p>
            )}
          </div>
        </section>

        {site.links.music && (
          <section className="panel">
            <div className="container">
              <p className="label">music</p>
              <h2>Listen to the latest releases</h2>
              <a className="button" href={site.links.music} target="_blank" rel="noreferrer">
                Listen
              </a>
            </div>
          </section>
        )}

        {site.links.patreon && (
          <section className="panel">
            <div className="container">
              <p className="label">patreon</p>
              <h2>Unreleased originals, early access and more</h2>
              <a className="button" href={site.links.patreon} target="_blank" rel="noreferrer">
                Join on Patreon
              </a>
            </div>
          </section>
        )}

        {site.links.discord && (
          <section className="panel">
            <div className="container">
              <p className="label">discord</p>
              <h2>Join the community</h2>
              <a className="button" href={site.links.discord} target="_blank" rel="noreferrer">
                Discord
              </a>
            </div>
          </section>
        )}

        {(site.links.venmo || site.links.cashapp) && (
          <section className="panel" id="shop">
            <div className="container">
              <p className="label">tips</p>
              <h2>Support the music if you enjoy it</h2>
              <div className="button-group">
                {site.links.venmo && (
                  <a className="button ghost" href={site.links.venmo} target="_blank" rel="noreferrer">
                    Venmo
                  </a>
                )}
                {site.links.cashapp && (
                  <a className="button ghost" href={site.links.cashapp} target="_blank" rel="noreferrer">
                    Cash App
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="panel" id="social">
          <div className="container">
            <p className="label">follow</p>
            <h2>Live nights and new music, first on social</h2>
            <div className="button-group">
              <a className="button ghost" href={site.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="button ghost" href={site.socials.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
            </div>
          </div>
        </section>

        {upcoming.length > 0 && (
          <section className="panel" id="schedule">
            <div className="container">
              <p className="label">schedule</p>
              <h2>Upcoming performance dates</h2>
              <div className="schedule">
                {upcoming.map((s) => (
                  <div className="row" key={s.date + s.venue}>
                    <div className="date">{fmtDate(s.date)}</div>
                    <div>
                      <div className="venue">
                        {s.url ? (
                          <a href={s.url} target="_blank" rel="noreferrer">
                            {s.venue}
                          </a>
                        ) : (
                          s.venue
                        )}
                      </div>
                      <div className="meta">
                        {s.area} · {s.time}
                      </div>
                    </div>
                    {s.note && <div className="tag">{s.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="panel">
          <div className="container">
            <p className="label">stay updated</p>
            <h2>Sign up for announcements about shows, releases, and events.</h2>
            <form
              className="signup"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <label htmlFor="subscriber-email">Email</label>
              <div className="signup-row">
                <input
                  id="subscriber-email"
                  type="email"
                  name="Email"
                  placeholder="you@example.com"
                  required
                />
                <button className="button" type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="panel dark" id="book">
          <div className="container">
            <p className="label light">booking</p>
            <h2>Want a live pianist for your event?</h2>
            <p className="lede">
              Residency, private dinner, wedding, or corporate event. Two-hour minimum. I&apos;ll follow up within
              one business day.
            </p>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span>{`Copyright © ${new Date().getFullYear()} ${site.name} - All Rights Reserved.`}</span>
          <span>Miami, FL</span>
        </div>
      </footer>
    </>
  );
}
