import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>{`© ${new Date().getFullYear()} ${site.name}`}</span>
        <span>{site.city}</span>
      </div>
    </footer>
  );
}
