import React from "react";

const collections = [
  {
    id: 1,
    img: "collection1.jpg",
    title: "UNVEILING COSMIC ELEGANCE",
    desc: "DISCOVER THE CELESTIAL SPLENDOR",
  },
  {
    id: 2,
    img: "collection2.jpg",
    title: "FEATHER LIGHT FASHION",
    desc: "GRACEFUL GLAMOUR",
  },
  {
    id: 3,
    img: "collection3.jpg",
    title: "LOVE IN JUST TEN BEATS",
    desc: "CAPTIVATING",
  },
  {
    id: 4,
    img: "collection4.jpg",
    title: "ELEVATED WITH DIAMOND WATCH",
    desc: "DAZZLING ACCENTS",
  },
  {
    id: 5,
    img: "collection5.jpg",
    title: "EFFORTLESS STYLE",
    desc: "ENDLESS BEAUTY ON YOUR FINGER",
  },
  {
    id: 6,
    img: "collection6.jpg",
    title: "SOLITAIRE DIAMOND COLLECTION",
    desc: "",
  },
];

const Collections = () => {
  return (
    <section className="py-12 bg-[#f5f8fc] relative">
      {/* Border Frame */}
      <div className=" rounded-xl p-6 md:p-10 max-w-[1200px] mx-auto relative">

        {/* Top Title */}
        <div className="text-center mb-10">
          <h3 className="text-[#0f1c39] font-bold text-xl md:text-2xl uppercase tracking-wide">
            Collections
          </h3>
          <p className="text-[#1b9ffe] text-sm md:text-base tracking-wide">
            Discover Your World Of Jewellery
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 scrollbar-hide">
          {collections.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] md:min-w-0 bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Discover All Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 text-[#1b9ffe] font-semibold border-2 border-[#1b9ffe] rounded-full hover:bg-[#1b9ffe] hover:text-white transition">
            DISCOVER ALL ➜
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
