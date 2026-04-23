import { Link, useLocation } from "react-router-dom";
import alarch1 from "../../assets/alarch1.png";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `hover:text-black transition ${
      location.pathname === path ? "text-black font-medium" : "text-gray-600"
    }`;

  return (
    <div className="w-full">

      {/* TOP BAR */}
      <div className="bg-black text-white flex items-center justify-center relative px-6 py-[10px]">
        <p className="text-[14px] text-center font-['DM_Sans']">
          DM us now at WhatsApp <b>+44 7378 261 463</b>
        </p>

        <div className="absolute right-14 flex gap-4 items-center">
          <i className="fab fa-tiktok text-[18px] cursor-pointer hover:opacity-70"></i>
          <i className="fab fa-instagram text-[18px] cursor-pointer hover:opacity-70"></i>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-white border-b px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="md:w-[190px]">
            <img
              src={alarch1}
              alt="Alarach Studio"
              className="h-10 object-contain"
            />
          </Link>

          {/* LINKS */}
          <div className="hidden md:flex space-x-10 text-sm">

            <Link to="/" className={linkStyle("/")}>
              Home
            </Link>

            <Link to="/projects" className={linkStyle("/projects")}>
              Projects
            </Link>

            <Link to="/about" className={linkStyle("/about")}>
              About Us
            </Link>

            <Link to="/contact" className={linkStyle("/contact")}>
              Contact Us
            </Link>

          </div>

          {/* CTA */}
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Book a Consultation
          </button>

        </div>
      </div>

    </div>
  );
}

export default Navbar;