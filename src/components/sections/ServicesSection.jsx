import Simg1 from "../../assets/Simg1.jpeg";
import Simg2 from "../../assets/Simg2.jpeg";
import Simg3 from "../../assets/Simg3.jpeg";
import Simg4 from "../../assets/Simg4.jpeg";
import Simg5 from "../../assets/Simg5.jpeg";
import Simg6 from "../../assets/Simg6.jpeg";

const services = [
  {
    title: "Interior Designing",
    desc: "We create interiors that balance beauty and purpose. Each space reflects your lifestyle with a refined, timeless feel.",
    img: Simg1,
    reverse: false,
  },
  {
    title: "Exterior Designing",
    desc: "Exteriors shaped for strong presence and harmony. We focus on proportion, materials, and clean aesthetics.",
    img: Simg2,
    reverse: true,
  },
  {
    title: "Interior Layouts",
    desc: "Layouts that enhance flow, function, and comfort. Designed around how you live and move.",
    img: Simg3,
    reverse: false,
  },
  {
    title: "Arch Viz Animation",
    desc: "Realistic visuals that bring your space to life early, helping you make clear, confident decisions.",
    img: Simg4,
    reverse: true,
  },
  {
    title: "Material & Finish Selection",
    desc: "Curated materials that elevate quality and longevity. Every finish feels cohesive and considered.",
    img: Simg5,
    reverse: false,
  },
  {
    title: "Lighting Design",
    desc: "Lighting that shapes mood and depth. Each space feels warm, balanced, and complete.",
    img: Simg6,
    reverse: false,
  },
];

function ServicesSection() {
  return (
    <div className="bg-[#f9f9f9] py-16 md:py-20 xl:py-24">

      <div className="container-main">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="heading-section italic">
            What We Do For You
          </h2>

          <p className="text-body mt-3">
            Dedicated to crafting personalised interiors that reflect your unique taste, lifestyle, and aspirations.
          </p>

        </div>

        {/* 🔥 GRID */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col card-hover"
            >

              {/* IMAGE TOP */}
              {!item.reverse && (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className={`${item.reverse ? "mb-4" : "mt-4"}`}>

                <h3 className="text-base md:text-lg font-['Cormorant_Garamond'] italic leading-tight">
                  {item.title}
                </h3>

                <p className="text-body mt-2 text-gray-700">
                  {item.desc}
                </p>

              </div>

              {/* IMAGE BOTTOM */}
              {item.reverse && (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* 🔥 BUTTONS */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4">

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