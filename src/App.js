// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//     </>
//   );
// }

// export default App;



// src/App.jsx
import { useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCarousel from "./components/CategoryCarousel";
import DeliveryOffers from "./components/DeliveryOffers";
import Collections from "./components/Collections";
import ProductGrid from "./components/ProductGrid";
import BestGrid from './components/BestGrid';
import CategoryGrid from './components/CategoryGrid';
import FourImageBox from './components/FourImageBox';
import CustomerReviews from './components/CustomerReviews';
import StayUpdatedSection from './components/StayUpdatedSection';
import Newsletter from './components/Newsletter';
import AccordionSection from './components/AccordionSection';
import SocialHandles from './components/SocialHandles';
import Footer from './components/Footer';
import { CartProvider } from "./components/CartContext";
import { WishlistProvider } from "./components/WishlistContext";

const productsData = [
  { id: 1, image: "/p1.png", title: "Elegant Necklace", price: "1499", originalPrice: "2499", discount: "40%", tag: "Trending" },
  { id: 2, image: "/p2.png", title: "Stylish Ring", price: "1299", originalPrice: "1999", discount: "35%", tag: "New" },
  { id: 3, image: "/p3.png", title: "Gold Bracelet", price: "1199", originalPrice: "1599", discount: "25%", tag: "Bestseller" },
  { id: 4, image: "/p4.png", title: "Diamond Earrings", price: "1799", originalPrice: "2499", discount: "28%", tag: "Trending" },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };
  return (
    <>
     <WishlistProvider />
      <CartProvider />
      <Navbar
      cartCount={cart.length}
        wishlistCount={wishlist.length}
        setShowCart={setShowCart}
        setShowWishlist={setShowWishlist}
      />
      <main>
        {/* The Hero component is where the dark background starts */}
        <Hero /> 
        
        {/* The Category Icons follow immediately after the Hero in your design */}
      
        {/* Add the remaining sections (Special Discount, Express Delivery, etc.) here */}
          <CategoryCarousel />
            <DeliveryOffers />
            <Collections />
             <div className="bg-gray-100 min-h-screen">
      <ProductGrid
        products={productsData}
        addToCart={addToCart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div> 
     <div className="bg-gray-100 min-h-screen">
      <BestGrid 
       products={productsData}
        addToCart={addToCart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
    <CategoryGrid />
   
    <FourImageBox />
    <CustomerReviews />
    <StayUpdatedSection />
    <Newsletter />
    <AccordionSection />
    <SocialHandles />
    <Footer />
     {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50 overflow-auto">
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>
            ))
          )}
          <button
            onClick={() => setShowCart(false)}
            className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      )}

      {/* Wishlist Sidebar */}
      {showWishlist && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50 overflow-auto">
          <h2 className="text-xl font-bold mb-4">Wishlist Items</h2>
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty</p>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>
            ))
          )}
          <button
            onClick={() => setShowWishlist(false)}
            className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>


           
 </div>
      )}

      </main>
    </>
  );
};

export default App;
