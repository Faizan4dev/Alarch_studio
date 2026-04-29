import { Link } from "react-router-dom";
import { useState } from "react";
import alarch from "../../assets/alarch.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "block py-2 px-3 rounded-md transition-all duration-200 text-gray-600 hover:text-black hover:bg-gray-100/70";

  return (
    <div className="w-full">

      {/* 🔥 TOP BAR */}
      <div className="bg-black text-white">
        <div className="container-main py-2 flex items-center justify-between">

          <div className="hidden md:block w-24"></div>

          <p className="text-xs md:text-sm text-center flex-1">
            DM us now at WhatsApp <b>+44 7378 261 463</b>
          </p>

          <div className="flex gap-4 items-center">
            <i className="fab fa-tiktok text-sm md:text-base cursor-pointer hover:opacity-70"></i>
            <i className="fab fa-instagram text-sm md:text-base cursor-pointer hover:opacity-70"></i>
          </div>

        </div>
      </div>

      {/* 🔥 MAIN NAVBAR */}
      <div className="bg-white border-b">
        <div className="container-main py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/home" className="flex items-center">
            <img
              src={alarch}
              alt="Alarach Studio"
              className="h-8 md:h-10 object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-4 text-body">

            <Link to="/home" className={linkStyle}>
              Home
            </Link>

            <Link to="/projects" className={linkStyle}>
              Projects
            </Link>

            <Link to="/about" className={linkStyle}>
              About Us
            </Link>

            <Link to="/contact" className={linkStyle}>
              Contact Us
            </Link>

          </div>

          {/* CTA */}
          <button className="hidden md:block btn-primary">
            Book a Consultation
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* 🔽 MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t">
            <div className="container-main py-4 flex flex-col gap-2">

              <Link to="/home" className={linkStyle} onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link to="/projects" className={linkStyle} onClick={() => setMenuOpen(false)}>
                Projects
              </Link>

              <Link to="/about" className={linkStyle} onClick={() => setMenuOpen(false)}>
                About Us
              </Link>

              <Link to="/contact" className={linkStyle} onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>

              <button className="mt-4 w-full btn-primary">
                Book a Consultation
              </button>

            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default Navbar;