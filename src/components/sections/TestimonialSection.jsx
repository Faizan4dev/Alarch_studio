import { useRef, useState } from "react";

import prsn66 from "../../assets/prsn6.jpeg";
import prsn6 from "../../assets/prsn6.jpg";
import prsn7 from "../../assets/prsn7.jpg";
import prsn8 from "../../assets/prsn8.png";
import prsn9 from "../../assets/prsn9.png";
import prsn10 from "../../assets/prsn10.png";
import prsn11 from "../../assets/prsn11.png";
import prsn12 from "../../assets/prsn12.png";
import prsn13 from "../../assets/prsn13.jpg";
import prsn14 from "../../assets/prsn14.png";
import prsn15 from "../../assets/prsn14.png";

import flagSK from "../../assets/slovakia.jpeg";
import flagUS from "../../assets/usa.jpeg";
import flagFR from "../../assets/flagFR.png";
import flagGR from "../../assets/flagGR.png";
import flagSA from "../../assets/flagSA.png";
import flagSM from "../../assets/flagSM.png";
import flagSP from "../../assets/flagSP.png";
import flagSW from "../../assets/flagSW.png";
import flagUK from "../../assets/flagUK.png";

const testimonials = [
  { text: "I appreciate Sumair Design Studio's attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition...", name: "Dreamattic", img: prsn66, flag: flagSK, country: "Slovakia" },
  { text: "Amazing work!! fast communication!! so wonderful to work with them ...", name: "Roger Francis", img: prsn7, flag: flagUS, country: "United States" },
  { text: "Thank you! It was great working with you. Will be in touch again.", name: "Morganesort", img: prsn8, flag: flagSM, country: "Sint Maarten" },
  { text: "Sumair Design Studio's done a amazing job on our project with incredible attention to details and outstanding visual appeal.", name: "Jalicia", img: prsn9, flag: flagUS, country: "United States" },
  { text: "Thrilled with Sumair Design Studio's work! Highly recommend for 3D interior modeling projects!", name: "Cazpey", img: prsn10, flag: flagGR, country: "Germany" },
  { text: "Amazing job with incredible attention to detail and outstanding visual appeal.", name: "Ehabbarazi", img: prsn11, flag: flagUK, country: "United Kingdom" },
  { text: "They understood my vision perfectly and delivered beyond expectations.", name: "El Muntasir", img: prsn12, flag: flagSA, country: "Saudi Arabia" },
  { text: "Very satisfied with the work! Fast implementation and great communication.", name: "Leolaina", img: prsn13, flag: flagSW, country: "Switzerland" },
  { text: "Excellent personality, easy to communicate, will definitely come back.", name: "Harrind", img: prsn14, flag: flagSP, country: "Singapore" },
  { text: "Très patient et professionnel. Je recommande vivement.", name: "Miyiger", img: prsn6, flag: flagFR, country: "France" },
];

// Show 3 cards at a time on md+, so total pages = testimonials.length - 2
const VISIBLE = 3;
const TOTAL_PAGES = testimonials.length - VISIBLE + 1; // 8 page steps

function TestimonialSection() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const card = container.firstChild;
    const cardWidth = card.offsetWidth + 32; // gap-8 = 32px

    const nextIndex =
      dir === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(TOTAL_PAGES - 1, activeIndex + 1);

    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(nextIndex);
  };

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const card = container.firstChild;
    const cardWidth = card.offsetWidth + 32;

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <div className="bg-white py-16 md:py-20 xl:py-24">

      <div className="container-main">

        {/* HEADING */}
        <h2 className="text-center heading-section italic">
          Homes Loved, Clients Heard
        </h2>

        {/* CONTENT */}
        <div className="mt-12 md:mt-16 flex items-center gap-6">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-gray-300 items-center justify-center icon-hover"
          >
            ←
          </button>

          {/* SLIDER */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth w-full"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc((100%-64px)/3)]"
              >

                {/* CARD */}
                <div className="h-full flex flex-col justify-between text-center px-4">

                  {/* TEXT */}
                  <p className="text-body min-h-[110px]">
                    "{item.text}"
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-6 flex flex-col items-center">

                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />

                    <p className="mt-3 font-['Cormorant_Garamond'] italic text-lg">
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

              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-gray-300 items-center justify-center icon-hover"
          >
            →
          </button>

        </div>

        {/* DOTS */}
        <div className="mt-8 md:mt-10 flex justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-black w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default TestimonialSection;