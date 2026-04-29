import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";

function AboutSection() {
  return (
    <div className="bg-white py-20">

      <div className="container-main">

        {/* 🔥 TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-7">

          {/* LEFT */}
          <h2 className="heading-section max-w-[600px] xl:max-w-[700px] 2xl:max-w-[60%]">
            About Alarach Studio
          </h2>

          {/* RIGHT */}
          <div className="max-w-[420px] xl:max-w-[500px] 2xl:max-w-[50%]">

            <p className="text-body text-gray-600">
              Alarach Studio is a design practice focused on creating spaces that feel
              as thoughtful as they look. Rooted in deep listening, we transform each
              client’s lifestyle and vision into quietly refined environments—where
              every detail is intentional. From private residences to large-scale
              commercial projects, our work blends craftsmanship, longevity, and a
              subtle, lasting sense of beauty.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="btn-primary">
                Book a Consultation
              </button>

              <button className="btn-outline">
                About Us
              </button>
            </div>

          </div>

        </div>

        {/* 🔥 IMAGE ROW */}
        <div className="mt-16 flex flex-col md:flex-row gap-6">

          {/* LEFT IMAGE */}
          <div className="md:w-[36%] h-[280px] md:h-[360px] xl:h-[400px] 2xl:h-[600px] rounded-2xl overflow-hidden">
            <img src={img1} className="w-full h-full object-cover" alt="" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-[64%] h-[280px] md:h-[360px] xl:h-[400px] 2xl:h-[600px] rounded-2xl overflow-hidden">
            <img src={img2} className="w-full h-full object-cover" alt="" />
          </div>

        </div>

        {/* 🔥 STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center border-t pt-10">

          <div className="relative">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-serif italic">
              500+
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Projects Delivered
            </p>

            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"></span>
          </div>

          <div className="relative">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-serif italic">
              73%
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Repeat Clients
            </p>

            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"></span>
          </div>

          <div className="relative">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-serif italic">
              08
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Ongoing Projects
            </p>

            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"></span>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-serif italic">
              100%
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutSection;