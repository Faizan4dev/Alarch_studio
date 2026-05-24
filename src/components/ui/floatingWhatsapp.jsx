function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923326422091"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5 right-5
        md:bottom-6 md:right-6
        z-50
        group
      "
    >

      {/* OUTER GLOW */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-[#25D366]/30
          blur-2xl
          opacity-70
          scale-110
          transition duration-500
          group-hover:scale-125
          group-hover:opacity-100
        "
      ></div>

      {/* MAIN BUTTON */}
      <div
        className="
          relative
          w-14 h-14
          md:w-16 md:h-16
          rounded-full

          bg-gradient-to-br
          from-[#25D366]
          to-[#128C7E]

          border border-white/20

          flex items-center justify-center

          shadow-[0_0_25px_rgba(37,211,102,0.45)]

          backdrop-blur-md

          transition-all duration-300

          group-hover:scale-110
          group-hover:-translate-y-1
          group-hover:shadow-[0_0_40px_rgba(37,211,102,0.75)]
        "
      >

        {/* INNER LIGHT */}
        <div
          className="
            absolute inset-[2px]
            rounded-full
            border border-white/10
          "
        ></div>

        {/* ICON */}
        <i className="fab fa-whatsapp text-white text-[28px] md:text-[32px] relative z-10"></i>

      </div>

    </a>
  );
}

export default FloatingWhatsApp;