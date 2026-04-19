function TestimonialSection() {
  return (
    <div className="bg-[#fff] py-24">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* 🔥 HEADING */}
        <h2 className="text-center text-4xl md:text-[56px] italic font-serif">
          Homes Loved, Clients Heard
        </h2>

        {/* 🔥 TESTIMONIALS */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT ARROW */}
          <button className="w-10 h-10 border rounded-full flex items-center justify-center">
            ←
          </button>

          {/* TESTIMONIAL CARD */}
          <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">

            {/* CARD 1 */}
            <div className="max-w-xs mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition..."
              </p>

              <div className="mt-6 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <p className="mt-3 font-serif italic">Dreamattic</p>
                <p className="text-xs text-gray-500">Slovakia</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="max-w-xs mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition..."
              </p>

              <div className="mt-6 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <p className="mt-3 font-serif italic">Roger Francis</p>
                <p className="text-xs text-gray-500">United States</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="max-w-xs mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                "I appreciate Sumair Design Studio’s attentiveness, professionalism, and effective communication. They managed to bring my idea to fruition..."
              </p>

              <div className="mt-6 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <p className="mt-3 font-serif italic">Dreamattic</p>
                <p className="text-xs text-gray-500">Slovakia</p>
              </div>
            </div>

          </div>

          {/* RIGHT ARROW */}
          <button className="w-10 h-10 border rounded-full flex items-center justify-center">
            →
          </button>

        </div>

        {/* 🔥 DOTS */}
        <div className="mt-10 flex justify-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}

export default TestimonialSection;