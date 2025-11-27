import React from 'react';

// Data for the four image boxes
const imageBoxes = [
  // Using simplified placeholders based on the previous context
  // NOTE: You should replace these placeholder URLs with your actual image paths
  { id: 1, alt: "Women's Jewelry", image: "women.png", label: "Women" },
  { id: 2, alt: "Men's Jewelry", image: "men.png", label: "Men" },
  { id: 3, alt: "Kids' Jewelry", image: "kids.png", label: "Kids" },
  { id: 4, alt: "Unisex Jewelry", image: "unisex.png", label: "Unisex" },
];

const FourImageBox = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Simple Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">SHOP BY GENDER</h2>
          <p className="text-md text-gray-500 mt-2">Discover our curated collections</p>
        </div>

  
       
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {imageBoxes.map(box => (
            <div 
              key={box.id} 
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer 
                         transition duration-300 hover:shadow-xl hover:scale-[1.01] bg-gray-100"
            >
              <img
                src={box.image}
                alt={box.alt}
                // Image fills the container and covers it while maintaining aspect ratio
                className="w-full h-full object-cover aspect-square" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/cccccc/333333?text=Image"; }}
              />
              
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourImageBox;