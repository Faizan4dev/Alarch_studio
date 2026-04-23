import alarch from "../../assets/alarch.png";

function Footer() {
  return (
    <div className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LEFT */}
          <div className="md:justify-self-start">
            <h3 className="italic font-serif text-lg mb-4">Contact us</h3>

            <div className="space-y-3 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-base"></i>
                <span>123 Maple Street, Springfield</span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-base"></i>
                <span>+44 7378 261 462</span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-base"></i>
                <span>alarach@studio.co</span>
              </div>

            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center text-center md:justify-self-center">
            <img
              src={alarch}
              className="h-10 mb-5 brightness-0 invert"
              alt="logo"
            />

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#" className="hover:text-white transition">Projects</a>
              <a href="#" className="hover:text-white transition">About Us</a>
              <a href="#" className="hover:text-white transition">Contact Us</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:justify-self-end text-left md:pr-2">
            <h3 className="italic font-serif text-lg mb-4">Social links</h3>

            <div className="space-y-3 text-sm text-gray-400">

              <a href="#" className="flex items-center gap-3 hover:text-white transition">
                <i className="fa-brands fa-instagram text-lg"></i>
                Instagram
              </a>

              <a href="#" className="flex items-center gap-3 hover:text-white transition">
                <i className="fa-brands fa-linkedin text-lg"></i>
                LinkedIn
              </a>

              <a href="#" className="flex items-center gap-3 hover:text-white transition">
                <i className="fa-brands fa-twitter text-lg"></i>
                Twitter
              </a>

            </div>
          </div>

        </div>

        {/* 🔥 FOOTER BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © Alarach Studio Inc. All Rights Reserved.
        </div>

      </div>
    </div>
  );
}

export default Footer;