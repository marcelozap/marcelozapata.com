import Image from "next/image";
import { introduction } from "@/content/home";

export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="intro-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-topline"><span className="eyebrow">Music is where I begin.</span><span className="hero-language">EN / ES</span></div>
        <div className="hero-art" aria-hidden="true">
          <Image src="/images/malosound-orbit.webp" alt="" width={1672} height={941} priority sizes="(max-width: 700px) 110vw, 1000px" />
        </div>
        <h1 className="hero-title" id="intro-title" aria-label="Marcelo Zapata"><span>marcelo</span><span>zapata<span className="title-period">.</span></span></h1>
        <div className="hero-intro">
          <p>{introduction.body}</p>
          <div className="hero-actions"><a className="button" href="#music"><span className="play-icon" aria-hidden="true">▶</span> Start with the music</a></div>
        </div>
        <div className="world-index" aria-label="Explore">
          <a href="#music"><span className="index-number">01</span><span>Songs & sessions</span><span aria-hidden="true">↓</span></a>
          <a href="#about"><span className="index-number">02</span><span>About</span><span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
