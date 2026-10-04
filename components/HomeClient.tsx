"use client";
import { useState } from "react";
import TrackPlayer from "@/components/TrackPlayer";
import { listen } from "@/content/home";
import { site } from "@/content/site";
import styles from "./MusicHome.module.css";

export default function HomeClient() {
  const [lang,setLang] = useState<'en'|'es'>('en');
  return <div className={styles.page}>
    <a className="skip-link" href="#listen">{lang === 'en' ? 'Skip to music' : 'Ir a la música'}</a>
    <header className={styles.header}>
      <a href="#top">Marcelo Zapata</a>
      <div className={styles.language} role="group" aria-label="Language">
        <button aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button>
        <span aria-hidden="true">/</span>
        <button aria-pressed={lang==='es'} onClick={()=>setLang('es')}>ES</button>
      </div>
    </header>
    <main id="top" className={styles.main}>
      <p className={styles.label}>{lang==='en' ? 'Music by Marcelo Zapata' : 'Música de Marcelo Zapata'}</p>
      <h1>Gold in<br /><em>the Dark.</em></h1>
      <section id="listen" className={styles.player} aria-label={lang==='en'?'Listen to Gold in the Dark':'Escuchar Gold in the Dark'}>
        <TrackPlayer src={listen.audio} title="Gold in the Dark" />
      </section>
      <nav className={styles.links} aria-label={lang==='en'?'Find my music':'Mi música'}>
        <a href={site.socials.spotify}>Spotify ↗</a>
        <a href={site.socials.youtube}>YouTube ↗</a>
        <a href={site.socials.instagram}>Instagram ↗</a>
      </nav>
    </main>
    <footer className={styles.footer} id="hello">
      <a href={`mailto:${site.email}`}>{lang==='en'?'Get in touch':'Contactar'} ↗</a>
      <span>© {new Date().getFullYear()} Marcelo Zapata</span>
    </footer>
  </div>;
}
