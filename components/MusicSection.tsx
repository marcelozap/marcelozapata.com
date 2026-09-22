import SessionPlayer from "@/components/SessionPlayer";
import { listen } from "@/content/home";

export default function MusicSection() {
  return <section className="panel music" id="music" aria-labelledby="music-title"><div className="container">
    <div className="section-heading"><p className="eyebrow">01 / Songs & sessions</p><span className="section-aside">Guitar. Voice. Everything after.</span></div>
    <div className="music-grid"><div>
      <SessionPlayer />
      <a className="song-listen" href="#listen">
        <h3>{listen.title}</h3>
        <p>{listen.note}</p>
      </a>
    </div><div className="music-copy">
      <h2 id="music-title">It starts<br />with a feeling.</h2>
      <p>I sing and write in English and Spanish, on guitar and piano. As I build the production, I want to keep what made the first take feel honest.</p>
      <p className="music-note">Guitars up front. Drums underneath.<br />Room for what I need to say.</p>
    </div></div>
  </div></section>;
}
