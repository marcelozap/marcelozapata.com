import { site } from "@/content/site";
import SessionPlayer from "@/components/SessionPlayer";

const GOLD =
  "https://tmpfiles.org/dl/1790050726.d5fd26fee3d4da3b/wnwl8EVlogkT/gold-in-the-dark.mp3";

export default function MusicSection() {
  return <section className="panel music" id="music" aria-labelledby="music-title"><div className="container">
    <div className="section-heading"><p className="eyebrow">01 / Songs & sessions</p><span className="section-aside">Guitar. Voice. Everything after.</span></div>
    <div className="music-grid"><SessionPlayer /><div className="music-copy">
      <h2 id="music-title">It starts<br />with a feeling.</h2>
      <p>I sing and write in English and Spanish, on guitar and piano. As I build the production, I want to keep what made the first take feel honest.</p>
      <p className="music-note">Guitars up front. Drums underneath.<br />Room for what I need to say.</p>
      <div className="song-listen">
        <p className="eyebrow">The track</p>
        <h3>Gold in the Dark</h3>
        <p>A night. Guitar and piano. The rest only if it stays honest.</p>
        <audio className="track-player" controls preload="metadata" src={GOLD}>
          <a href={GOLD}>Gold in the Dark</a>
        </audio>
        <div className="music-socials">
          <a className="text-link" href={site.socials.spotify} target="_blank" rel="noreferrer">Spotify <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div></div>
  </div></section>;
}
