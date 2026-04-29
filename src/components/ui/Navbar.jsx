import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import alarch from "../../assets/alarch.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    `block py-2 transition ${
      location.pathname === path
        ? "text-black font-medium"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <div className="w-full">

      {/* 🔥 TOP BAR */}
      <div className="bg-black text-white">
        <div className="container-main py-2 flex items-center justify-between">

          {/* LEFT (empty for balance on large screens) */}
          <div className="hidden md:block w-24"></div>

          {/* CENTER TEXT */}
          <p className="text-xs md:text-sm text-center flex-1">
            DM us now at WhatsApp <b>+44 7378 261 463</b>
          </p>

          {/* RIGHT ICONS */}
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
          <Link to="/" className="flex items-center">
            <img
              src={alarch}
              alt="Alarach Studio"
              className="h-8 md:h-10 object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-10 text-body">
            <Link to="/" className={linkStyle("/")}>Home</Link>
            <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
            <Link to="/about" className={linkStyle("/about")}>About Us</Link>
            <Link to="/contact" className={linkStyle("/contact")}>Contact Us</Link>
          </div>

          {/* CTA (desktop only) */}
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
            <div className="container-main py-4 flex flex-col">

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