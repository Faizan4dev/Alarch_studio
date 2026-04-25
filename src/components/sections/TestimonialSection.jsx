import prsn6 from "../../assets/prsn6.jpeg";
import prsn7 from "../../assets/prsn7.jpeg";
import prsn8 from "../../assets/prsn8.jpeg";

import flagSK from "../../assets/slovakia.jpeg";
import flagUS from "../../assets/usa.jpeg";

const testimonials = [
  {
    text: "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition...",
    name: "Dreamattic",
    img: prsn6,
    flag: flagSK,
    country: "Slovakia",
  },
  {
    text: "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition...",
    name: "Roger Francis",
    img: prsn7,
    flag: flagUS,
    country: "United States",
  },
  {
    text: "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition...",
    name: "Dreamattic",
    img: prsn8,
    flag: flagSK,
    country: "Slovakia",
  },
];

function TestimonialSection() {
  return (
    <div className="bg-white py-16 md:py-20 xl:py-24">

      <div className="container-main">

        {/* 🔥 HEADING */}
        <h2 className="text-center heading-section italic">
          Homes Loved, Clients Heard
        </h2>

        {/* 🔥 CONTENT */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT ARROW (hidden on mobile) */}
          <button className="hidden md:flex w-10 h-10 border border-gray-300 rounded-full items-center justify-center icon-hover">
            ←
          </button>

          {/* TESTIMONIAL CARDS */}
          <div className="flex flex-col md:flex-row gap-8 text-center">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="max-w-xs mx-auto transition duration-300 hover:opacity-80"
              >

                <p className="text-body">
                  "{item.text}"
                </p>

                <div className="mt-6 flex flex-col items-center">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />

                  <p className="mt-3 font-['Cormorant_Garamond'] italic">
                    {item.name}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <img
                      src={item.flag}
                      alt={item.country}
                      className="w-5 h-3 object-cover rounded-sm"
                    />
                    <p className="text-xs text-gray-500">
                      {item.country}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT ARROW (hidden on mobile) */}
          <button className="hidden md:flex w-10 h-10 border border-gray-300 rounded-full items-center justify-center icon-hover">
            →
          </button>

        </div>

        {/* 🔥 DOTS */}
        <div className="mt-8 md:mt-10 flex justify-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}

export default TestimonialSection;