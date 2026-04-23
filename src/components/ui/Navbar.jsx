import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import alarch1 from "../../assets/alarch1.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    `block py-2 hover:text-black transition ${
      location.pathname === path ? "text-black font-medium" : "text-gray-600"
    }`;

  return (
    <div className="w-full">

      {/* 🔥 TOP BAR */}
      <div className="bg-black text-white px-4 py-[10px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LEFT SPACER */}
          <div className="w-6 md:w-24"></div>

          {/* CENTER TEXT */}
          <p className="text-[14px] text-center font-['DM_Sans'] flex-1">
            DM us now at WhatsApp <b>+44 7378 261 463</b>
          </p>

          {/* RIGHT ICONS */}
          <div className="flex gap-4 items-center">
            <i className="fab fa-tiktok text-[18px] cursor-pointer hover:opacity-70"></i>
            <i className="fab fa-instagram text-[18px] cursor-pointer hover:opacity-70"></i>
          </div>

        </div>
      </div>

      {/* 🔥 NAVBAR */}
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

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-10 text-sm">
            <Link to="/" className={linkStyle("/")}>Home</Link>
            <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
            <Link to="/about" className={linkStyle("/about")}>About Us</Link>
            <Link to="/contact" className={linkStyle("/contact")}>Contact Us</Link>
          </div>

          {/* CTA (desktop only) */}
          <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Book a Consultation
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4">

            <Link to="/" className={linkStyle("/")} onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/projects" className={linkStyle("/projects")} onClick={() => setMenuOpen(false)}>
              Projects
            </Link>

            <Link to="/about" className={linkStyle("/about")} onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/contact" className={linkStyle("/contact")} onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

            {/* CTA */}
            <button className="mt-3 w-full bg-black text-white px-5 py-2 rounded-full text-sm">
              Book a Consultation
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Navbar;