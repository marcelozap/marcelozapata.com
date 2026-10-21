import { resume } from "@/content/resume";
import styles from "./Resume.module.css";

export const metadata = {
  title: "Resume — Marcelo Zapata",
  description: resume.headline,
};

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <div className={styles.topbar}>
        <a href="/">← Marcelo Zapata</a>
        <a href={`mailto:${resume.contact.email}`}>Contact</a>
      </div>

      <header className={styles.header}>
        <p className={styles.kicker}>Resume</p>
        <h1>{resume.name}</h1>
        <p className={styles.headline}>{resume.headline}</p>
        <div className={styles.contact}>
          <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={resume.contact.website}>marcelozapata.com</a>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </section>

      <section className={styles.section}>
        <h2>Experience</h2>
        {resume.experience.map((item) => (
          <article className={styles.entry} key={`${item.role}-${item.dates}`}>
            <div className={styles.entryHeader}>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span>{item.dates}</span>
            </div>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Technical focus</h2>
        <p>{resume.skills.join(" · ")}</p>
      </section>

      <section className={styles.section}>
        <h2>Selected project</h2>
        {resume.projects.map((project) => (
          <article className={styles.project} key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Education</h2>
        <p>{resume.education}</p>
      </section>
    </main>
  );
}
