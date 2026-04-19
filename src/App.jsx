import Hero from "./components/hero.jsx";
import AboutSection from "./components/AboutSection";
import LogoStrip from "./components/LogoStrip";
import WhySection from "./components/WhySection";
import QualitySection from "./components/QualitySection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <AboutSection />
      <WhySection />
      <QualitySection />
      <ServicesSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}

export default App;