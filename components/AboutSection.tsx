import { story } from "@/content/home";
export default function AboutSection() {
  return (
    <section className="panel story" id="about" aria-labelledby="story-title">
      <div className="container section-grid">
        <div><p className="label">A little about me</p><h2 id="story-title">My story</h2></div>
        <div className="story-copy">{story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </section>
  );
}
