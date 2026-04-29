import { useState } from "react";

const faqs = [
  {
    question: "How do we begin working together?",
    answer:
      "Every project starts with a complimentary discovery conversation — no forms, no pressure. We simply talk, understand your vision, and determine whether we are the right fit for each other.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "We work across residential and commercial interiors, from single-room transformations to full architectural projects. If the brief is thoughtful and the ambition is high, we are interested.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary with the scale and complexity of each project. A focused residential brief typically runs three to six months. Larger or more layered projects are scoped individually during our initial conversation.",
  },
  {
    question: "Do you work with clients outside your city?",
    answer:
      "Yes. A significant portion of our work is delivered for clients we have never met in person. We have built our process specifically to work seamlessly across distances — without any compromise to the quality of outcome.",
  },
  {
    question: "How involved do I need to be during the process?",
    answer:
      "As involved as you wish to be. Some clients prefer to be consulted at every turn. Others hand us a brief and return to a finished space. We adapt entirely to how you work best.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 md:py-20 xl:py-24 2xl:py-28">

      <div className="container-main max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[2300px]">

        {/* 🔥 HEADING */}
        <div className="text-center mb-10 xl:mb-14 2xl:mb-16">
          <h2 className="heading-section italic">
            Frequently Asked Questions (FAQs)
          </h2>

          <p className="text-body text-gray-500 mt-3">
            The list of frequently asked questions about Starting Project is given below.
          </p>
        </div>

        {/* 🔥 FAQ LIST */}
        <div className="space-y-4 xl:space-y-6 2xl:space-y-7">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl 
                px-5 py-4 
                xl:px-7 xl:py-6 
                2xl:px-9 2xl:py-7"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left gap-6"
              >
                <span className="text-body font-medium max-w-[85%]">
                  {item.question}
                </span>

                <span className="text-lg xl:text-xl 2xl:text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-[500px] mt-4"
                    : "max-h-0"
                }`}
              >
                <p className="text-body text-gray-600">
                  {item.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default FAQSection;