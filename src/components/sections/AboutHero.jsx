import BookConsultation from "../ui/BookConsultation";

import titleImg from "../../assets/about-title.png";
import img1 from "../../assets/pop/house15/final_kit.jpg";
import img2 from "../../assets/pop/house17/1.jpg";
import img3 from "../../assets/pop/house21/1.jpg";
import img4 from "../../assets/pop/house24/living4.png";
import img5 from "../../assets/part2.jpeg";
import img6 from "../../assets/pop/scroll/1.jpg";
import img7 from "../../assets/pop/scroll/bed.jpg";
import img8 from "../../assets/pop/scroll/d2.jpg";
import img9 from "../../assets/pop/scroll/e.jpg";
import img10 from "../../assets/pop/house21/2.jpg";
import img11 from "../../assets/pop/scroll/f.jpeg";
import img12 from "../../assets/pop/scroll/g.jpeg";
import img13 from "../../assets/pop/scroll/h.jpeg";



const images = [img1, img2, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

function AboutHero() {
  return (
    <div className="w-full bg-white">

      {/* TITLE IMAGE */}
      <div className="container-main flex justify-center pt-8 pb-1 md:pt-20 md:pb-2 xl:pt-10 xl:pb-2">
        <img
          src={titleImg}
          alt="Alarch Studio"
          className="h-auto w-[78vw] min-w-[260px] sm:w-[68vw] md:w-[62vw] xl:w-[75vw] 2xl:w-[82vw]"
        />
      </div>

      {/* SCROLLING STRIP */}
      <div>
        <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[300px] xl:h-[340px] 2xl:h-[950px]">
          <div className="flex h-full w-max items-center animate-marquee-images md:gap-5">
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="About Alarch Studio"
                className="aspect-[5/3] w-[72vw] rounded-[28px] object-cover sm:w-[52vw] md:w-[38vw] xl:w-[30vw] 2xl:w-[38vw]"
              />
            ))}
          </div>
        </div>
      </div>

    <div className="container-main py-12 md:py-10 xl:py-10 2xl:py-10">

      <div className="
        grid 
        md:grid-cols-2 
        gap-8 md:gap-10 xl:gap-6 2xl:gap-5
        items-start
      ">

        {/* LEFT */}
        <h2 className="
          font-['Cormorant_Garamond'] 
          font-[700] italic 
          leading-[0.95] tracking-tight
          text-[clamp(40px,7vw,160px)]
          max-w-[520px] md:max-w-[600px] xl:max-w-[700px] 
          2xl:max-w-[900px]
        ">
          About Alarch <br /> Studio
        </h2>

        {/* RIGHT */}
        <div className="
          max-w-[420px] md:max-w-[480px] xl:max-w-[520px] 
          2xl:max-w-[800px]
        ">

          <p className="text-body text-gray-600">
            Alarch Studio — where architecture meets intention. We design spaces that do not just look exceptional but shape how people feel, move, and decide. Every detail is crafted to elevate perception, increase desirability, and turn spaces into experiences people trust, choose, and invest in.
          </p>

          <BookConsultation className="mt-6 btn-primary" />

        </div>

      </div>

    </div>

    </div>
  );
}

export default AboutHero;