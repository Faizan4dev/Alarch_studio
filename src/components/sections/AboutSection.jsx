import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";

function AboutSection() {

  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    ongoing: 0,
    satisfaction: 0,
  });

  // 🔥 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔥 Counter animation
  useEffect(() => {
    if (!startCount) return;

    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;

    const targets = {
      projects: 500,
      clients: 73,
      ongoing: 8,
      satisfaction: 100,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setCounts({
        projects: Math.min(Math.floor((targets.projects / steps) * currentStep), targets.projects),
        clients: Math.min(Math.floor((targets.clients / steps) * currentStep), targets.clients),
        ongoing: Math.min(Math.floor((targets.ongoing / steps) * currentStep), targets.ongoing),
        satisfaction: Math.min(Math.floor((targets.satisfaction / steps) * currentStep), targets.satisfaction),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [startCount]);

  return (
    <div className="bg-white py-16 md:py-20 xl:py-24">

      {/* 🔥 CONTAINER */}
      <div className="container-main">

        {/* 🔥 TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-7">

          {/* LEFT */}
          <h2 className="heading-section max-w-[600px] xl:max-w-[700px] 2xl:max-w-[60%]">
            About Alarach Studio
          </h2>

          {/* RIGHT */}
          <div className="max-w-[420px] xl:max-w-[500px] 2xl:max-w-[50%]">

            <p className="text-body text-gray-600">
              Alarach Studio is a design practice focused on creating spaces that feel
              as thoughtful as they look. Rooted in deep listening, we transform each
              client’s lifestyle and vision into quietly refined environments—where
              every detail is intentional. From private residences to large-scale
              commercial projects, our work blends craftsmanship, longevity, and a
              subtle, lasting sense of beauty.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="btn-primary">
                Book a Consultation
              </button>

              <button className="btn-outline">
                About Us
              </button>
            </div>

          </div>

        </div>

        {/* 🔥 IMAGE ROW */}
        <div className="mt-16 flex flex-col md:flex-row gap-6">

          {/* LEFT IMAGE */}
          <div className="img-hover md:w-[36%] h-[280px] md:h-[360px] xl:h-[400px] 2xl:h-[650px] rounded-2xl overflow-hidden">
            <img src={img1} className="w-full h-full object-cover" alt="" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="img-hover md:w-[64%] h-[280px] md:h-[360px] xl:h-[400px] 2xl:h-[650px] rounded-2xl overflow-hidden">
            <img src={img2} className="w-full h-full object-cover" alt="" />
          </div>

        </div>

        {/* 🔥 STATS */}
        <div
          ref={statsRef}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 text-center border-t pt-8 md:pt-10 gap-y-6"
        >

          <div>
            <h3 className="font-serif italic text-[32px] md:text-[48px] font-bold">
              {counts.projects}+
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="font-serif italic text-[32px] md:text-[48px] font-bold">
              {counts.clients}%
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Repeat Clients
            </p>
          </div>

          <div>
            <h3 className="font-serif italic text-[32px] md:text-[48px] font-bold">
              {String(counts.ongoing).padStart(2, "0")}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Ongoing Projects
            </p>
          </div>

          <div>
            <h3 className="font-serif italic text-[32px] md:text-[48px] font-bold">
              {counts.satisfaction}%
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutSection;