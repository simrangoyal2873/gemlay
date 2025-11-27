import React from 'react';

// Reusable card component that accepts styling props
const CategoryCard = ({ title, imageSrc, customStyle, textPosition = 'bottom' }) => {
  // Determine if text should be at the bottom (dark background) or side (light background)
  const isBottomText = textPosition === 'bottom';
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl shadow-xl h-full min-h-[250px] cursor-pointer 
        transform transition duration-300 hover:scale-[1.02]
        ${customStyle || ''}
      `}
    >
      {/* Background/Product Image */}
      <img
        src={imageSrc || `https://placehold.co/400x400/fff/333?text=${title}`}
        alt={title}
        className={`
          absolute inset-0 w-full h-full object-cover transition-transform duration-500
          ${isBottomText ? 'opacity-80' : 'opacity-100 '}
        `}
      />

      {/* Overlay/Text Container */}
      <div 
        className={`
          absolute inset-0 p-6 flex items-end justify-start z-10 
          ${isBottomText 
            ? 'bg-black bg-opacity-40' // Dark overlay for bottom text style
            : 'bg-gradient-to-r from-black/5 to-transparent' // Slight gradient for side text style
          }
        `}
      >
        <span 
          className={`
            text-3xl font-extrabold uppercase tracking-wider select-none
            ${isBottomText 
              ? 'text-white' // White text for dark bottom background
              : 'text-gray-900 lg:text-5xl lg:p-4' // Larger, dark text for side placement (Desktop only)
            }
          `}
          // Position the text based on prop
          style={{ 
            position: 'absolute', 
            // Text position for the larger cards (Rings/Earrings)
            top: isBottomText ? 'auto' : '80%', 
            left: isBottomText ? '50%' : '5%', 
            transform: isBottomText ? 'translateX(-50%)' : 'translateY(-50%)',
            bottom: isBottomText ? '24px' : 'auto'
          }}
        >
          {title}
        </span>
      </div>
      
      {/* Decorative Circles (Simulated background element) - Desktop view only */}
      <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden hidden lg:block">
        <div className="absolute w-48 h-48 rounded-full bg-white/50 blur-xl top-10 right-10"></div>
        <div className="absolute w-32 h-32 rounded-full bg-white/40 blur-lg bottom-10 right-24"></div>
      </div>

    </div>
  );
};

export default CategoryCard;