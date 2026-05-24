import { useRef } from "react";

import img1 from "../../assets/mate1.png";
import img2 from "../../assets/mate2.png";
import img3 from "../../assets/mate3.png";
import img4 from "../../assets/rubab.png"

const team = [
  {
    name: "Jabir Farooq",
    role: "Founder Alarach Studio",
    img: img1,
    desc: "Leads the studio vision with over 15 years of experience, shaping timeless and functional design direction.",
    linkedin: "https://www.linkedin.com/in/ali-sumair-1444082a5/",
    behance: "https://www.behance.net/alisumair",
    instagram: "https://www.instagram.com/alarch_studio?igsh=MXVhZGNyNmdydDU3Zg==",
  },
  {
    name: "Ali Sumair",
    role: "CEO Alarach Studio",
    img: img2,
    desc: "Drives business growth and ensures seamless execution across all projects and teams.",
    linkedin: "https://www.linkedin.com/in/ali-sumair-1444082a5/",
    behance: "https://www.behance.net/alisumair",
    instagram: "https://www.instagram.com/sumair_studio?igsh=d2t1MGZ0bGpjdTBj",
  },
   {
    name: "Rubab Khurram",
    role: "Architect",
    img: img4,
    desc: "Focuses on architectural precision and translating concepts into functional spaces.",
    linkedin: "https://www.linkedin.com/in/ali-sumair-1444082a5/",
    behance: "https://www.behance.net/alisumair",
    instagram: "https://www.instagram.com/alarch_studio?igsh=MXVhZGNyNmdydDU3Zg==",
  },
  {
    name: "Talha Manzoor",
    role: "Visual Designer",
    img: img3,
    desc: "Crafts compelling visual identities and enhances spatial storytelling through design.",
    linkedin: "https://www.linkedin.com/in/uiuxtalhamanzoor/",
    behance: "https://www.behance.net/talhamanzoor2",
    instagram: "https://www.instagram.com/mr.talha12?igsh=azZlNDQ2OWExajdv",
  },
];

function TeamSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const card = container.firstChild;
    const cardWidth = card.offsetWidth + 24; 

    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white py-16 md:py-20 xl:py-24 2xl:py-28">

      <div className="container-main">

        {/* HEADER */}
        <div className="text-center w-full mx-auto mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="heading-section italic">
            Meet Our Team
          </h2>

          <p className="text-body w-full">
            The minds behind every detail — a team of designers and architects
            dedicated to turning vision into refined, timeless spaces.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gray-300 bg-white items-center justify-center shadow-sm icon-hover"
          >
            ←
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gray-300 bg-white items-center justify-center shadow-sm icon-hover"
          >
            →
          </button>

          {/* TRACK */}
          <div
            ref={scrollRef}
            className="flex gap-6 xl:gap-8 overflow-x-auto no-scrollbar scroll-smooth"
          >

            {team.map((member, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-[85%] sm:w-[60%]
                  md:w-[48%]
                  xl:w-[32%]
                  2xl:w-[30%]
                "
              >

                <div className="bg-white rounded-2xl overflow-hidden card-hover">

                  {/* IMAGE */}
                  <div className="h-[240px] md:h-[280px] xl:h-[340px] 2xl:h-[680px]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 xl:p-6 2xl:p-7">

                    <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium">
                      {member.name}
                    </p>

                    <p className="text-sm md:text-base text-gray-500">
                      {member.role}
                    </p>

                    <p className="text-body mt-3 text-gray-600">
                      {member.desc}
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 mt-4 text-gray-500 text-lg">

                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>

                      <a href={member.behance} target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                        <i className="fa-brands fa-square-behance"></i>
                      </a>

                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                        <i className="fa-brands fa-instagram"></i>
                      </a>

                    </div>

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