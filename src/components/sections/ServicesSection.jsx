import Simg1 from "../../assets/Simg1.jpeg";
import Simg2 from "../../assets/Simg2.jpeg";
import Simg3 from "../../assets/Simg3.jpeg";
import Simg4 from "../../assets/Simg4.jpeg";
import Simg5 from "../../assets/Simg5.jpeg";
import Simg6 from "../../assets/Simg6.jpeg";

function ServicesSection() {
  return (
    <div className="bg-[#f9f9f9] py-24">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-[56px] italic font-serif">
            What We Do For You
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Dedicated to crafting personalised interiors that reflect your unique taste, lifestyle, and aspirations.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col card-hover">
            <div className="overflow-hidden rounded-xl">
              <img src={Simg1} className="w-full h-[260px] object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Interior Designing</h3>
              <p className="text-sm text-gray-900 mt-3">
                We create interiors that balance beauty and purpose. Each space reflects your lifestyle with a refined, timeless feel.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col card-hover">
            <div className="mb-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Exterior Designing</h3>
              <p className="text-sm text-gray-900 mt-3">
                Exteriors shaped for strong presence and harmony. We focus on proportion, materials, and clean aesthetics.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={Simg2} className="w-full h-[260px] object-cover transition duration-500 hover:scale-105" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col card-hover">
            <div className="overflow-hidden rounded-xl">
              <img src={Simg3} className="w-full h-[260px] object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Interior Layouts</h3>
              <p className="text-sm text-gray-900 mt-3">
                Layouts that enhance flow, function, and comfort. Designed around how you live and move.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col card-hover">
            <div className="mb-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Arch Viz Animation</h3>
              <p className="text-sm text-gray-900 mt-3">
                Realistic visuals that bring your space to life early, helping you make clear, confident decisions.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={Simg4} className="w-full h-[260px] object-cover transition duration-500 hover:scale-105" />
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col card-hover">
            <div className="overflow-hidden rounded-xl">
              <img src={Simg5} className="w-full h-[260px] object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Material & Finish Selection</h3>
              <p className="text-sm text-gray-900 mt-3">
                Curated materials that elevate quality and longevity. Every finish feels cohesive and considered.
              </p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col card-hover">
            <div className="overflow-hidden rounded-xl">
              <img src={Simg6} className="w-full h-[260px] object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Lighting Design</h3>
              <p className="text-sm text-gray-900 mt-3">
                Lighting that shapes mood and depth. Each space feels warm, balanced, and complete.
              </p>
            </div>
          </div>

        </div>

        {/* 🔥 BUTTONS */}
        <div className="mt-12 flex justify-center gap-4">

          {/* ✅ hover system */}
          <button className="btn-primary">
            Book a Consultation
          </button>

          <button className="btn-outline">
            View Projects
          </button>

        </div>

      </div>
    </div>
  );
}

export default ServicesSection;