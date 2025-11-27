import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Buy Gold Jewellery Online in India",
      content: `Buying Jewellery Online in India is becoming common these days. 
      Though many people are still sceptical of doing so. Yet, the trend of 
      shopping online for anything and everything is surging exponentially. 
      Garnet Lanee is one among the many reputed brands that deliver all kinds 
      of diamond and gold jewellery direct to your home – Rings, Necklaces, 
      Bracelets, Pendants, et al.

      History tells the folktales of the importance of jewellery in India. 
      Running down through decades, trends and styles may have changed, but 
      emotions attached emanates ditto affection and care.`,
    },
    {
      title: "Variety of options",
      content: "Content for this section...",
    },
    {
      title: "Pay as per your convenience",
      content: "Content for this section...",
    },
    {
      title: "Customize as you like",
      content: "Content for this section...",
    },
    {
      title: "Crowd-free Buying Diamond Jewellery Online in India",
      content: "Content for this section...",
    },
  ];

  return (
    <section className="bg-white py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Accordion Tabs */}
        <div className="space-y-4 border-r border-gray-200 pr-4">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer flex items-center gap-3 text-sm font-medium 
                pb-2 transition-all ${
                  activeIndex === index
                    ? "text-[#007960] border-b-2 border-[#007960]"
                    : "text-gray-700"
                }`}
            >
              <FaPlay
                size={10}
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90 text-[#007960]" : "text-gray-500"
                }`}
              />
              {item.title}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="col-span-2">
          <h3 className="text-[#005C48] font-semibold text-lg mb-4">
            {items[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {items[activeIndex].content}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AccordionSection;
