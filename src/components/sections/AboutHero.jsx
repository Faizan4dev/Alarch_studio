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
      <div className="container-main flex justify-center pt-12 pb-6 md:pt-14 md:pb-8">
        <img
          src={titleImg}
          alt="Alarch Studio"
          className="h-auto w-[78vw] min-w-[260px] sm:w-[68vw] md:w-[62vw] xl:w-[58vw] 2xl:w-[54vw]"
        />
      </div>

      <div className="pb-12 md:pb-14">
        <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[300px] xl:h-[340px]">
          <div className="flex h-full w-max items-center gap-4 animate-marquee-images md:gap-5">
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="About Alarch Studio"
                className="aspect-[5/3] w-[72vw] rounded-[28px] object-cover sm:w-[52vw] md:w-[38vw] xl:w-[30vw] 2xl:w-[24vw]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-main py-12 md:py-16 xl:py-20">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] xl:items-start xl:gap-[6vw]">
          <h2 className="w-full font-['Cormorant_Garamond'] text-[clamp(3rem,7vw,7rem)] font-[700] italic leading-[0.92] tracking-tight xl:pr-[6vw]">
            About Alarch
            <br />
            Studio
          </h2>

          <div className="w-full xl:justify-self-end xl:pt-6 xl:pl-[2vw]">
            <p className="text-body text-gray-600 xl:w-[92%] 2xl:w-[82%]">
              Alarch Studio - where architecture meets intention. We design spaces that do not just look exceptional but shape how people feel, move, and decide. Every detail is crafted to elevate perception, increase desirability, and turn spaces into experiences people trust, choose, and invest in.
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






// 
// import prsn6 from "../../assets/prsn6.jpg";
// import prsn7 from "../../assets/prsn7.jpg";
// import prsn8 from "../../assets/prsn8.png";
// import prsn9 from "../../assets/prsn9.png";
// import prsn10 from "../../assets/prsn10.png";
// import prsn11 from "../../assets/prsn11.png";
// import prsn12 from "../../assets/prsn12.png";
// import prsn13 from "../../assets/prsn13.jpg";
// import prsn14 from "../../assets/prsn14.png";
// import prsn15 from "../../assets/prsn14.png";

// import flagSK from "../../assets/flagSW.png";
// import flagUS from "../../assets/flagUK.png";
// import flagSK from "../../assets/flagSW.png";
// import flagUS from "../../assets/flagUK.png";
// import flagSK from "../../assets/flagSW.png";
// import flagUS from "../../assets/flagUK.png";
// import flagSK from "../../assets/flagSW.png";
// import flagUS from "../../assets/flagUK.png";
// import flagSK from "../../assets/flagSW.png";
// import flagUS from "../../assets/flagUK.png";