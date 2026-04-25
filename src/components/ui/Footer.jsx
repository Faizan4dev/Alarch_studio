import { Link } from "react-router-dom";
import alarch from "../../assets/alarch.png";

function Footer() {
  return (
    <div className="w-full bg-black text-white">

      {/* 🔥 FULL WIDTH WRAPPER (fix) */}
      <div className="py-14 md:py-16 px-6 md:px-12 xl:px-[96px]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start text-center md:text-left">

          {/* LEFT */}
          <div className="md:justify-self-start">

            <h3 className="italic font-['Cormorant_Garamond'] text-lg md:text-xl xl:text-[24px] mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm md:text-base text-gray-400">

              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fa-solid fa-location-dot"></i>
                <span>123 Maple Street, Springfield</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fa-solid fa-phone"></i>
                <span>+44 7378 261 462</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fa-solid fa-envelope"></i>
                <span>alarach@studio.co</span>
              </div>

            </div>

          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">

            <img
              src={alarch}
              alt="logo"
              className="w-[160px] md:w-[190px] xl:w-[215px] h-auto mb-5 brightness-0 invert"
            />

            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-400">

              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>

              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>

              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className="md:justify-self-end">

            <h3 className="italic font-['Cormorant_Garamond'] text-lg md:text-xl xl:text-[24px] mb-4 text-center md:text-left">
              Social Links
            </h3>

            <div className="space-y-3 text-sm md:text-base text-gray-400">

              <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition">
                <i className="fa-brands fa-instagram"></i>
                Instagram
              </a>

              <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition">
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
              </a>

              <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition">
                <i className="fa-brands fa-twitter"></i>
                Twitter
              </a>

            </div>

          </div>

        </div>

        {/* 🔥 FOOTER BOTTOM */}
        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 text-center text-xs md:text-sm text-gray-500">
          © Alarch Studio Inc. All Rights Reserved.
        </div>

      </div>

    </div>
  );
}

export default Footer;