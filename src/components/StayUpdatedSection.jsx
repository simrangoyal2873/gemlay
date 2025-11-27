import React from "react";

const newsData = [
  {
    id: 1,
    logo: "business-line.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410M in latest round.",
  },
  {
    id: 2,
    logo: "economic-line.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410M in latest round.",
  },
  {
    id: 3,
    logo: "india-today.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410M in latest round.",
  },
  {
    id: 4,
    logo: "business-line.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410M in latest round.",
  },
];

const StayUpdatedSection = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Title */}
      <div className="text-center mb-14">
        <h3 className="text-sm uppercase tracking-widest text-[#09A6A3]">
          Stay Update with Us
        </h3>
        <p className="text-xs tracking-widest text-gray-500 mt-1">
          Know about what others think
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-20">
        {newsData.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-all 
            ${index > 0 ? "hidden sm:flex" : "flex"}`}
          >
            <img
              src={item.logo}
              alt="news logo"
              className="h-14 object-contain mb-8"
            />

            <p className="text-[12px] text-gray-600 leading-relaxed mb-8">
              {item.text}
            </p>

            <button className="bg-[#d7f5f3] text-gray-700 rounded-full text-[11px] font-medium px-6 py-2 hover:bg-[#09A6A3] hover:text-white transition">
              READ MORE
            </button>
          </div>
        ))}
      </div>

      {/* Discover Button */}
      <div className="flex justify-center mt-12">
        <button className="border border-[#09A6A3] rounded-full px-8 py-2 text-xs text-[#09A6A3] font-semibold hover:bg-[#09A6A3] hover:text-white transition">
          DISCOVER ALL →
        </button>
      </div>
    </section>
  );
};

export default StayUpdatedSection;
