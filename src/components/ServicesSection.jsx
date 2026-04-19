import img1 from "../assets/part2.jpeg";
import img2 from "../assets/hero.jpeg";

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

          {/* CARD 1 - text bottom, img top */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col">
            <img src={img1} className="w-full h-[260px] object-cover rounded-xl flex-shrink-0" />
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Interior Designing</h3>
              <p className="text-sm text-gray-900 mt-3">
                We create interiors that balance beauty and purpose. Each space reflects your lifestyle with a refined, timeless feel.
              </p>
            </div>
          </div>

          {/* CARD 2 - text top, img bottom */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Exterior Designing</h3>
              <p className="text-sm text-gray-900 mt-3">
                Exteriors shaped for strong presence and harmony. We focus on proportion, materials, and clean aesthetics.
              </p>
            </div>
            <img src={img2} className="w-full h-[260px] object-cover rounded-xl flex-shrink-0" />
          </div>

          {/* CARD 3 - text bottom, img top */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col">
            <img src={img1} className="w-full h-[260px] object-cover rounded-xl flex-shrink-0" />
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Interior Layouts</h3>
              <p className="text-sm text-gray-900 mt-3">
                Layouts that enhance flow, function, and comfort. Designed around how you live and move.
              </p>
            </div>
          </div>

          {/* CARD 4 - text top, img bottom */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Arch Viz Animation</h3>
              <p className="text-sm text-gray-900 mt-3">
                Realistic visuals that bring your space to life early, helping you make clear, confident decisions.
              </p>
            </div>
            <img src={img2} className="w-full h-[260px] object-cover rounded-xl flex-shrink-0" />
          </div>

          {/* CARD 5 - text bottom, img top */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col">
            <img src={img1} className="w-full h-[260px] object-cover rounded-xl flex-shrink-0" />
            <div className="mt-4">
              <h3 className="text-4xl font-semibold italic font-serif text-base leading-tight">Material & Finish Selection</h3>
              <p className="text-sm text-gray-900 mt-3">
                Curated materials that elevate quality and longevity. Every finish feels cohesive and considered.
              </p>
            </div>
          </div>

          {/* CARD 6 - text bottom, img top */}
          <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm w-full flex flex-col">
            <img src={img2} className="w-full h-[260px] object-cover rounded-xl flex-shrink-0" />
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
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
            Book a Consultation
          </button>
          <button className="border border-black px-6 py-3 rounded-full text-sm">
            View Projects
          </button>
        </div>

      </div>
    </div>
  );
}

export default ServicesSection;