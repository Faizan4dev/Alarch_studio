import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";

function AboutSection() {
  return (
    <div className="bg-[#fff] px-6 py-20">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* 🔥 TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LEFT */}
          <h2 className="text-4xl md:text-[56px] py-3 font-['Cormorant_Garamond'] leading-tight md:w-[45%]">
            About Alarach Studio
          </h2>

          {/* RIGHT */}
          <div className="md:w-[47%]">
            <p className="text-sm text-gray-600 leading-relaxed">
              Alarc Studio is a design practice focused on creating spaces that feel as thoughtful as they look. Rooted in deep listening, we transform each client's lifestyle and vision into quietly refined environments—where every detail is intentional. From private residences to large-scale commercial projects, our work blends craftsmanship, longevity, and a subtle, lasting sense of beauty.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
                Book a Consultation
              </button>

              <button className="border border-black px-6 py-3 rounded-full text-sm">
                About Us
              </button>
            </div>
          </div>

        </div>

        {/* 🔥 IMAGE ROW */}
        <div className="mt-16 flex gap-6">

          {/* LEFT IMAGE - ~34% width */}
          <div className="w-[34%] min-w-0 h-[400px] overflow-hidden rounded-2xl">
            <img
              src={img1}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* RIGHT IMAGE - ~66% width */}
          <div className="w-[66%] min-w-0 h-[400px] overflow-hidden rounded-2xl">
            <img
              src={img2}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

        </div>

        {/* 🔥 STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center border-t pt-10">

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">500+</h3>
            <p className="text-sm text-gray-500 mt-2">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">73%</h3>
            <p className="text-sm text-gray-500 mt-2">Repeat Clients</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">08</h3>
            <p className="text-sm text-gray-500 mt-2">Ongoing Projects</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">100%</h3>
            <p className="text-sm text-gray-500 mt-2">Client Satisfaction</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutSection;