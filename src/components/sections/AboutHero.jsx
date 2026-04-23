import titleImg from "../../assets/about-title.png";
import img1 from "../../assets/part2.jpeg";
import img2 from "../../assets/hero.jpeg";
import img3 from "../../assets/part2.jpeg";
import img4 from "../../assets/hero.jpeg";
import img5 from "../../assets/part2.jpeg";

function AboutHero() {
  return (
    <div className="w-full bg-white">

      {/* 🔥 BIG TITLE */}
      <div className="max-w-[1000px] mx-auto px-28 pt-12 pb-6">
        <img
          src={titleImg}
          alt="Alarach Studio"
          className="w-full max-w-[900px]"
        />
      </div>

      {/* 🔥 IMAGE STRIP (SCROLLABLE) */}
      <div className="max-w-[1440px] mx-auto px-6 pb-12">

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">

          {[img1, img2, img3, img4, img5].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-[220px] w-[320px] object-cover rounded-2xl flex-shrink-0"
            />
          ))}

        </div>

      </div>

      {/* 🔥 ABOUT TEXT */}
      <div className="max-w-[1440px] mx-auto px-16 pb-16 grid md:grid-cols-2 gap-10 items-center">

            <h2 className="text-[42px] font-[550] md:text-[72px] italic font-['Cormorant_Garamond'] leading-tight">
                About Alarach Studio
            </h2>

            <div className="flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed">
                Alarach Studio — where architecture meets intention. We design
                spaces that don’t just look exceptional but shape how people feel,
                move, and decide. Every detail is crafted to elevate perception,
                increase desirability, and turn spaces into experiences people trust,
                choose, and invest in.
                </p>

                <button className="mt-6 self-end bg-black text-white px-5 py-3 rounded-full text-sm">
                Book a Consultation
                </button>
            </div>

        </div>

    </div>

   
  );
}

export default AboutHero;