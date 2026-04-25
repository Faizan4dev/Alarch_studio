import ctaImg from "../../assets/foot.jpeg";

function CTA({
  title = "Your Dream Space Starts With One Conversation",
  desc = "We offer a complimentary 30-minute discovery session to understand your vision, your space, and how we can bring them together.",
  buttonText = "Book a Consultation",
}) {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* IMAGE */}
      <img
        src={ctaImg}
        alt="cta"
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">

        {/* 🔥 DESKTOP PERFECT (Figma) + RESPONSIVE SAFE */}
        <div className="
          w-full
          px-6 md:px-12 
          xl:px-[96px]
        ">

          <div className="
            text-white
            max-w-full
            xl:max-w-[600px]
            xl:pl-0
          ">

            {/* H4 */}
            <h2 className="
              italic font-['Cormorant_Garamond']
              text-2xl sm:text-3xl md:text-4xl xl:text-[48px]
              leading-tight
            ">
              {title}
            </h2>

            {/* PARAGRAPH */}
            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-md">
              {desc}
            </p>

            {/* BUTTON */}
            <button className="mt-6 bg-white text-black px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base transition duration-300 hover:bg-gray-200 active:scale-95">
              {buttonText}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CTA;