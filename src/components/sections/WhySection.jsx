import whyImg from "../../assets/why.jpeg";

function WhySection() {
  return (
    <div className="bg-white py-16 md:py-20 xl:py-24">

      <div className="container-main">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-7 xl:gap-5 2xl:gap-7">

          {/* 🔥 LEFT */}
          <div className="w-full md:w-[50%] xl:w-[60%]">

            <h2 className="heading-section max-w-[600px] xl:max-w-[700px]">
              Why Alarch Studio
            </h2>

            <div className="mt-6 space-y-5 text-body max-w-[420px] xl:max-w-[480px] 2xl:max-w-[90%]">

              <p>
                We design more than rooms. We shape how a space feels the moment you step inside.
              </p>

              <p>
                Every project at Alarch begins with understanding you. How you live, what brings you ease, what reflects your story. That insight is what separates considered design from simple decoration.
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
              <button className="btn-primary">
                Book a Consultation
              </button>

              <button className="btn-outline">
                View projects
              </button>
            </div>

          </div>

          {/* 🔥 RIGHT IMAGE */}
          <div className="w-full md:w-[50%] xl:w-[55%] 2xl:w-[55%]">

            <div className="w-full h-[280px] md:h-[360px] xl:h-[460px] 2xl:h-[810px]  rounded-2xl overflow-hidden">

              <div className="img-hover w-full h-full rounded-2xl">
                <img src={whyImg} alt="interior" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default WhySection;