import ctaImg from "../assets/part2.jpeg";

function FooterSection() {
  return (
    <div className="w-full">

      {/* 🔥 CTA SECTION */}
      <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

        {/* Image */}
        <img
          src={ctaImg}
          alt="cta"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content - bottom left */}
        <div className="absolute inset-0 flex items-end justify-start pb-[100px] pl-10 md:pl-16">

          <div className="text-white">

            <h2 className="text-3xl md:text-5xl italic font-serif leading-tight max-w-xl">
              Your Dream Space <br />
              Starts With One Conversation
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-md">
              We offer a complimentary 30-minute discovery session to understand
              your vision, your space, and how we can bring them together.
            </p>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
              Book a Consultation
            </button>

          </div>
        </div>

      </div>

      {/* 🔥 FOOTER */}

      <div className="bg-black text-white py-16">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row justify-between items-start gap-10">

            {/* LEFT - CONTACT */}
            <div>
              <h3 className="italic font-serif text-lg mb-4">Contact us</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <i className="fa-solid fa-location-dot w-4"></i> 123 Maple Street, Springfield
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <i className="fa-solid fa-phone w-4"></i> +44 7378 261 462
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <i className="fa-solid fa-envelope w-4"></i> alarach@studio.co
                </p>
              </div>
            </div>

            {/* CENTER */}
           <div className="flex flex-col items-center justify-center text-center w-full">
              <h2 className="text-xl font-semibold mb-4">Alarach Studio</h2>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
              </div>
            </div>

            {/* RIGHT - SOCIAL */}
            <div>
              <h3 className="italic font-serif text-lg mb-4">Social links</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <i className="fa-brands fa-instagram w-4"></i> Instagram
                </p>
                <p className="flex items-center gap-2">
                  <i className="fa-brands fa-linkedin w-4"></i> LinkedIn
                </p>
                <p className="flex items-center gap-2">
                  <i className="fa-brands fa-twitter w-4"></i> Twitter
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
            © Alarach Studio Inc. All Rights Reserved.
          </div>

        </div>
      </div>

    </div>
  );
}

export default FooterSection;