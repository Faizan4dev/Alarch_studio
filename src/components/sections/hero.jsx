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
      <div className="bg-white">
        <div className="container-main pt-10 md:pt-14 xl:pt-16 pb-8 md:pb-10 xl:pb-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 xl:gap-16">

          {/* LEFT */}
          <div className="w-full md:w-[65%] xl:w-[75%]">

            <h1 className="heading-hero max-w-[520px] md:max-w-[580px] xl:max-w-[90%]">
              Spaces That Tell Your Story
            </h1>

          </div>

          {/* RIGHT */}
          <div className="w-full md:w-[40%] xl:w-[35%] mt-6 md:mt-2 flex flex-col">

            {/* AVATAR ROW */}
            <div className="flex items-center mb-4">
              <img src={prsn1} className="avatar" />
              <img src={prsn2} className="avatar -ml-2 md:-ml-3" />
              <img src={prsn3} className="avatar -ml-2 md:-ml-3" />
              <img src={prsn4} className="avatar -ml-2 md:-ml-3" />
              <img src={prsn5} className="avatar -ml-2 md:-ml-3" />
            </div>

            {/* TEXT */}
            <p className="text-body font-semibold">
              1000+ Happy Clients
            </p>

            <p className="text-body mt-3 max-w-sm xl:max-w-md">
              We craft bespoke living environments for those who understand that a home is the truest expression of who you are. Serving discerning clientele across Lahore and beyond.
            </p>

            {/* BUTTON */}
            <button className="mt-6 btn-primary self-start">
              Book a Consultation
            </button>

          </div>

        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative py-10 w-full border-t">

        <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] xl:h-[520px] 2xl:h-[850px]">
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* GRADIENT FADE */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>

      </div>

    </div>
  );
}

export default Hero;