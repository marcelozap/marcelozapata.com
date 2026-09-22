import { introduction } from "@/content/home";

export default function AboutSection() {
  return <section className="about" id="about" aria-label="About Marcelo"><div className="container about-inner">
    <p className="eyebrow">About</p><div><p className="familiar-name">{introduction.familiarName}</p><p className="about-copy">{introduction.about}</p></div>
  </div></section>;
}
