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

          {/* CARD 1 (WITH OVERLAY) */}
          <div className="relative rounded-2xl overflow-hidden">
            <img src={img1} className="w-full h-[260px] object-cover" />

            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <div className="text-white">
                <p className="text-sm italic">Master Bedroom Retreat</p>
                <p className="text-xs opacity-80">Residential · DHA Lahore</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <img src={img2} className="w-full h-[260px] object-cover rounded-2xl" />

          {/* CARD 3 */}
          <img src={img3} className="w-full h-[260px] object-cover rounded-2xl" />

          {/* ROW 2 */}
          <img src={img4} className="w-full h-[260px] object-cover rounded-2xl" />
          <img src={img5} className="w-full h-[260px] object-cover rounded-2xl" />
          <img src={img6} className="w-full h-[260px] object-cover rounded-2xl" />

        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-12">

          <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
            Load more...
          </button>

          <button className="border border-gray-400 px-6 py-2 rounded-full text-sm">
            Book a Consultation
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProjectsGrid;