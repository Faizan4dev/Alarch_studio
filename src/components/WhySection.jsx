import whyImg from "../assets/part2.jpeg"; // use correct image later

function WhySection() {
  return (
    <div className="bg-[#fff] px-6 py-16">

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* 🔥 LEFT */}
          <div className="md:w-[45%]">

            <h2 className="text-4xl md:text-[56px] italic font-serif leading-tight">
              Why Alarc Studio
            </h2>

            <div className="mt-6 space-y-5 text-sm text-gray-600 leading-relaxed max-w-md">
              <p>
                We design more than rooms. We shape how a space feels the moment you step inside.
              </p>

              <p>
                Every project at Alarc begins with understanding you. How you live, what brings you ease, what reflects your story. That insight is what separates considered design from simple decoration.
              </p>

              <p>
                Our work is defined by architectural precision, refined materials, and an uncompromising attention to detail. Every element is intentional, from light to touch.
              </p>

              <p>
                We take on a limited number of projects to give each one complete focus. The result is not just a beautiful space. It is entirely yours.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
                Book a Consultation
              </button>

              <button className="border border-black px-6 py-3 rounded-full text-sm">
                View projects
              </button>
            </div>

          </div>

          {/* 🔥 RIGHT IMAGE */}
          <div className="md:w-[48%]">
            <div className="w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
              <img
                src={whyImg}
                alt="interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default WhySection;