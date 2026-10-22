"use client";
import { useState } from "react";
import TrackPlayer from "@/components/TrackPlayer";
import { listen } from "@/content/home";
import { site } from "@/content/site";
import { resume } from "@/content/resume";
import styles from "./MusicHome.module.css";

export default function HomeClient() {
  const [lang,setLang] = useState<'en'|'es'>('en');
  return <div className={styles.page}>
    <a className="skip-link" href="#listen">{lang === 'en' ? 'Skip to music' : 'Ir a la música'}</a>
    <header className={styles.header}>
      <a href="#top">Marcelo Zapata</a>
      <nav className={styles.workLink} aria-label={lang === 'en' ? 'Main navigation' : 'Navegación principal'}>
        <a href="#listen">{lang === 'en' ? 'Music' : 'Música'}</a>
        <a href="/resume">Resume</a>
        <a href="#hello">{lang === 'en' ? 'Contact' : 'Contacto'}</a>
      </nav>
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
        <a href={site.socials.youtube}>YouTube ↗</a>
        <a href={site.socials.instagram}>Instagram ↗</a>
        <a href={site.socials.tiktok}>TikTok ↗</a>
      </nav>
      <section id="work" className={styles.work} aria-labelledby="work-title">
        <p className={styles.workLabel}>{lang === 'en' ? 'Work' : 'Trabajo'}</p>
        <h2 id="work-title">{lang === 'en' ? 'I build systems that make complex work easier to trust.' : 'Construyo sistemas que hacen más confiable el trabajo complejo.'}</h2>
        <p>{lang === 'en' ? "I'm a software engineer and Florida State University graduate with 4+ years working with AI. I build applications, integrations, and automation—from enterprise warehouse systems to Vela Tennis, my upcoming tennis app." : 'Soy ingeniero de software y graduado de Florida State University, con más de 4 años trabajando con IA. Construyo aplicaciones, integraciones y automatización, desde sistemas empresariales de almacén hasta Vela Tennis, mi próxima aplicación de tenis.'}</p>
        <div className={styles.workMeta}>
          <span>{resume.skills.slice(0, 6).join(' · ')}</span>
          <a href="/resume">{lang === 'en' ? 'Read the resume ↗' : 'Ver el resume ↗'}</a>
        </div>
      </section>
    </main>
    <footer className={styles.footer} id="hello">
      <a href={`mailto:${site.email}`}>{lang==='en'?'Get in touch':'Contactar'} ↗</a>
      <span>© {new Date().getFullYear()} Marcelo Zapata</span>
    </footer>
  </div>;
}
