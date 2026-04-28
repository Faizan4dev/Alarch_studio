import titleImg from "../../assets/about-title.png";
import img1 from "../../assets/part2.jpeg";
import img2 from "../../assets/hero.jpeg";
import img3 from "../../assets/part2.jpeg";
import img4 from "../../assets/hero.jpeg";
import img5 from "../../assets/part2.jpeg";

const images = [img1, img2, img3, img4, img5];

function AboutHero() {
  return (
    <div className="w-full bg-white">

      {/* 🔥 TITLE */}
      <div className="flex justify-center pt-12 pb-6">
        <img
          src={titleImg}
          alt="Alarach Studio"
          className="w-[260px] sm:w-[420px] md:w-[720px] xl:w-[1080px] 2xl:w-[1200px]"
        />
      </div>

      {/* 🔥 IMAGE STRIP */}
      <div className="pb-12">

        <div className="relative overflow-hidden h-[260px] md:h-[300px] xl:h-[340px]">

          <div className="flex w-max animate-marquee-images gap-5 items-center h-full">
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="about"
                className="h-[200px] md:h-[260px] xl:h-[300px] 
                           w-[280px] md:w-[420px] xl:w-[520px] 
                           object-cover rounded-[35px]"
              />
            ))}
          </div>

        </div>

      </div>

      {/* 🔥 ABOUT SECTION */}
      <div className="container-main py-12 md:py-16 xl:py-20">

        <div className="grid md:grid-cols-[1fr_80px_1fr] xl:grid-cols-[1fr_120px_1fr] items-start">

          {/* LEFT */}
          <h2
            className="
              italic font-['Cormorant_Garamond']
              font-[700]
              text-[42px] sm:text-[56px] md:text-[64px] xl:text-[88px] 2xl:text-[104px]
              leading-[0.95]
              tracking-tight
              max-w-[600px] xl:max-w-[700px]
            "
          >
            About Alarach<br />
            Studio
          </h2>

          {/* GAP */}
          <div className="hidden md:block"></div>

          {/* RIGHT */}
          <div className="max-w-[420px] xl:max-w-[500px] mt-6 md:mt-8">

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Alarach Studio — where architecture meets intention. We design
              spaces that don't just look exceptional but shape how people feel,
              move, and decide. Every detail is crafted to elevate perception,
              increase desirability, and turn spaces into experiences people trust,
              choose, and invest in.
            </p>

            <button className="mt-6 btn-primary">
              Book a Consultation
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutHero;