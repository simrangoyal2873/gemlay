import React, { useState } from "react";

const categories = [
  { name: "Rings", img: "ring.png" },
  { name: "Earings", img: "earing.png" },
  { name: "Tanmaniya", img: "tamminya.png" },
  { name: "Bangles", img: "bangle.png" },
  { name: "Necklace", img: "necklace.png" },
  { name: "Pendant", img: "pendants.png" },
  { name: "Bracelets", img: "bracelets.png" },
  
];

const CategoryCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < categories.length - 4) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative flex items-center w-full overflow-hidden pt-4 pb-6">
      
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="text-teal-700 text-3xl px-2 disabled:opacity-30"
        disabled={index === 0}
      >
        ‹
      </button>

      {/* Carousel */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 25}%)` }}
        >
          {categories.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-1/4 md:w-1/6 px-2"
            >
              <div className="w-20 h-20 rounded-full border-4 border-teal-700 flex items-center justify-center">
                <img src={item.img} alt={item.name} className="w-14" />
              </div>

              <p className="font-semibold mt-2 text-sm">{item.name}</p>
              <div className="w-5 h-1 bg-teal-700 rounded mt-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="text-teal-700 text-3xl px-2 disabled:opacity-30"
        disabled={index >= categories.length - 4}
      >
        ›
      </button>
    </div>
  );
};

export default CategoryCarousel;
