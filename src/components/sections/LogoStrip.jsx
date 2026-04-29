import medicaid from "../../assets/logos/medicad.png";
import csp from "../../assets/logos/csp.png";
import aviva from "../../assets/logos/aviva.png";
import appi from "../../assets/logos/appi.png";
import cigna from "../../assets/logos/cigna.png";
import caresource from "../../assets/logos/caresource.png";

const logos = [medicaid, csp, aviva, appi, cigna, caresource];

function LogoStrip() {
  return (
    <div className="bg-white py-6 md:py-8">

      <div className="relative overflow-hidden">

        {/* 🔥 LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* 🔥 RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* 🔥 MARQUEE */}
        <div className="flex w-max animate-marquee">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 md:px-12 xl:px-24"
            >
              <img
                src={logo}
                alt="logo"
                className="h-8 md:h-14 2xl:h-20 object-contain grayscale opacity-60 transition duration-300 hover:opacity-100"
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default LogoStrip;