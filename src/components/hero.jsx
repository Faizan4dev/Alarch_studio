import heroImg from "../assets/hero.jpeg";
import alarch1 from "../assets/alarch1.png";
import prsn1 from "../assets/prsn1.jpeg";
import prsn2 from "../assets/prsn2.jpeg";
import prsn3 from "../assets/prsn3.jpeg";
import prsn4 from "../assets/prsn4.jpeg";
import prsn5 from "../assets/prsn5.jpeg";

function Hero() {
  return (
    <div className="w-full font-sans">

      {/* Top Bar */}
      <div className="bg-black text-white flex items-center justify-center relative px-6 py-[10px]">

        {/* CENTER TEXT */}
        <p className="text-[14px] font-normal text-center font-['DM_Sans']">
          DM us now at WhatsApp <b>+44 7378 261 463</b>
        </p>

        {/* RIGHT ICONS */}
        <div className="absolute right-14 flex gap-4 items-center">

          {/* TikTok */}
          <i className="fab fa-tiktok text-[18px] cursor-pointer hover:opacity-70"></i>

          {/* Instagram */}
          <i className="fab fa-instagram text-[18px] cursor-pointer hover:opacity-70"></i>

        </div>

      </div>

      {/* Navbar */}
      <div className="bg-white border-b px-6 md:px-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Left */}
          <div className="md:w-[190px]">
            <img src={alarch1} alt="Alarach Studio" className="h-10 object-contain" />
          </div>

          {/* Center */}
          <div className="hidden md:flex space-x-10 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#" className="hover:text-black transition">Projects</a>
            <a href="#" className="hover:text-black transition">About Us</a>
            <a href="#" className="hover:text-black transition">Contact Us</a>
          </div>

          {/* Right */}
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Book a Consultation
          </button>

        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="bg-[#fff]">
        <div className="max-w-5xl mx-auto px-12 md:px-10 py-12 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* LEFT */}
          <div className="md:w-[58%]">
            <h1 className="text-[80px] italic font-[500] leading-[100px] tracking-tight text-black font-['Cormorant_Garamond']">
              Spaces That Tell Your Story
            </h1>
          </div>

          {/* RIGHT */}
          <div className="md:w-[34%]">

            {/* Avatar Row */}
            <div className="flex items-center mb-3">

              <img
                src={prsn1}
                className="w-8 h-8 rounded-full object-cover border-2 border-white"
              />

              <img
                src={prsn2}
                className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
              />

              <img
                src={prsn3}
                className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
              />

              <img
                src={prsn4}
                className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
              />

              <img
                src={prsn5}
                className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
              />

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

      {/* HERO IMAGE */}
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