

import React, { useState } from "react";
import { FiMenu, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";

const Navbar = ({ cartCount, wishlistCount, setShowCart, setShowWishlist }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* Top bar */}
     

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="Gemlay Logo" className="w-10 h-10" />
          <div>
            <h1 className="font-bold text-lg">GEMLAY</h1>
            <p className="text-xs text-green-700">BY GARNET LANEE</p>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Icons Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Wishlist */}
          <div
            className="relative cursor-pointer text-center"
            onClick={() => setShowWishlist(true)}
          >
            <FiHeart className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
            <p className="text-xs">WISHLIST</p>
          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer text-center"
            onClick={() => setShowCart(true)}
          >
            <FiShoppingBag className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-700 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <p className="text-xs">CART</p>
          </div>

          <p className="cursor-pointer text-sm">Hi, Ashish Sood</p>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Search */}
          <div className="relative">
            <FiSearch
              className="text-xl cursor-pointer"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            />
            {isMobileSearchOpen && (
              <input
                type="text"
                placeholder="Search Products..."
                className="absolute top-8 left-0 w-56 border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-green-700 z-50"
              />
            )}
          </div>

          {/* Wishlist Mobile */}
          <div
            className="relative"
            onClick={() => setShowWishlist(true)}
          >
            <FiHeart className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart Mobile */}
          <div
            className="relative"
            onClick={() => setShowCart(true)}
          >
            <FiShoppingBag className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-700 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            <li className="cursor-pointer">NEW ARRIVAL</li>
            <li className="cursor-pointer">RINGS</li>
            <li className="cursor-pointer">EARRINGS</li>
            <li className="cursor-pointer">PENDANTS</li>
            <li className="cursor-pointer">BRACELETS & BANGLES</li>
            <li className="cursor-pointer">SOLITAIRES</li>
            <li className="cursor-pointer">GOLD COINS</li>
            <li className="cursor-pointer">ALL JEWELLERY</li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center space-x-6 bg-white py-2 border-t">
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-green-700">NEW ARRIVAL</li>
          <li className="cursor-pointer hover:text-green-700">RINGS</li>
          <li className="cursor-pointer hover:text-green-700">EARRINGS</li>
          <li className="cursor-pointer hover:text-green-700">PENDANTS</li>
          <li className="cursor-pointer hover:text-green-700">BRACELETS & BANGLES</li>
          <li className="cursor-pointer hover:text-green-700">SOLITAIRES</li>
          <li className="cursor-pointer hover:text-green-700">GOLD COINS</li>
          <li className="cursor-pointer hover:text-green-700">ALL JEWELLERY</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
