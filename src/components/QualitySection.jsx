import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import why from "../assets/why.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img1.jpeg";

function QualitySection() {
  return (
    <div className="bg-[#fff] px-6 py-24">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-[56px] italic font-serif">
            The Quality We Provide
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            You deserve a home as beautiful as you vision it. Let's make it happen together.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={img1} className="w-full h-[260px] md:h-[280px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-serif italic">Master Bedroom Retreat</h3>
              <p className="text-xs text-gray-200">Residential · DHA Lahore</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={img2} className="w-full h-[260px] md:h-[280px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-serif italic">Living Room Design</h3>
              <p className="text-xs text-gray-200">Residential · Gulberg Lahore</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={why} className="w-full h-[260px] md:h-[280px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-serif italic">Modern Kitchen Studio</h3>
              <p className="text-xs text-gray-200">Commercial · Karachi</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={img3} className="w-full h-[260px] md:h-[280px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-serif italic">Executive Office Suite</h3>
              <p className="text-xs text-gray-200">Commercial · Islamabad</p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={img4} className="w-full h-[260px] md:h-[280px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-serif italic">Luxury Bath Sanctuary</h3>
              <p className="text-xs text-gray-200">Residential · Bahria Town</p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={img5} className="w-full h-[260px] md:h-[280px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-serif italic">Rooftop Lounge Area</h3>
              <p className="text-xs text-gray-200">Commercial · DHA Karachi</p>
            </div>
          </div>

        </div>

        {/* 🔥 BUTTONS */}
        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
            View All projects
          </button>

          <button className="border border-black px-6 py-3 rounded-full text-sm">
            Book a Consultation
          </button>
        </div>

      </div>
    </div>
  );
}

export default QualitySection;