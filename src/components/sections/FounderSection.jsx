import founderImg from "../../assets/founder.png";

function FounderSection() {
  return (
    <div className="w-full bg-black text-white py-16 md:py-20 xl:py-24 2xl:py-28">

      <div className="
        container-main 
        grid 
        md:grid-cols-[260px_1fr] 
        xl:grid-cols-[320px_1fr] 
        2xl:grid-cols-[420px_1fr] 
        gap-10 md:gap-14 xl:gap-16 2xl:gap-24 
        items-center
      ">

        {/* LEFT */}
        <div className="flex flex-col items-center text-center">

          <img
            src={founderImg}
            alt="Founder"
            className="
              w-[120px] h-[120px]
              md:w-[140px] md:h-[140px]
              xl:w-[180px] xl:h-[180px]
              2xl:w-[260px] 2xl:h-[260px]
              rounded-full object-cover mb-5 md:mb-6 xl:mb-8
            "
          />

          <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium">
            Jabir Farooq
          </p>

          <p className="text-sm md:text-base xl:text-lg text-gray-400 mt-1">
            Founder Alarach Studio
          </p>

        </div>

        {/* RIGHT */}
        <div className="
          w-full
          px-2
          text-center
          max-w-[720px] 
          xl:max-w-[1100px] 
          2xl:max-w-[1400px]
        ">

          <h2 className="heading-section italic flex justify-center mb-5 md:mb-6 xl:mb-8 text-white">
            Founder’s Message
          </h2>

          <p className="text-body text-gray-300 2xl:text-xl">
            With over fifteen years of experience, I lead our studio with a simple belief, every space deserves thoughtful design, precision, and purpose. We go beyond aesthetics to create environments that are timeless, functional, and deeply aligned with our clients’ vision.
          </p>

          <p className="text-body text-gray-300 2xl:text-xl">
            At Alarach Studio, our goal is not just to design spaces, but to craft experiences that feel right, inspire confidence, and stand the test of time.
          </p>

        </div>

      </div>

    </div>
  );
}

export default FounderSection;