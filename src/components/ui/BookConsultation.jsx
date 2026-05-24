import { useState } from "react";
import { InlineWidget } from "react-calendly";

function BookConsultation({ className = "btn-primary" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        Book a Consultation
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
          {/* MODAL */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white rounded-2xl overflow-hidden
              w-full 
              max-w-[95%]
              md:max-w-[700px]
              xl:max-w-[900px]
              2xl:max-w-[1200px]
            "
          >
            {/* HEADER */}
            <div className="flex justify-between items-center px-5 py-4 border-b">
              <h3 className="font-semibold">
                Book a Consultation
              </h3>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* CALENDLY */}
            <div
              className="
                h-[500px]
                md:h-[600px]
                xl:h-[650px]
                2xl:h-[750px]
              "
            >
              <InlineWidget url="https://calendly.com/alisumair778866/30min" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookConsultation;