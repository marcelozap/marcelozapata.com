"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import TrackPlayer from "@/components/TrackPlayer";
import SessionPlayer from "@/components/SessionPlayer";
import Footer from "@/components/Footer";
import { copy, type Lang } from "@/content/copy";
import { listen } from "@/content/home";
import { site } from "@/content/site";

export default function HomeClient() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <>
      <a className="skip-link" href="#listen">Skip to Gold in the Dark</a>
      <Header listen={t.listen} music={t.music} hello={t.hello} />
      <main>
        <section className="hero" id="top" aria-labelledby="intro-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-topline" role="group" aria-label="Language">
              <span className="lang-toggle">
                <button type="button" className={lang === "en" ? "is-on" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
                <span aria-hidden="true"> / </span>
                <button type="button" className={lang === "es" ? "is-on" : ""} aria-pressed={lang === "es"} onClick={() => setLang("es")}>ES</button>
              </span>
            </div>
            <div className="hero-art" aria-hidden="true">
              <Image src="/images/malosound-orbit.webp" alt="" width={1672} height={941} priority sizes="(max-width: 700px) 110vw, 1000px" />
            </div>
            <h1 className="hero-title" id="intro-title" aria-label="Marcelo Zapata"><span>marcelo</span><span>zapata</span></h1>
            <div className="hero-intro">
              <p>{t.body}</p>
              <p>{t.after}</p>
            </div>
            <div className="listen-row" id="listen">
              <p className="eyebrow">{t.listen}</p>
              <TrackPlayer src={listen.audio} title={t.track} note={t.note} />
              <div className="listen-links">
                <a href={site.socials.spotify} target="_blank" rel="noreferrer">Spotify</a>
                <span aria-hidden="true">·</span>
                <a href={site.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>
                <span aria-hidden="true">·</span>
                <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </section>

        <section className="panel music" id="music" aria-labelledby="music-title"><div className="container">
          <div className="section-heading"><p className="eyebrow">{t.songs}</p><span className="section-aside">{t.aside}</span></div>
          <div className="music-grid"><div>
            <SessionPlayer />
            <a className="song-listen" href="#listen">
              <h3>{t.track}</h3>
              <p>{t.note}</p>
            </a>
          </div><div className="music-copy">
            <h2 id="music-title">{t.feelingTitle}<br />{t.feelingBreak}</h2>
            <p>{t.feeling}</p>
            <p className="music-note">{t.mixA}<br />{t.mixB}</p>
          </div></div>
        </div></section>

        <section className="panel elsewhere" id="malosound" aria-labelledby="elsewhere-title"><div className="container">
          <div className="workbench">
            <p className="eyebrow">{t.workbenchName}</p>
            <h2 id="elsewhere-title">{t.workbench}</h2>
            <a className="text-link" href="https://malosound.ai/" target="_blank" rel="noreferrer">MaloSound <span aria-hidden="true">↗</span></a>
          </div>
        </div></section>

        <section className="about" id="about" aria-label="About Marcelo"><div className="container about-inner">
          <p className="eyebrow">{t.about}</p><div><p className="familiar-name">{t.familiar}</p><p className="about-copy">{t.aboutBody}</p></div>
        </div></section>

        <section className="panel dark booking" id="hello" aria-labelledby="hello-title">
          <div className="container section-grid">
            <div><p className="label light">{t.last}</p><h2 id="hello-title">{t.hello}</h2></div>
            <div>
              <p className="contact-copy">{t.helloBody}</p>
              <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
