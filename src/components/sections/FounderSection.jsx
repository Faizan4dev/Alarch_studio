import founderImg from "../../assets/founder.png";

function FounderSection() {
  return (
    <div className="w-full bg-black text-white py-16 md:py-20 xl:py-24">

      <div className="container-main grid md:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-10 md:gap-14 xl:gap-16 items-center">

        {/* 🔥 LEFT */}
        <div className="flex flex-col items-center text-center">

          <img
            src={founderImg}
            alt="Founder"
            className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full object-cover mb-5 md:mb-6"
          />

          <p className="text-base md:text-lg font-medium">
            Jabir Farooq
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Founder Alarach Studio
          </p>

        </div>

        {/* 🔥 RIGHT */}
        <div className="max-w-[720px] mx-auto text-center">

          <h2 className="heading-section italic mb-5 md:mb-6 text-white">
            Founder’s Message
          </h2>

          <p className=" text-white font-16 mb-4 max-w-[620px] mx-auto">
            With over fifteen years of experience, I lead our studio with a simple belief, every space deserves thoughtful design, precision, and purpose. We go beyond aesthetics to create environments that are timeless, functional, and deeply aligned with our clients’ vision.
          </p>

          <p className="text-white font-16 max-w-[520px] mx-auto">
            At Alarach Studio, our goal is not just to design spaces, but to craft experiences that feel right, inspire confidence, and stand the test of time.
          </p>

        </div>

      </div>

    </div>
  );
}

export default FounderSection;