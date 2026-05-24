import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Simg1 from "../../assets/Simg1.jpeg";
import Simg2 from "../../assets/Simg2.jpeg";
import Simg3 from "../../assets/Simg3.jpeg";
import Simg4 from "../../assets/Simg4.jpeg";
import Simg5 from "../../assets/Simg5.jpeg";
import Simg6 from "../../assets/Simg6.jpeg";
import BookConsultation from "../ui/BookConsultation";

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
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false); 

  const renderMedia = (item) => {
    const commonClasses =
      "w-full h-[220px] sm:h-[240px] md:h-[260px] xl:h-[240px] 2xl:h-[380px] rounded-2xl";

    if (item.title === "Arch Viz Animation") {
      return (
        <div
          onClick={() => setVideoOpen(true)}
          className={`${commonClasses} overflow-hidden relative cursor-pointer group`}
        >
          {/* YouTube background style */}
          <iframe
            src="https://www.youtube.com/embed/UA44VYkAYaQ?autoplay=1&mute=1&loop=1&playlist=UA44VYkAYaQ&controls=0&modestbranding=1"
            className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 group-hover:bg-white w-12 h-12 rounded-full flex items-center justify-center transition">
              ▶
            </div>
          </div>
        </div>
      );
    }

    return (
      <img
        src={item.img}
        alt={item.title}
        className={`${commonClasses} object-cover transition duration-500 hover:scale-105`}
      />
    );
  };

  return (
    <div className="bg-[#f9f9f9] py-16 md:py-20 xl:py-24">
      <div className="container-main">

        {/* HEADER */}
        <div className="text-center max-w-full mx-auto">
          <h2 className="heading-section italic">
            What We Do For You
          </h2>

          <p className="text-body mt-3">
            Dedicated to crafting personalised interiors that reflect your unique taste, lifestyle, and aspirations.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl 2xl:rounded-[28px] p-6 xl:p-7 2xl:p-8 flex flex-col card-hover"
            >

              {!item.reverse && (
                <div className="overflow-hidden rounded-xl">
                  {renderMedia(item)}
                </div>
              )}

              <div className={`${item.reverse ? "mb-4" : "mt-4"}`}>
                <h3 className="text-base md:text-lg xl:text-xl 2xl:text-[40px] font-['Cormorant_Garamond'] italic leading-tight">
                  {item.title}
                </h3>

                <p className="text-body mt-2 text-gray-700">
                  {item.desc}
                </p>
              </div>

              {item.reverse && (
                <div className="overflow-hidden rounded-xl">
                  {renderMedia(item)}
                </div>
              )}

            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4">
          <BookConsultation />

          <button
            className="btn-outline"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </button>
        </div>

      </div>

      {/*YT VIDEO POPUP */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative bg-black rounded-2xl overflow-hidden
              w-full
              max-w-[95%]
              md:max-w-[800px]
              xl:max-w-[1000px]
              2xl:max-w-[1200px]
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            {/* VIDEO */}
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/UA44VYkAYaQ?autoplay=1&controls=1"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesSection;