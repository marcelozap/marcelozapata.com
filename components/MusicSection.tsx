import { site } from "@/content/site";
export default function MusicSection() {
  return (
    <section className="panel music" id="music" aria-labelledby="music-title">
      <div className="container">
        <div className="section-grid music-heading">
          <h2 id="music-title">Listen</h2>
          <p className="music-intro">My songs and performances,<br />on Instagram and TikTok.</p>
        </div>
        <div className="music-socials">
          <a className="text-link" href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={site.socials.tiktok} target="_blank" rel="noreferrer">TikTok <span aria-hidden="true">↗</span></a>
          {site.links.music && <a className="text-link" href={site.links.music} target="_blank" rel="noreferrer">More music <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </section>
  );
}
