import prsn1 from "../../assets/prsn1.jpeg";
import prsn2 from "../../assets/prsn2.jpeg";
import prsn3 from "../../assets/prsn3.jpeg";

import flagSK from "../../assets/slovakia.jpeg";
import flagUS from "../../assets/usa.jpeg";

const testimonials = [
  {
    text: "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition.",
    name: "Dreammatic",
    img: prsn1,
    flag: flagSK,
    country: "Slovakia",
  },
  {
    text: "Their attention to detail and ability to understand our vision was outstanding. The result exceeded expectations.",
    name: "Roger Francis",
    img: prsn2,
    flag: flagUS,
    country: "United States",
  },
  {
    text: "A seamless experience from start to finish. The design perfectly reflects our lifestyle and taste.",
    name: "Dreammatic",
    img: prsn3,
    flag: flagSK,
    country: "Slovakia",
  },
];

function ProjectsTestimonial() {
  return (
    <div className="w-full bg-white py-16 md:py-20 xl:py-24">

      <div className="container-main text-center">

        {/* 🔥 TITLE */}
        <h2 className="heading-section italic mb-12 md:mb-14">
          Homes Loved, Clients Heard
        </h2>

        {/* 🔥 WRAPPER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 rounded-full items-center justify-center icon-hover">
            ←
          </button>

          {/* RIGHT ARROW */}
          <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 rounded-full items-center justify-center icon-hover">
            →
          </button>

          {/* 🔥 TESTIMONIAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="max-w-[260px] mx-auto transition duration-300 hover:opacity-90"
              >

                <p className="text-body text-gray-600">
                  "{item.text}"
                </p>

                <div className="mt-6 flex flex-col items-center">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />

                  <p className="mt-3 font-medium">
                    {item.name}
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-1">
                    <img
                      src={item.flag}
                      alt={item.country}
                      className="w-4 h-4 object-cover rounded-[2px]"
                    />
                    <p className="text-xs text-gray-500">
                      {item.country}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* 🔥 DOTS */}
        <div className="flex justify-center mt-8 md:mt-10 gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsTestimonial;