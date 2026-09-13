import { schedule, site } from "@/content/site";

const TIMEZONE = "America/New_York"; // Miami — used to decide when a show has passed

function fmtDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

// Both sides below go through the same naive (no-timezone) Date parsing, so the
// comparison reflects Miami wall-clock time regardless of the server's own timezone.
function miamiNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: TIMEZONE }));
}

export default function ShowsSection() {
  const now = miamiNow();
  const upcoming = schedule
    .filter((s) => new Date(s.date + "T23:59:59") >= now)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (upcoming.length === 0) return null;

  return (
    <section className="panel" id="shows">
      <div className="container">
        <p className="label">live shows</p>
        <h2>Upcoming performances</h2>
        {upcoming.length > 0 ? (
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
        ) : (
          <p className="lede">
            No public dates announced yet — follow on{" "}
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>{" "}
            or{" "}
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>{" "}
            for the next one.
          </p>
        )}
      </div>
    </section>
  );
}
