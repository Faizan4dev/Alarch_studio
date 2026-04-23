import alarch from "../../assets/alarch.png";

function Footer() {
  return (
    <div className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* LEFT */}
          <div>
            <h3 className="italic font-serif text-lg mb-4">Contact us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot w-4"></i>
                123 Maple Street, Springfield
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone w-4"></i>
                +44 7378 261 462
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope w-4"></i>
                alarach@studio.co
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center text-center w-full">
            <img
              src={alarch}
              className="h-10 mb-4 brightness-0 invert"
              alt="logo"
            />

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="italic font-serif text-lg mb-4">Social links</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p><i className="fa-brands fa-instagram mr-2"></i>Instagram</p>
              <p><i className="fa-brands fa-linkedin mr-2"></i>LinkedIn</p>
              <p><i className="fa-brands fa-twitter mr-2"></i>Twitter</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © Alarach Studio Inc. All Rights Reserved.
        </div>

      </div>
    </div>
  );
}

export default Footer;