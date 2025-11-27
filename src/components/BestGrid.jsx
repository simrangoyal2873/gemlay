import { useState } from "react";
import BestSeller from "./BestSeller";

const products = [
  { id: 1, image: "ring.png", title: "Yemeraly Wings Diamond...", price: "₹22,323", originalPrice: "₹25,000", discount: "10% on Making Charges", tag: "TRENDING" },
  { id: 2, image: "tamminya.png", title: "Elegant Necklace...", price: "₹18,500", originalPrice: "₹20,000", discount: "15% off", tag: "NEW" },
  { id: 3, image: "earing.png", title: "Golden Earrings...", price: "₹12,000", originalPrice: "₹14,000", discount: "5% off", tag: "BEST SELLER" },
  { id: 4, image: "bracelets.png", title: "Diamond Bracelet...", price: "₹30,000", originalPrice: "₹32,000", discount: "20% on Making Charges", tag: "TRENDING" },
];

const BestGrid = ({ addToCart, wishlist = [], toggleWishlist }) => {
  const [showAll, setShowAll] = useState(false); // Added state for Discover All

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Title */}
      <section className="py-10 px-4 md:px-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t-2 border-gem-green max-w-[100px] md:max-w-[150px]"></div>
          <h2 className="text-xl md:text-4xl font-extrabold text-gray-800">BEST SELLER</h2>
          <div className="flex-grow border-t-2 border-gem-green max-w-[100px] md:max-w-[150px]"></div>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-gem-green uppercase mt-2">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <BestSeller
            key={product.id}
            product={product}
            addToCart={addToCart}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            hideOnMobile={!showAll && index >= 2} // Hide last 2 only if showAll is false
          />
        ))}
      </div>

      {/* Discover All Button */}
      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 text-[#1b9ffe] font-semibold border-2 border-[#1b9ffe] rounded-full hover:bg-[#1b9ffe] hover:text-white transition"
          >
            DISCOVER ALL ➜
          </button>
        </div>
      )}
    </div>
  );
};

export default BestGrid;
