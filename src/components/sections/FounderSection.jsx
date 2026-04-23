import founderImg from "../../assets/founder.png";

function FounderSection() {
  return (
    <div className="w-full bg-black text-white py-20">

      <div className="max-w-[1440px] mx-auto px-16 grid md:grid-cols-[280px_1fr] gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-center text-center">

          <img
            src={founderImg}
            className="w-[140px] h-[140px] rounded-full object-cover mb-6"
          />

          <p className="text-[20px] font-medium">
            Jabir Farooq
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Founder Alarach Studio
          </p>

        </div>

        {/* RIGHT */}
        <div className="max-w-[720px] mx-auto">

          <h2 className="text-[42px] md:text-[48px] italic font-['Cormorant_Garamond'] mb-6 text-center">
            Founder’s Message
          </h2>

          <p className="text-gray-300 text-[14px] leading-[1.7] mb-4 text-center mx-auto max-w-[620px]">
            With over fifteen years of experience, I lead our studio with a simple belief, every space deserves thoughtful design, precision, and purpose. We go beyond aesthetics to create environments that are timeless, functional, and deeply aligned with our clients’ vision.
          </p>

          <p className="text-gray-300 text-[14px] leading-[1.6] text-center mx-auto max-w-[520px]">
            At Alarach Studio, our goal is not just to design spaces, but to craft experiences that feel right, inspire confidence, and stand the test of time.
          </p>

        </div>

      </div>

    </div>
  );
}

export default FounderSection;