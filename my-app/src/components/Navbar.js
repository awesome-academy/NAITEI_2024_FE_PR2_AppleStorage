import React from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menu */}
        <div className=" container flex space-x-8 lg:justify-center">
          <div className="flex justify-center space-x-8">
            <div className="text-white text-2xl font-bold"> {/* Logo */}
              <a href="/">
                <img src="apple.png" alt="Apple Logo" className="h-4 w-auto" />
              </a>
            </div>
            <div className="hidden lg:flex space-x-8 text-gray-600 text-xs">
            <a href="/store" className="hover:text-gray-900">Store</a>
            <a href="/mac" className="hover:text-gray-900">Mac</a>
            <a href="/ipad" className="hover:text-gray-900">iPad</a>
            <a href="/iphone" className="hover:text-gray-900">iPhone</a>
            <a href="/watch" className="hover:text-gray-900">Watch</a>
            <a href="/airpods" className="hover:text-gray-900">AirPods</a>
            <a href="/tv" className="hover:text-gray-900">TV & Home</a>
            <a href="/only-on-apple" className="hover:text-gray-900">Only on Apple</a>
            <a href="/accessories" className="hover:text-gray-900">Accessories</a>
            <a href="/support" className="hover:text-gray-900">Support</a>
            </div>
          </div>
            {/* Search and Cart Icons */}
          <div className=" flex items-center space-x-4 text-gray-600 lg:w-0 lg:justify-start w-full justify-end">
            <a href="/search" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.08-4.95a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
              </svg>
            </a>
            <a href="/cart" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h16.5M4.5 7.5h15l-1.25 10.5H5.75L4.5 7.5zM9 7.5v-.75a3.75 3.75 0 117.5 0V7.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center pl-2 ">
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
