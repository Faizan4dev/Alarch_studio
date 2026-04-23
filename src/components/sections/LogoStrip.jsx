import medicaid from "../../assets/logos/medicad.png";
import csp from "../../assets/logos/csp.png";
import aviva from "../../assets/logos/aviva.png";
import appi from "../../assets/logos/appi.png";
import cigna from "../../assets/logos/cigna.png";
import caresource from "../../assets/logos/caresource.png";

const logos = [medicaid, csp, aviva, appi, cigna, caresource];

function LogoStrip() {
  return (
   <div className="bg-white py-10 overflow-hidden">

      <div className="flex w-max animate-marquee">

        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-10">
            <img
              src={logo}
              className="h-12 object-contain grayscale brightness-75 opacity-70"
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default LogoStrip;