import ctaImg from "../../assets/foot.jpeg";

function CTA({
  title = "Your Dream Space Starts With One Conversation",
  desc = "We offer a complimentary 30-minute discovery session to understand your vision, your space, and how we can bring them together.",
  buttonText = "Book a Consultation",
}) {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      
      <img src={ctaImg} alt="cta" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex items-end pb-[100px] px-6 md:px-16">
        <div className="text-white max-w-xl">

          <h2 className="text-3xl md:text-5xl italic font-serif leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-200 max-w-md">
            {desc}
          </p>

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
            {buttonText}
          </button>

        </div>
      </div>
    </div>
  );
}

export default CTA;