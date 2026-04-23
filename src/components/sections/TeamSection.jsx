import { useRef } from "react";

import img1 from "../../assets/mate1.png";
import img2 from "../../assets/mate2.png";
import img3 from "../../assets/mate3.png";

const team = [
  {
    name: "Jabir Farooq",
    role: "Founder Alarach Studio",
    img: img1,
    desc: "Leads the studio vision with over 15 years of experience, shaping timeless and functional design direction.",
  },
  {
    name: "Ali Sumair",
    role: "CEO Alarach Studio",
    img: img2,
    desc: "Drives business growth and ensures seamless execution across all projects and teams.",
  },
  {
    name: "Talha Manzoor",
    role: "Visual Designer",
    img: img3,
    desc: "Crafts compelling visual identities and enhances spatial storytelling through design.",
  },
  {
    name: "Another Member",
    role: "Architect",
    img: img1,
    desc: "Focuses on architectural precision and translating concepts into functional spaces.",
  },
];

function TeamSection() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full bg-white py-20">

      {/* 🔥 HEADER */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-[42px] md:text-[48px] italic font-['Cormorant_Garamond']">
          Meet Our Team
        </h2>
        <p className="text-sm text-black mt-3 max-w-[600px] mx-auto">
          The minds behind every detail — a team of designers and architects
          dedicated to turning vision into refined, timeless spaces.
        </p>
      </div>

      {/* 🔥 SLIDER */}
      <div className="relative max-w-[1440px] mx-auto px-6">

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full w-10 h-10 shadow icon-hover"
        >
          ←
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full w-10 h-10 shadow icon-hover"
        >
          →
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-xl overflow-hidden transition duration-300 hover:shadow-md"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[300px] object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-left">

                <p className="text-[18px] font-medium">{member.name}</p>

                <p className="text-sm text-gray-500">{member.role}</p>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {member.desc}
                </p>

                {/* ICONS */}
                <div className="flex gap-4 mt-4 text-lg text-gray-500">
                  <i className="fa-brands fa-linkedin cursor-pointer hover:text-black transition"></i>
                  <i className="fa-brands fa-x-twitter cursor-pointer hover:text-black transition"></i>
                  <i className="fa-solid fa-globe cursor-pointer hover:text-black transition"></i>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default TeamSection;