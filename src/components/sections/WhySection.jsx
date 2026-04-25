import whyImg from "../../assets/why.jpeg";

function WhySection() {
  return (
    <div className="bg-white py-16 md:py-20 xl:py-24">

      {/* 🔥 CONTAINER */}
      <div className="container-main">

        <div className="flex flex-col md:flex-row items-center gap-10 xl:gap-16">

          {/* 🔥 LEFT */}
          <div className="w-full md:w-[45%]">

            <h2 className="heading-section italic font-64px font-[700]">
              Why Alarch Studio
            </h2>

            <div className="mt-6 space-y-5 text-body max-w-md">

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
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="btn-primary">
                Book a Consultation
              </button>

              <button className="btn-outline" >
                View projects
              </button>

            </div>

          </div>

          {/* 🔥 RIGHT IMAGE */}
          <div className="w-full md:w-[48%]">

            <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] xl:h-[480px] rounded-2xl">

              <div className="img-hover w-full h-full rounded-2xl">
                <img
                  src={whyImg}
                  alt="interior"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default WhySection;