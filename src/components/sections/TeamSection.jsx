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
    const scrollAmount = 320;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full bg-white py-16 md:py-20 xl:py-24">

      <div className="container-main">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <h2 className="heading-section italic">
            Meet Our Team
          </h2>

          <p className="text-body mt-3">
            The minds behind every detail — a team of designers and architects
            dedicated to turning vision into refined, timeless spaces.
          </p>

        </div>

        {/* 🔥 SLIDER */}
        <div className="relative">

          {/* LEFT BUTTON (hidden on mobile) */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow-sm icon-hover"
          >
            ←
          </button>

          {/* RIGHT BUTTON (hidden on mobile) */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow-sm icon-hover"
          >
            →
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl overflow-hidden card-hover"
              >

                {/* IMAGE */}
                <div className="h-[260px] sm:h-[280px] md:h-[300px] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center md:text-left">

                  <p className="text-base md:text-lg font-medium">
                    {member.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {member.role}
                  </p>

                  <p className="text-body mt-3 text-gray-600">
                    {member.desc}
                  </p>

                  {/* ICONS */}
                  <div className="flex justify-center md:justify-start gap-4 mt-4 text-gray-500">

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
    </div>
  );
}

export default TeamSection;