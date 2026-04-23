import heroGrid from "../../assets/hero-grid.png"; // combined image

function ProjectsHero() {
  return (
    <div className="w-full bg-white">

      {/* 1440 CONTAINER */}
      <div className="max-w-[1440px] mx-auto pl-6 md:pl-16 pr-0 py-16 flex flex-col md:flex-row items-start gap-12">

        {/* LEFT CONTENT */}
        <div className="md:w-[48%]">

          <h1 className="text-[64px] md:text-[72px] italic font-[500] leading-[1.05] font-['Cormorant_Garamond']">
            Where Ideas <br /> Become Spaces
          </h1>

          <p className="text-gray-600 text-sm mt-6 leading-relaxed max-w-md">
            A curated collection of our work where imagination is translated into built form. Each project begins with a vision and is refined through thoughtful design, precise planning, and attention to every detail.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition">
            Book a Consultation
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-[52%] relative">

            {/* GRADIENT FADE */}
            <div className="absolute left-0 top-0 h-full w-[42%] bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent z-10 pointer-events-none"></div>

            <img
              src={heroGrid}
              alt="projects"
              className="w-full h-[440px] md:h-[540px] object-cover"
            />

        </div>

      </div>
    </div>
  );
}

export default ProjectsHero;