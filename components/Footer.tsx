import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>{`Copyright © ${new Date().getFullYear()} ${site.name} - All Rights Reserved.`}</span>
        <span>{site.city}</span>
      </div>
    </footer>
  );
}
