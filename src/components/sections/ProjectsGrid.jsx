import { useState } from "react";
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
import h6_1 from "../../assets/pop/house6/salon1.jpg.jpeg"; //1-10
import h6_2 from "../../assets/pop/house6/salon2.jpg.jpeg";
import h6_3 from "../../assets/pop/house6/salon3.jpg.jpeg";
import h6_4 from "../../assets/pop/house6/salon4.jpg.jpeg";
import h6_5 from "../../assets/pop/house6/salon5.jpg.jpeg";
import h6_6 from "../../assets/pop/house6/salon6.jpg.jpeg";
import h6_7 from "../../assets/pop/house6/salon7.jpg.jpeg";
import h6_10 from "../../assets/pop/house6/salon10.jpg.jpeg";



// house 7
import h7_1 from "../../assets/pop/house7/4.jpg.jpeg";
import h7_2 from "../../assets/pop/house7/5.jpg.jpeg";
import h7_3 from "../../assets/pop/house7/9.jpg.jpeg";
import h7_4 from "../../assets/pop/house7/10.jpg.jpeg";
import h7_5 from "../../assets/pop/house7/11.jpg.jpeg";



// house 8
import h8_1 from "../../assets/pop/house8/6.jpg.jpeg";    //6-8jpg.jpeg
import h8_2 from "../../assets/pop/house8/7.jpg.jpeg";
import h8_3 from "../../assets/pop/house8/8.jpg.jpeg";

// house 9
import h9_1 from "../../assets/pop/house9/fn.jpg"; //fn1-fn8
import h9_2 from "../../assets/pop/house9/fn1.jpg";
import h9_3 from "../../assets/pop/house9/fn2.jpg";
import h9_4 from "../../assets/pop/house9/fn3.jpg";
import h9_5 from "../../assets/pop/house9/fn4.jpg";
import h9_6 from "../../assets/pop/house9/fn5.jpg";
import h9_7 from "../../assets/pop/house9/fn6.jpg";
import h9_8 from "../../assets/pop/house9/fn7.jpg";
import h9_9 from "../../assets/pop/house9/fn8.jpg";


// house 10
import h10_1 from "../../assets/pop/house10/living.png"; //living1-living3.png
import h10_2 from "../../assets/pop/house10/living1.png";
import h10_3 from "../../assets/pop/house10/living2.png";
import h10_4 from "../../assets/pop/house10/living3.jpg";


// house 11
import h11_1 from "../../assets/pop/house11/final.jpg"; //final,2
import h11_2 from "../../assets/pop/house11/final1.jpg";
import h11_3 from "../../assets/pop/house11/final2.jpg";

// house 12
import h12_1 from "../../assets/pop/house12/fn360.jpg"; //fn1-fn6
import h12_2 from "../../assets/pop/house12/fn1.jpg";
import h12_3 from "../../assets/pop/house12/fn2.jpg";
import h12_4 from "../../assets/pop/house12/fn3.jpg";
import h12_5 from "../../assets/pop/house12/fn4.jpg";
import h12_6 from "../../assets/pop/house12/fn5.jpg";
import h12_7 from "../../assets/pop/house12/fn6.jpg";


// house 13
import h13_1 from "../../assets/pop/house13/1.jpg"; //1-4.jpg
import h13_2 from "../../assets/pop/house13/2.jpg";
import h13_3 from "../../assets/pop/house13/3.jpg";
import h13_4 from "../../assets/pop/house13/4.jpg";

// house 14
import h14_1 from "../../assets/pop/house14/1.jpg"; //1-16.jpg
import h14_2 from "../../assets/pop/house14/2.jpg";
import h14_3 from "../../assets/pop/house14/3.jpg";
// import h14_4 from "../../assets/pop/house14/4.jpg";
// import h14_5 from "../../assets/pop/house14/5.jpg";
import h14_6 from "../../assets/pop/house14/6.jpg";
import h14_7 from "../../assets/pop/house14/7.jpg";
import h14_8 from "../../assets/pop/house14/8.jpg";
import h14_9 from "../../assets/pop/house14/9.jpg";
import h14_10 from "../../assets/pop/house14/10.jpg";
import h14_11 from "../../assets/pop/house14/11.jpg";
import h14_12 from "../../assets/pop/house14/12.jpg";
import h14_13 from "../../assets/pop/house14/13.jpg";
// import h14_14 from "../../assets/pop/house14/14.jpg";
import h14_15 from "../../assets/pop/house14/126.jpg";
import h14_16 from "../../assets/pop/house14/16.jpg";


// house 15
import h15_1 from "../../assets/pop/house15/final_kit.jpg"; //final_kit1-final_kit4.jpg
import h15_2 from "../../assets/pop/house15/final_kit1.jpg";
import h15_3 from "../../assets/pop/house15/final_kit2.jpg";
import h15_4 from "../../assets/pop/house15/final_kit3.jpg";
import h15_5 from "../../assets/pop/house15/final_kit4.jpg";


// house 16
import h16_1 from "../../assets/pop/house16/1.jpg"; //1-5.jpg
import h16_2 from "../../assets/pop/house16/2.jpg";
import h16_3 from "../../assets/pop/house16/3.jpg";
import h16_4 from "../../assets/pop/house16/4.jpg";
import h16_5 from "../../assets/pop/house16/5.jpg";


// house 17
import h17_1 from "../../assets/pop/house17/1.jpg"; //1-10.jpg and 11-15.png
import h17_2 from "../../assets/pop/house17/2.jpg";
import h17_3 from "../../assets/pop/house17/3.jpg";
import h17_4 from "../../assets/pop/house17/4.jpg";
import h17_5 from "../../assets/pop/house17/5.jpg";
import h17_6 from "../../assets/pop/house17/6.jpg";
import h17_7 from "../../assets/pop/house17/7.jpg"; 
import h17_8 from "../../assets/pop/house17/8.jpg";
import h17_9 from "../../assets/pop/house17/9.jpg";
import h17_10 from "../../assets/pop/house17/10.jpg";
import h17_11 from "../../assets/pop/house17/11.png";
import h17_12 from "../../assets/pop/house17/12.png";
import h17_13 from "../../assets/pop/house17/13.png";
import h17_14 from "../../assets/pop/house17/14.png";
import h17_15 from "../../assets/pop/house17/15.png";


// house 18
import h18_1 from "../../assets/pop/house18/office1.jpg"; //office1-office6.jpg
import h18_2 from "../../assets/pop/house18/office2.jpg";
import h18_3 from "../../assets/pop/house18/office3.jpg";
import h18_4 from "../../assets/pop/house18/office4.jpg";
import h18_5 from "../../assets/pop/house18/office5.jpg";
import h18_6 from "../../assets/pop/house18/office6.jpg";


// house 19
import h19_1 from "../../assets/pop/house19/pod.jpg"; //pod,pod1-3.jpg
import h19_2 from "../../assets/pop/house19/pod1.jpg";
import h19_3 from "../../assets/pop/house19/pod2.jpg";
import h19_4 from "../../assets/pop/house19/pod3.jpg";


// house 20
import h20_1 from "../../assets/pop/house20/fn.jpg"; //fn,fn1-fn14.jpg
import h20_2 from "../../assets/pop/house20/fn1.jpg";
import h20_3 from "../../assets/pop/house20/fn2.jpg";
import h20_4 from "../../assets/pop/house20/fn3.jpg";
import h20_5 from "../../assets/pop/house20/fn4.jpg";
import h20_6 from "../../assets/pop/house20/fn5.jpg";
import h20_7 from "../../assets/pop/house20/fn6.jpg";
import h20_8 from "../../assets/pop/house20/fn7.jpg";
import h20_9 from "../../assets/pop/house20/fn8.jpg";
import h20_10 from "../../assets/pop/house20/fn9.jpg";
import h20_11 from "../../assets/pop/house20/fn10.jpg";
import h20_12 from "../../assets/pop/house20/fn11.jpg";
import h20_13 from "../../assets/pop/house20/fn12.jpg";
import h20_14 from "../../assets/pop/house20/fn13.jpg";
import h20_15 from "../../assets/pop/house20/fn14.jpg";


// house 21
import h21_1 from "../../assets/pop/house21/1.jpg"; //1-4.jpg
import h21_2 from "../../assets/pop/house21/2.jpg";
import h21_3 from "../../assets/pop/house21/3.jpg";
import h21_4 from "../../assets/pop/house21/4.jpg";


// house 22
import h22_1 from "../../assets/pop/house22/fn1.jpg"; //fn1-fn3.jpg
import h22_2 from "../../assets/pop/house22/fn2.jpg";
import h22_3 from "../../assets/pop/house22/fn3.jpg";

// house 23
import h23_1 from "../../assets/pop/house23/liv2.jpg"; //liv2-liv4.jpg
import h23_2 from "../../assets/pop/house23/liv3.jpg";
import h23_3 from "../../assets/pop/house23/liv4.jpg";

// house 24
import h24_1 from "../../assets/pop/house24/living4.png"; //living4-living8.png
import h24_2 from "../../assets/pop/house24/living5.jpg";
import h24_4 from "../../assets/pop/house24/living7.png";
import h24_5 from "../../assets/pop/house24/living8.png";


/* ============================= */
/* 🔥 PROJECT DATA */
/* ============================= */
// import { useState } from "react";

/* KEEP YOUR IMPORTS SAME */

/* ============================= */
/* 🔥 PROJECT DATA (FIXED) */
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
  {
    title: "Wooden Bedroom",
    desc: "Residential · Project",
    thumbnail: h7_1,
    images: [h7_1, h7_2, h7_3, h7_4, h7_5],
  },
  {
    title: "Wooden Bedroom",
    desc: "Residential · Project",
    thumbnail: h8_1,
    images: [h8_1, h8_2, h8_3],
  },
  {
    title: "Enzu Clothing Shop",
    desc: "Commercial · Project",
    thumbnail: h9_1,
    images: [h9_1, h9_2, h9_3, h9_4, h9_5, h9_6, h9_7, h9_8, h9_9],
  },
  {
    title: "Classical + Modern Living Room",
    desc: "Residential · Project",
    thumbnail: h10_1,
    images: [h10_1, h10_2, h10_3, h10_4],
  },
  {
    title: "Modern Bedroom",
    desc: "Residential · Project",
    thumbnail: h11_1,
    images: [h11_1, h11_2, h11_3],
  },
  {
    title: "Modern Living Kitchen",
    desc: "Residential · Project",
    thumbnail: h12_1,
    images: [h12_1, h12_2, h12_3, h12_4, h12_5, h12_6, h12_7],
  },
  {
    title: "Modern + Classical Living Room",
    desc: "Residential · Project",
    thumbnail: h13_1,
    images: [h13_1, h13_2, h13_3, h13_4],
  },
  {
    title: "Summer House",
    desc: "Residential · Project",
    thumbnail: h14_1,
    images: [h14_1, h14_2, h14_3]
  },
  {
    title: "Modern living Room",
    desc: "Residential · Project",
    thumbnail: h15_1,
    images: [h15_1, h15_2, h15_3, h15_4, h15_5],
  },  
  {
    title: "Sauna + Steam Area",
    desc: "Residential · Project",
    thumbnail: h16_1,
    images: [h16_1, h16_2, h16_3, h16_4, h16_5],
  },
  {
    title: "Moroccan Villa",
    desc: "Residential · Project",  
    thumbnail: h17_1,
    images: [h17_1, h17_2, h17_3, h17_4, h17_5, h17_6, h17_7, h17_8, h17_9, h17_10, h17_11, h17_12, h17_13, h17_14, h17_15],
  },
  {
    title: "Modern Office",
    desc: "Commercial · Project",  
    thumbnail: h18_1,
    images: [h18_1, h18_2, h18_3, h18_4, h18_5, h18_6],
  },

  {
    title: "Podcast Studio",
    desc: "Residential · Project",  
    thumbnail: h19_1,
    images: [h19_1, h19_2, h19_3, h19_4],
  },
  {
    title: "Modern Bedroom",
    desc: "Residential · Project",
    thumbnail: h20_1,
    images: [h20_1, h20_2, h20_3, h20_4, h20_5, h20_6, h20_7, h20_8, h20_9, h20_10, h20_11, h20_12, h20_13, h20_14, h20_15],
  },
  {
    title: "Modern Home Office",
    desc: "Residential · Project",
    thumbnail: h21_1,
    images: [h21_1, h21_2, h21_3, h21_4],
  },
  {
    title: "Neo Classical Living Room",
    desc: "Residential · Project",
    thumbnail: h22_1,
    images: [h22_1, h22_2, h22_3],
  },
  { 
    title: "Modern Living Room",
    desc: "Residential · Project",
    thumbnail: h23_1, 
    images: [h23_1, h23_2, h23_3],
  },
  { 
    title: "Classical + Modern Living Area",
    desc: "Residential · Project",
    thumbnail: h24_1, 
    images: [h24_1, h24_2, h24_4, h24_5],
  },

];

/* ============================= */
/* COMPONENT */
/* ============================= */

function QualitySection({ id }) {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
   <div
        id={id}
        className="bg-white py-16 md:py-20 xl:py-24 2xl:py-28"
      >
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
          {!showAll && (
            <button onClick={() => setShowAll(true)} className="btn-primary">
              Load more...
            </button>
          )}
          {/* <button className="btn-outline">
            Book a Consultation
          </button> */}
          <BookConsultation className="btn-outline" />
        </div>
      </div>

      {/* POPUP */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

          <div className="bg-white w-md:w-full w-xl:[80%] w-2xl:[100%] rounded-2xl overflow-hidden">

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
                    className={`w-28 h-20 object-cover rounded-lg cursor-pointer ${
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