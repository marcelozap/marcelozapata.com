import { introduction } from "@/content/home";

export default function AboutSection() {
  return <section className="about" id="about" aria-label="About Marcelo"><div className="container about-inner">
    <p className="eyebrow">The person behind it</p><div><p className="familiar-name">{introduction.familiarName}</p><p className="about-copy">I love putting what I feel into music. I also trade, write code, and build things. This is where those parts of my life come together.</p></div>
  </div></section>;
}
