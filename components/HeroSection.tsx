import Image from "next/image";
import { introduction, listen } from "@/content/home";
import { site } from "@/content/site";

export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="intro-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-topline"><span className="hero-language">EN / ES</span></div>
        <div className="hero-art" aria-hidden="true">
          <Image src="/images/malosound-orbit.webp" alt="" width={1672} height={941} priority sizes="(max-width: 700px) 110vw, 1000px" />
        </div>
        <h1 className="hero-title" id="intro-title" aria-label="Marcelo Zapata"><span>marcelo</span><span>zapata</span></h1>
        <div className="hero-intro">
          <p>{introduction.body}</p>
          <p>{introduction.after}</p>
        </div>
        <div className="listen-row" id="listen">
          <p className="eyebrow">{listen.label}</p>
          <div className="listen-row-main">
            <h2>{listen.title}</h2>
            <audio className="track-player" controls preload="metadata" src={listen.audio}>
              <a href={listen.audio}>Play Gold in the Dark</a>
            </audio>
            <div className="listen-links">
              <a href={site.socials.spotify} target="_blank" rel="noreferrer">Spotify</a>
              <span aria-hidden="true">·</span>
              <a href={site.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>
              <span aria-hidden="true">·</span>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
