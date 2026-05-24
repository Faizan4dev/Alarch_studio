import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookConsultation from "../ui/BookConsultation";
/* ============================= */
/* 🔥 IMPORT IMAGES (EXAMPLES) */
/* ============================= */

/* HOUSE 1 */
import h1_1 from "../../assets/pop/house1/h1i.jpeg";
import h1_2 from "../../assets/pop/house1/h1ii.jpeg";
import h1_3 from "../../assets/pop/house1/h1iii.jpeg";

/* HOUSE 2 */
import h2_1 from "../../assets/pop/house2/h2i.jpeg";
import h2_3 from "../../assets/pop/house2/h2ii.jpeg";
import h2_4 from "../../assets/pop/house2/h2iii.jpeg";

// house 3
import h3_1 from "../../assets/pop/house3/h3i.jpeg";
import h3_2 from "../../assets/pop/house3/h3ii.jpeg";
import h3_3 from "../../assets/pop/house3/h3iii.jpeg";
import h3_5 from "../../assets/pop/house3/h3v.jpeg";
import h3_6 from "../../assets/pop/house3/h3vi.jpeg";

// house 4
import h4_1 from "../../assets/pop/house4/fng360.jpg.jpeg";
import h4_2 from "../../assets/pop/house4/fng1.jpg.jpeg";
import h4_3 from "../../assets/pop/house4/fng2.jpg.jpeg";
import h4_4 from "../../assets/pop/house4/fng3.jpg.jpeg";
import h4_5 from "../../assets/pop/house4/fng4.jpg.jpeg";
import h4_6 from "../../assets/pop/house4/fng5.jpg.jpeg";
import h4_7 from "../../assets/pop/house4/fng6.jpg.jpeg";
import h4_8 from "../../assets/pop/house4/fng7.jpg.jpeg";
import h4_9 from "../../assets/pop/house4/fng8.jpg.jpeg";

// house 5
import h5_1 from "../../assets/pop/house5/of1.jpg.jpeg";
import h5_2 from "../../assets/pop/house5/of1.jpg.jpeg";
import h5_3 from "../../assets/pop/house5/of2.jpg.jpeg";
import h5_4 from "../../assets/pop/house5/of3.jpg.jpeg";
import h5_5 from "../../assets/pop/house5/of4.jpg.jpeg";
import h5_6 from "../../assets/pop/house5/of5.jpg.jpeg";
import h5_7 from "../../assets/pop/house5/of6.jpg.jpeg";
import h5_8 from "../../assets/pop/house5/of7.jpg.jpeg";
import h5_9 from "../../assets/pop/house5/of8.jpg.jpeg";
import h5_10 from "../../assets/pop/house5/of9.jpg.jpeg";
import h5_11 from "../../assets/pop/house5/of10.jpg.jpeg";
import h5_12 from "../../assets/pop/house5/of11.jpg.jpeg";
import h5_13 from "../../assets/pop/house5/of12.jpg.jpeg";
import h5_14 from "../../assets/pop/house5/of13.jpg.jpeg";
import h5_15 from "../../assets/pop/house5/of14.jpg.jpeg";
import h5_16 from "../../assets/pop/house5/of15.jpg.jpeg";
import h5_17 from "../../assets/pop/house5/of16.jpg.jpeg";

// house 6
import h6_1 from "../../assets/pop/house6/salon1.jpg.jpeg";
import h6_2 from "../../assets/pop/house6/salon2.jpg.jpeg";
import h6_3 from "../../assets/pop/house6/salon3.jpg.jpeg";
import h6_4 from "../../assets/pop/house6/salon4.jpg.jpeg";
import h6_5 from "../../assets/pop/house6/salon5.jpg.jpeg";
import h6_6 from "../../assets/pop/house6/salon6.jpg.jpeg";
import h6_7 from "../../assets/pop/house6/salon7.jpg.jpeg";
import h6_10 from "../../assets/pop/house6/salon10.jpg.jpeg";

/* ============================= */
/* PROJECT DATA */
/* ============================= */

const projects = [
   {
    title: "Spanish House",
    desc: "Residential · Project",
    thumbnail: h1_1,
    images: [h1_1, h1_2, h1_3],
  },
  {
    title: "Modern House",
    desc: "Residential · Project",
    thumbnail: h2_1,
    images: [h2_1, h2_3, h2_4],
  },
  {
    title: "Minimilistic + Modern Bedroom",
    desc: "Residential · Project",
    thumbnail: h3_1,
    images: [h3_1, h3_2, h3_3, h3_5, h3_6],
  },
  {
    title: "Contemporary Living Room",
    desc: "Residential · Project",
    thumbnail: h4_1,
    images: [h4_1, h4_2, h4_3, h4_4, h4_5, h4_6, h4_7, h4_8, h4_9],
  },
  {
    title: "Futuristic Office",
    desc: "Commercial · Project",
    thumbnail: h5_1,
    images: [h5_1, h5_3, h5_4, h5_5, h5_6, h5_7, h5_8],
  },
  {
    title: "Modern Salon",
    desc: "Commercial · Project",
    thumbnail: h6_1,
    images: [h6_1, h6_2, h6_3, h6_4, h6_5, h6_6, h6_7, h6_10],
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

function QualitySection() {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="bg-white py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="container-main">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="heading-section italic">
            The Quality We Provide
          </h2>
          <p className="text-body mt-3">
            You deserve a home as beautiful as you vision it.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 md:mt-14 xl:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-8 2xl:gap-10">

            {visibleProjects.map((item) => (
              <div
                key={item.title}
                onClick={() => {
                  setActiveProject(item);
                  setCurrentIndex(0);
                }}
                className="cursor-pointer relative rounded-2xl 2xl:rounded-[28px] overflow-hidden group"
              >
                <div className="h-[240px] sm:h-[260px] md:h-[280px] xl:h-[320px] 2xl:h-[520px]">
                  <img
                    src={item.thumbnail}
                    className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
                  <h3 className="text-white font-['Cormorant_Garamond'] italic">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-200">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-4">
              {/* <button className="btn-primary">
                Book a Consultation
              </button> */}
              <BookConsultation />
          <button className="btn-outline" onClick={() => navigate("/projects#projects-grid")}>
            View All Projects
          </button>
        </div>

      </div>

      {/* POPUP */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

          <div className="bg-white w-full md:w-[80%] xl:w-[70%] 2xl:w-[60%] rounded-2xl overflow-hidden">

            <div className="bg-black text-white flex justify-between items-center px-6 py-4">
              <div>
                <h3 className="italic">{activeProject.title}</h3>
                <p className="text-xs text-gray-300">{activeProject.desc}</p>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="p-6">

              <div className="relative">
                <img
                  src={activeProject.images[currentIndex]}
                  className="w-full xl:h-[320px] 2xl:h-[720px] object-cover rounded-xl"
                />

                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + activeProject.images.length) %
                        activeProject.images.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full"
                >
                  ←
                </button>

                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex + 1) % activeProject.images.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full"
                >
                  →
                </button>
              </div>

              <div className="flex gap-4 mt-6 overflow-x-auto">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-28 h-20 object-cover rounded-lg cursor-pointer flex-shrink-0 ${
                      currentIndex === i ? "border-2 border-black" : ""
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QualitySection;
