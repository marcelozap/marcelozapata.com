import Image from "next/image";
import { site } from "@/content/site";
import { introduction, portrait } from "@/content/home";
export default function HeroSection() {
  return (
    <section className="panel hero" id="top" aria-labelledby="intro-title">
      <div className={`container hero-grid${portrait ? "" : " without-portrait"}`}>
        <div className="hero-copy">
          <h1 className="hero-title" id="intro-title">{site.name}</h1>
          <p className="hero-sub">{introduction.familiarName}</p>
          <p className="hero-body">{introduction.body}</p>
          <div className="button-group hero-actions">
            <a className="button" href="#music"><span aria-hidden="true">▷</span> Listen</a>
            <a className="text-link" href="#about">My story <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        {portrait && <figure className="hero-portrait">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 680px) 90vw, (max-width: 1200px) 40vw, 470px"
          />
          {portrait.caption && <figcaption>{portrait.caption}</figcaption>}
        </figure>}
      </div>
    </section>
  );
}
