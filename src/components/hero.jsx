import heroImg from "../assets/hero.jpeg";

function Hero() {
  return (
    <div className="w-full font-sans">

      {/* Top Bar */}
      <div className="bg-black text-white text-xs text-center py-2">
        DM us now at WhatsApp +44 7378 261 463
      </div>

      {/* Navbar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Left */}
          <h1 className="text-lg font-semibold tracking-tight">
            Alarach Studio
          </h1>

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
                    <div className="w-7 h-7 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-7 h-7 bg-gray-400 rounded-full border-2 border-white -ml-2"></div>
                    <div className="w-7 h-7 bg-gray-500 rounded-full border-2 border-white -ml-2"></div>
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