
import React from 'react';
import CategoryCard from './CategoryCard';

const CATEGORIES = [
  { id: 1, title: "", image: "cc1.png", style: 'bg-pink-100', textPos: 'side' },
  { id: 2, title: "", image: "b1.png", style: 'bg-brand-dark', textPos: 'bottom' },
  { id: 3, title: "", image: "p1.png", style: 'bg-brand-dark', textPos: 'bottom' },
  { id: 4, title: "", image: "r1.png", style: 'bg-pink-100', textPos: 'side' },
  { id: 5, title: "", image: "b11.png", style: 'bg-brand-dark', textPos: 'bottom' },
  { id: 6, title: "", image: "m1.png", style: 'bg-brand-dark', textPos: 'bottom' },
];

const CategoryGrid = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-500">CATEGORY</h4>
          <h2 className="text-lg text-gray-700 mt-1">DISCOVER YOUR WORLD OF JEWELLERY</h2>
        </div>

      
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
        
          <div className="col-span-2 lg:col-span-2"> 
            <CategoryCard 
              title={CATEGORIES[0].title}
              imageSrc={CATEGORIES[0].image}
              customStyle="bg-red-50"
              textPosition="side"
            />
          </div>

          {/* Cards 2 & 3: BRACELET & PENDANT (Small, 1 per column on all screens) */}
          <div className="col-span-1">
            <CategoryCard
              title={CATEGORIES[1].title}
              imageSrc={CATEGORIES[1].image}
              customStyle="bg-[#001f29] text-white"
              textPosition="bottom"
            />
          </div>
          <div className="col-span-1">
            <CategoryCard
              title={CATEGORIES[2].title}
              imageSrc={CATEGORIES[2].image}
              customStyle="bg-[#001f29] text-white"
              textPosition="bottom"
            />
          </div>

          {/* Card 4: EARRINGS (Large on Desktop) 
             - Mobile: col-span-2 ensures it spans the full 2 columns.
             - Desktop: lg:col-span-2 ensures it spans 2 of the 4 columns.
          */}
          <div className="col-span-2 lg:col-span-2"> 
            <CategoryCard 
              title={CATEGORIES[3].title}
              imageSrc={CATEGORIES[3].image}
              customStyle="bg-red-50"
              textPosition="side"
            />
          </div>
          
          {/* Cards 5 & 6: BANGLES & MANGALSUTRA (Small, 1 per column on all screens) */}
          <div className="hidden sm:block col-span-1">
            <CategoryCard
              title={CATEGORIES[4].title}
              imageSrc={CATEGORIES[4].image}
              customStyle="bg-[#001f29] text-white"
              textPosition="bottom"
            />
          </div>
          <div className="hidden sm:block col-span-1">
            <CategoryCard
              title={CATEGORIES[5].title}
              imageSrc={CATEGORIES[5].image}
              customStyle="bg-[#001f29] text-white"
              textPosition="bottom"
            />
          </div>

        </div>

        {/* Discover All Button */}
        <div className="text-center mt-10">
            <button className="text-base font-semibold tracking-wider uppercase text-gray-800 flex items-center justify-center mx-auto hover:text-gray-900 transition">
                DISCOVER ALL 
                <span className="ml-1 text-lg">▶</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;