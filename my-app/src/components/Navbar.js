import React from 'react';
import '../assets/css/navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menu */}
        <div className="container flex space-x-8 lg:justify-center">
          <div className="flex justify-center space-x-8">
            <div className="text-white text-2xl font-bold"> {/* Logo */}
              <a href="/">
                <img src="apple.png" alt="Apple Logo" className="h-4 w-auto" />
              </a>
            </div>
            <div className="hidden lg:flex space-x-8 text-gray-600 text-xs">
              <div className="relative group">
                <a href="/store" className="hover:text-gray-900">
                  {t('store')}
                </a>
                <div className="absolute hidden group-hover:flex shadow-lg py-4 px-6 dropdown">
                  <div className="grid grid-cols-3 gap-8 text-sm">
                    {/* Column 1 */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Khám Phá Mac</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Khám Phá Tất Cả Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">MacBook Air</a></li>
                        <li><a href="#" className="hover:text-gray-900">MacBook Pro</a></li>
                        <li><a href="#" className="hover:text-gray-900">iMac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac mini</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac Studio</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac Pro</a></li>
                        <li><a href="#" className="hover:text-gray-900">Màn Hình</a></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Mua Mac</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Mua Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Phụ Kiện Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Apple Trade In</a></li>
                        <li><a href="#" className="hover:text-gray-900">Tài Chính</a></li>
                        <li><a href="#" className="hover:text-gray-900">Ưu Đãi Cho Sinh Viên</a></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Tìm Hiểu Thêm Về Mac</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Hỗ Trợ Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">AppleCare+ cho Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Xem Trước macOS Sequoia</a></li>
                        <li><a href="#" className="hover:text-gray-900">Apple Intelligence</a></li>
                        <li><a href="#" className="hover:text-gray-900">Các Ứng Dụng Của Apple</a></li>
                        <li><a href="#" className="hover:text-gray-900">Tính Liên Tục</a></li>
                        <li><a href="#" className="hover:text-gray-900">iCloud+</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac Cho Doanh Nghiệp</a></li>
                        <li><a href="#" className="hover:text-gray-900">Giáo Dục</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <a href="/mac" className="hover:text-gray-900">
                  Mac
                </a>
                <div className="absolute hidden group-hover:flex shadow-lg py-4 px-6 dropdown">
                  <div className="grid grid-cols-3 gap-8 text-sm">
                    {/* Column 1 */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Khám Phá Mac</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Khám Phá Tất Cả Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">MacBook Air</a></li>
                        <li><a href="#" className="hover:text-gray-900">MacBook Pro</a></li>
                        <li><a href="#" className="hover:text-gray-900">iMac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac mini</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac Studio</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac Pro</a></li>
                        <li><a href="#" className="hover:text-gray-900">Màn Hình</a></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Mua Mac</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Mua Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Phụ Kiện Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Apple Trade In</a></li>
                        <li><a href="#" className="hover:text-gray-900">Tài Chính</a></li>
                        <li><a href="#" className="hover:text-gray-900">Ưu Đãi Cho Sinh Viên</a></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Tìm Hiểu Thêm Về Mac</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Hỗ Trợ Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">AppleCare+ cho Mac</a></li>
                        <li><a href="#" className="hover:text-gray-900">Xem Trước macOS Sequoia</a></li>
                        <li><a href="#" className="hover:text-gray-900">Apple Intelligence</a></li>
                        <li><a href="#" className="hover:text-gray-900">Các Ứng Dụng Của Apple</a></li>
                        <li><a href="#" className="hover:text-gray-900">Tính Liên Tục</a></li>
                        <li><a href="#" className="hover:text-gray-900">iCloud+</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mac Cho Doanh Nghiệp</a></li>
                        <li><a href="#" className="hover:text-gray-900">Giáo Dục</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/ipad" className="hover:text-gray-900">iPad</a>
              <a href="/iphone" className="hover:text-gray-900">iPhone</a>
              <a href="/watch" className="hover:text-gray-900">Watch</a>
              <a href="/airpods" className="hover:text-gray-900">AirPods</a>
              <div className="relative group">
                <a href="/tv" className="hover:text-gray-900">
                  {t('tvhome')}
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-4">
                  {/* Dropdown content for TV & Home */}
                  <div className="flex flex-col space-y-2 p-4">
                    <a href="/tv/item1" className="hover:text-gray-900">{t('tvItem1')}</a>
                    <a href="/tv/item2" className="hover:text-gray-900">{t('tvItem2')}</a>
                    {/* Add more dropdown items */}
                  </div>
                </div>
              </div>
              <a href="/only-on-apple" className="hover:text-gray-900">
                {t('entertain')}
              </a>
              <a href="/accessories" className="hover:text-gray-900">
                {t('acs')}
              </a>
              <a href="/support" className="hover:text-gray-900">
                {t('support')}
              </a>
            </div>
          </div>

          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-4 text-gray-600 lg:max-w-14 lg:max-h-5 lg:justify-start w-full justify-end">
            <a href="/search" className="hover:text-gray-400">
              <img className="h-7 w-7" src="find.svg" alt="search icon" />
            </a>
            <a href="/cart" className="hover:text-gray-400">
              <img src="cart.svg" alt="cart icon" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center pl-2">
          <button className="text-gray-600 focus:outline-none">
            <img className="ml-1 h-6 w-6" src="2line.svg" alt="menu icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
