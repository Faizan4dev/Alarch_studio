import img1 from "../../assets/hero.jpeg";
import img2 from "../../assets/part2.jpeg";
import img3 from "../../assets/hero.jpeg";
import img4 from "../../assets/part2.jpeg";
import img5 from "../../assets/hero.jpeg";
import img6 from "../../assets/part2.jpeg";

function ProjectsGrid() {
  return (
    <div className="w-full bg-[#f5f5f5] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-[40px] md:text-[48px] italic font-['Cormorant_Garamond']">
            The Quality We Provide
          </h2>

          <p className="text-black text-sm mt-3">
            You deserve a home as beautiful as you vision it. Let's make it happen together.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD */}
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group">

              {/* IMAGE */}
              <img
                src={img}
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY (only visible on hover) */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">

                <div className="text-white">
                  <p className="text-sm italic">Project Title</p>
                  <p className="text-xs opacity-80">Category · Location</p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-12">

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