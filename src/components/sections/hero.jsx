import heroImg from "../../assets/hero.jpeg";
import Navbar from "../ui/Navbar";

import prsn1 from "../../assets/prsn1.jpeg";
import prsn2 from "../../assets/prsn2.jpeg";
import prsn3 from "../../assets/prsn3.jpeg";
import prsn4 from "../../assets/prsn4.jpeg";
import prsn5 from "../../assets/prsn5.jpeg";

function Hero() {
  return (
    <div className="w-full font-sans">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <div className="bg-[#fff]">
        <div className="container-main pt-10 pb-8 md:pt-14 md:pb-10 xl:pt-16 xl:pb-12 flex flex-col md:flex-row justify-between items-start gap-8 xl:gap-12">

          {/* LEFT */}
          <div className="w-full md:w-[58%] xl:w-[60%]">

            <h1 className="heading-hero max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px]">
              Spaces That Tell Your Story
            </h1>

          </div>

          {/* RIGHT */}
          <div className="w-full md:w-[34%] xl:w-[30%] mt-4 md:mt-0">

            {/* Avatar Row */}
            <div className="flex items-center mb-3">
              <img src={prsn1} className="w-8 h-8 rounded-full object-cover border-2 border-white" />
              <img src={prsn2} className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2" />
              <img src={prsn3} className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2" />
              <img src={prsn4} className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2" />
              <img src={prsn5} className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2" />
            </div>

            <p className="font-semibold text-sm md:text-base">
              1000+ Happy Clients
            </p>

            <p className="text-body mt-3 max-w-xs xl:max-w-sm">
              We craft bespoke living environments for those who understand that a home is the truest expression of who you are. Serving discerning clientele across Lahore and beyond.
            </p>

            <button className="mt-5 btn-primary">
              Book a Consultation
            </button>

          </div>

        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full border-t">

        <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] xl:h-[520px] 2xl:h-[620px]">
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>

      </div>

    </div>
  );
}

export default Hero;