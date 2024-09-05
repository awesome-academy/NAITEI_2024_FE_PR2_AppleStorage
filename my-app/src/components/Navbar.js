import React from 'react';
import '../assets/css/navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const {t} = useTranslation();
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
            <a href="/store" className="hover:text-gray-900">{t('store')}</a>
            <a href="/mac" className="hover:text-gray-900">Mac</a>
            <a href="/ipad" className="hover:text-gray-900">iPad</a>
            <a href="/iphone" className="hover:text-gray-900">iPhone</a>
            <a href="/watch" className="hover:text-gray-900">Watch</a>
            <a href="/airpods" className="hover:text-gray-900">AirPods</a>
            <a href="/tv" className="hover:text-gray-900">{t('tvhome')}</a>
            <a href="/only-on-apple" className="hover:text-gray-900">{t('entertain')}</a>
            <a href="/accessories" className="hover:text-gray-900">{t('acs')}</a>
            <a href="/support" className="hover:text-gray-900">{t('support')}</a>
            </div>
          </div>
            {/* Search and Cart Icons */}
          <div className=" flex items-center space-x-4 text-gray-600 lg:max-w-14 lg:max-h-5 lg:justify-start w-full justify-end">
            <a href="/search" className="hover:text-gray-400">
              <img className="h-7 w-7" src="find.svg" alt="a" />
            </a>
            <a href="/cart" className="hover:text-gray-400">
              <img src="cart.svg" alt="a" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center pl-2 ">
          <button className="text-gray-600 focus:outline-none">
            
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
