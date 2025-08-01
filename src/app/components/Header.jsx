"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to the library (optional if you're not using icon strings)
library.add(faMagnifyingGlass, faShoppingCart, faUser);

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      {/* Logo / Site Name (optional) */}
      <div className="text-lg font-bold ">Shoply</div>

      {/* Navigation Links */}
      <nav className="flex-1 text-center">
        <ul className="flex justify-center space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/product" className="hover:underline">Product</a></li>
          <li><a href="#" className="hover:underline">Categories</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </nav>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2  rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className="p-2  rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button className="p-2  rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
}
