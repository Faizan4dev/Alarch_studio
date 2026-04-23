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
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

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
    <div className="bg-[#fff] px-6 py-20">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* 🔥 TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LEFT */}
          <h2 className="text-4xl md:text-[56px] py-3 font-['Cormorant_Garamond'] leading-tight md:w-[45%]">
            About Alarach Studio
          </h2>

          {/* RIGHT */}
          <div className="md:w-[47%]">
            <p className="text-sm text-gray-600 leading-relaxed">
              Alarc Studio is a design practice focused on creating spaces that feel as thoughtful as they look. Rooted in deep listening, we transform each client's lifestyle and vision into quietly refined environments—where every detail is intentional. From private residences to large-scale commercial projects, our work blends craftsmanship, longevity, and a subtle, lasting sense of beauty.
            </p>

            <div className="mt-6 flex gap-4">
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
        <div className="mt-16 flex gap-6">

          <div className="w-[34%] min-w-0 h-[400px] rounded-2xl">
            <div className="img-hover w-full h-full rounded-2xl">
              <img src={img1} className="w-full h-full object-cover" alt="" />
            </div>
          </div>

          <div className="w-[66%] min-w-0 h-[400px] rounded-2xl">
            <div className="img-hover w-full h-full rounded-2xl">
              <img src={img2} className="w-full h-full object-cover" alt="" />
            </div>
          </div>

        </div>

        {/* 🔥 STATS */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center border-t pt-10"
        >

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">
              {counts.projects}+
            </h3>
            <p className="text-sm text-gray-500 mt-2">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">
              {counts.clients}%
            </h3>
            <p className="text-sm text-gray-500 mt-2">Repeat Clients</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">
              {String(counts.ongoing).padStart(2, "0")}
            </h3>
            <p className="text-sm text-gray-500 mt-2">Ongoing Projects</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic">
              {counts.satisfaction}%
            </h3>
            <p className="text-sm text-gray-500 mt-2">Client Satisfaction</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutSection;