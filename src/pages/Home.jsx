import Hero from "../components/sections/hero";
import AboutSection from "../components/sections/AboutSection";
import LogoStrip from "../components/sections/LogoStrip";
import WhySection from "../components/sections/WhySection";
import QualitySection from "../components/sections/QualitySection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import CTA from "../components/ui/CTA";
import Footer from "../components/ui/Footer";

function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <AboutSection />
      <WhySection />
      <QualitySection />
      <ServicesSection />
      <TestimonialSection />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;