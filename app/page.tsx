import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import OfferSection from "./components/OfferSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <Navbar />
      <main id="home" className="mx-auto max-w-7xl space-y-10 px-6 py-10 md:px-8 lg:py-16">
        <HeroSection />
        <MenuSection />
        <OfferSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
