import heroGrid from "../../assets/hero-grid.png";

function ProjectsHero() {
  return (
    <div className="w-full bg-white">

      {/* 🔥 CONTAINER */}
      <div className="container-main py-14 md:py-16 xl:py-20 flex flex-col md:flex-row items-start gap-10 xl:gap-14">

        {/* 🔥 LEFT CONTENT */}
        <div className="w-full md:w-[48%]">

          <h1 className="heading-hero max-w-[620px]">
            Where Ideas <br /> Become Spaces
          </h1>

          <p className="text-body mt-6 max-w-md">
            A curated collection of our work where imagination is translated into built form. Each project begins with a vision and is refined through thoughtful design, precise planning, and attention to every detail.
          </p>

          <button className="btn-primary mt-6">
            Book a Consultation
          </button>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="w-full md:w-[52%] relative group overflow-hidden rounded-2xl">

          {/* 🔥 LIGHT GRADIENT (fixed) */}
          <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

          <img
            src={heroGrid}
            alt="projects"
            className="w-full h-[260px] sm:h-[320px] md:h-[440px] xl:h-[540px] object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          />

        </div>

      </div>

    </div>
  );
}

export default ProjectsHero;