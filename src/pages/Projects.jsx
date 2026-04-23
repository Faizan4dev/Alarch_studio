import Navbar from "../components/ui/Navbar";
import ProjectsHero from "../components/sections/ProjectsHero";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import ProjectsTestimonial from "../components/sections/ProjectsTestimonals";
import CTA from "../components/ui/CTA";
import Footer from "../components/ui/Footer";

function Projects() {
  return (
    <div>

      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsTestimonial />
      <CTA />
      <Footer />

    </div>
  );
}

export default Projects;