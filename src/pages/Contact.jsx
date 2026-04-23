import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <h1 className="text-4xl italic font-['Cormorant_Garamond'] mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 text-sm">
            We're currently working on this page 🚧
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;