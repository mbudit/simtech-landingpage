import { useScrollSpy } from "./hooks/useScrollSpy";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TargetAudience from "./components/TargetAudience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import TeamSection from "./components/Teamsection";
import "./App.css";
import ClientMarquee from "./components/ClientMarquee";

export default function App() {
  const sectionIds = [
    "home",
    "about",
    "products",
    "services",
    "portfolio",
    "pricing",
    "faq",
    "contact"
  ];

  const active = useScrollSpy(sectionIds, 120);

  return (
    <div className="min-h-screen flex flex-col">
      <Header active={active} />

      <main className="flex-1">
        <Hero />
        <About />
        <ClientMarquee />
        <TargetAudience />
        <Products />
        <Services />
        <Portfolio />

        {/* Profil Tim SIMTECH */}
        <TeamSection />

        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}