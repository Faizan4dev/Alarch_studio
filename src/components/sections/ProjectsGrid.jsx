import img1 from "../../assets/hero.jpeg";
import img2 from "../../assets/part2.jpeg";
import img3 from "../../assets/hero.jpeg";
import img4 from "../../assets/part2.jpeg";
import img5 from "../../assets/hero.jpeg";
import img6 from "../../assets/part2.jpeg";

const projects = [img1, img2, img3, img4, img5, img6];

function ProjectsGrid() {
  return (
    <div className="w-full bg-[#f5f5f5] py-16 md:py-20 xl:py-24">

      <div className="container-main">

        {/* 🔥 TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">

          <h2 className="heading-section italic">
            The Quality We Provide
          </h2>

          <p className="text-body mt-3 text-gray-700">
            You deserve a home as beautiful as you vision it. Let's make it happen together.
          </p>

        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {projects.map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group"
            >

              {/* IMAGE */}
              <div className="h-[220px] sm:h-[240px] md:h-[260px] xl:h-[300px]">
                <img
                  src={img}
                  alt="project"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* 🔥 OVERLAY (always visible slightly, stronger on hover) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300 flex items-end p-4">

                <div className="text-white">

                  <p className="text-sm md:text-base font-['Cormorant_Garamond'] italic">
                    Project Title
                  </p>

                  <p className="text-xs text-gray-200">
                    Category · Location
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 md:mt-12">

          <button className="btn-primary">
            Load more...
          </button>

          <button className="btn-outline">
            Book a Consultation
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProjectsGrid;