import prsn1 from "../../assets/prsn1.jpeg";
import prsn2 from "../../assets/prsn2.jpeg";
import prsn3 from "../../assets/prsn3.jpeg";

import flagSK from "../../assets/slovakia.jpeg";
import flagUS from "../../assets/usa.jpeg";

function ProjectsTestimonial() {
  return (
    <div className="w-full bg-white py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-[42px] italic font-['Cormorant_Garamond'] mb-14">
          Homes Loved, Clients Heard
        </h2>

        {/* WRAPPER (for arrows positioning) */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border rounded-full items-center justify-center hover:bg-black hover:text-white transition">
            ←
          </button>

          {/* RIGHT ARROW */}
          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border rounded-full items-center justify-center hover:bg-black hover:text-white transition">
            →
          </button>

          {/* TESTIMONIAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* CARD 1 */}
            <div className="max-w-[260px] mx-auto text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                "I appreciate Sumair Design Studio’s attentiveness,
                professionalism, and effective communication. They managed
                to bring my idea to fruition."
              </p>

              <img
                src={prsn1}
                className="w-12 h-12 rounded-full object-cover mx-auto mt-6"
              />

              <p className="mt-3 font-medium">Dreammatic</p>

              {/* FLAG + COUNTRY */}
              <div className="flex items-center justify-center gap-2 mt-1">
                <img src={flagSK} className="w-4 h-4 object-cover rounded-[2px]" />
                <p className="text-xs text-gray-500">Slovakia</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="max-w-[260px] mx-auto text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                "Their attention to detail and ability to understand our
                vision was outstanding. The result exceeded expectations."
              </p>

              <img
                src={prsn2}
                className="w-12 h-12 rounded-full object-cover mx-auto mt-6"
              />

              <p className="mt-3 font-medium">Roger Francis</p>

              {/* FLAG + COUNTRY */}
              <div className="flex items-center justify-center gap-2 mt-1">
                <img src={flagUS} className="w-4 h-4 object-cover rounded-[2px]" />
                <p className="text-xs text-gray-500">United States</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="max-w-[260px] mx-auto text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                "A seamless experience from start to finish. The design
                perfectly reflects our lifestyle and taste."
              </p>

              <img
                src={prsn3}
                className="w-12 h-12 rounded-full object-cover mx-auto mt-6"
              />

              <p className="mt-3 font-medium">Dreammatic</p>

              {/* FLAG + COUNTRY */}
              <div className="flex items-center justify-center gap-2 mt-1">
                <img src={flagSK} className="w-4 h-4 object-cover rounded-[2px]" />
                <p className="text-xs text-gray-500">Slovakia</p>
              </div>
            </div>

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsTestimonial;