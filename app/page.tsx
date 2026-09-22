import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShowsSection from "@/components/ShowsSection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import ElsewhereSection from "@/components/ElsewhereSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
export const revalidate = 3600;
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <Header />
      <main>
        <HeroSection /><MusicSection /><AboutSection /><ElsewhereSection /><ShowsSection /><BookingSection />
      </main>
      <Footer />
    </>
  );
}
