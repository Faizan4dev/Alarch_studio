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

      {/* ✅ REUSABLE NAVBAR */}
      <Navbar />

      {/* 🔥 HERO CONTENT */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* LEFT */}
          <div className="md:w-[58%]">
            <h1 className="text-[60px] md:text-[80px] italic font-medium leading-[1.1] tracking-tight text-black font-['Cormorant_Garamond']">
              Spaces That Tell Your Story
            </h1>
          </div>

          {/* RIGHT */}
          <div className="md:w-[34%]">

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

            <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xs">
              We craft bespoke living environments for those who understand that a home is the truest expression of who you are. Serving discerning clientele across Lahore and beyond.
            </p>

            <button className="mt-5 bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
              Book a Consultation
            </button>

          </div>

        </div>
      </div>

      {/* 🔥 HERO IMAGE */}
      <div className="w-full border-t">
        <div className="w-full h-[380px] md:h-[460px] overflow-hidden">
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover object-[center_87%]"
          />
        </div>
      </div>

    </div>
  );
}

export default Hero;