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
    <a className="skip-link" href="#resume-intro">{lang === 'en' ? 'Skip to resume' : 'Ir al resume'}</a>
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
      <section id="resume-intro" className={styles.resumeIntro} aria-labelledby="intro-title">
        <p className={styles.label}>{lang==='en' ? 'Senior Software Engineer' : 'Ingeniero de software sénior'}</p>
        <h1 id="intro-title">Marcelo<br /><em>Zapata.</em></h1>
        <p className={styles.resumeLead}>{lang === 'en' ? resume.summary : 'Ingeniero de software sénior con experiencia empresarial en datos, automatización, APIs y entrega asistida por IA.'}</p>
        <a className={styles.resumeLink} href="/resume">{lang === 'en' ? 'Read the resume ↗' : 'Ver el resume ↗'}</a>
      </section>
      <section id="work" className={styles.work} aria-labelledby="work-title">
        <p className={styles.workLabel}>{lang === 'en' ? '01 / Engineering' : '01 / Ingeniería'}</p>
        <h2 id="work-title">{lang === 'en' ? 'I build systems that make complex work easier to trust.' : 'Construyo sistemas que hacen más confiable el trabajo complejo.'}</h2>
        <p>{lang === 'en' ? "I'm a software engineer and Florida State University graduate with 4+ years working with AI. I build applications, integrations, and automation—from enterprise warehouse systems to Vela Tennis, my upcoming tennis app." : 'Soy ingeniero de software y graduado de Florida State University, con más de 4 años trabajando con IA. Construyo aplicaciones, integraciones y automatización, desde sistemas empresariales de almacén hasta Vela Tennis, mi próxima aplicación de tenis.'}</p>
        <div className={styles.workMeta}>
          <span>{resume.skills.slice(0, 6).join(' · ')}</span>
        </div>
      </section>
      <section id="listen" className={styles.musicSection} aria-labelledby="music-title">
        <p className={styles.workLabel}>{lang === 'en' ? '02 / Music' : '02 / Música'}</p>
        <h2 id="music-title">Gold in<br /><em>the Dark.</em></h2>
        <div className={styles.player} aria-label={lang==='en'?'Listen to Gold in the Dark':'Escuchar Gold in the Dark'}>
          <TrackPlayer src={listen.audio} title="Gold in the Dark" />
        </div>
        <nav className={styles.links} aria-label={lang==='en'?'Find my music':'Mi música'}>
          <a href={site.socials.youtube}>YouTube ↗</a>
          <a href={site.socials.instagram}>Instagram ↗</a>
          <a href={site.socials.tiktok}>TikTok ↗</a>
        </nav>
      </section>
    </main>
    <footer className={styles.footer} id="hello">
      <a href={`mailto:${site.email}`}>{lang==='en'?'Get in touch':'Contactar'} ↗</a>
      <span>© {new Date().getFullYear()} Marcelo Zapata</span>
    </footer>
  </div>;
}
