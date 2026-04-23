import medicaid from "../../assets/logos/medicad.png";
import csp from "../../assets/logos/csp.png";
import aviva from "../../assets/logos/aviva.png";
import appi from "../../assets/logos/appi.png";
import cigna from "../../assets/logos/cigna.png";
import caresource from "../../assets/logos/caresource.png";

function LogoStrip() {
  return (
    <div className="bg-[#fff] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-8 opacity-70">

        <img src={medicaid} alt="medicaid" className="h-12 object-contain  grayscale brightness-70" />
        <img src={csp} alt="csp" className="h-12 object-contain  grayscale brightness-70" />
        <img src={aviva} alt="aviva" className="h-12 object-contain grayscale brightness-70" />
        <img src={appi} alt="appi" className="h-12 object-contain  grayscale brightness-70" />
        <img src={cigna} alt="cigna" className="h-12 object-contain  grayscale brightness-70" />
        <img src={caresource} alt="caresource" className="h-12 object-contain  grayscale brightness-70" />

      </div>
    </div>
  );
}

export default LogoStrip;