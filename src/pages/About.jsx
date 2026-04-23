import Navbar from "../components/ui/Navbar";
import AboutHero from "../components/sections/AboutHero";
import FounderSection from "../components/sections/FounderSection";
import TeamSection from "../components/sections/TeamSection";

// ✅ Reused sections
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";

import CTA from "../components/ui/CTA";
import Footer from "../components/ui/Footer";

function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <FounderSection />

      {/* 🔁 REUSED (instead of AboutIntro + AboutStats) */}
      <AboutSection />
      <ServicesSection />


      <TeamSection />
      <CTA />
      <Footer />
    </>
  );
}

export default About;