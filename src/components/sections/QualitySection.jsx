import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import why from "../../assets/why.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img1.jpeg";

const projects = [
  {
    img: img1,
    title: "Master Bedroom Retreat",
    desc: "Residential · DHA Lahore",
  },
  {
    img: img2,
    title: "Living Room Design",
    desc: "Residential · Gulberg Lahore",
  },
  {
    img: why,
    title: "Modern Kitchen Studio",
    desc: "Commercial · Karachi",
  },
  {
    img: img3,
    title: "Executive Office Suite",
    desc: "Commercial · Islamabad",
  },
  {
    img: img4,
    title: "Luxury Bath Sanctuary",
    desc: "Residential · Bahria Town",
  },
  {
    img: img5,
    title: "Rooftop Lounge Area",
    desc: "Commercial · DHA Karachi",
  },
];

function QualitySection() {
  return (
    <div className="bg-white py-16 md:py-20 xl:py-24">

      <div className="container-main">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="heading-section italic">
            The Quality We Provide
          </h2>

          <p className="text-body mt-3">
            You deserve a home as beautiful as you vision it. Let's make it happen together.
          </p>

        </div>

        {/* 🔥 GRID */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {projects.map((item, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden group">

              {/* IMAGE */}
              <div className="h-[220px] sm:h-[240px] md:h-[260px] xl:h-[300px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">

                <h3 className="text-white text-base md:text-lg font-['Cormorant_Garamond'] italic">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-200">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* 🔥 BUTTONS */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4">

          <button className="btn-primary">
            View All Projects
          </button>

          <button className="btn-outline">
            Book a Consultation
          </button>

        </div>

      </div>
    </div>
  );
}

export default QualitySection;