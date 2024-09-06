import React, { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          {/* Section: Mua Sắm và Tìm Hiểu */}
          <div>
            <h4 className="text-xs font-semibold mb-4">Mua Sắm và Tìm Hiểu</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Cửa Hàng</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
              <li><a href="#" className="hover:underline">AirPods</a></li>
              <li><a href="#" className="hover:underline">TV & Nhà</a></li>
              <li><a href="#" className="hover:underline">AirTag</a></li>
              <li><a href="#" className="hover:underline">Phụ Kiện</a></li>
              <li><a href="#" className="hover:underline">Ví Apple</a></li>
            </ul>
          </div>

          {/* Section: Tài Khoản */}
          <div>
            <h4 className="text-xs font-semibold mb-4">Tài Khoản</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Quản Lý ID Apple của Bạn</a></li>
              <li><a href="#" className="hover:underline">Tài Khoản Apple Store</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
            <h4 className="text-xs font-semibold mt-6 mb-4">Giải trí</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple One</a></li>
              <li><a href="#" className="hover:underline">Apple TV+</a></li>
              <li><a href="#" className="hover:underline">Apple Music</a></li>
              <li><a href="#" className="hover:underline">Apple Arcade</a></li>
              <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
              <li><a href="#" className="hover:underline">Apple Books</a></li>
            </ul>
          </div>

          {/* Section: Apple Store */}
          <div>
            <h4 className="text-xs font-semibold mb-4">Apple Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Ứng Dụng Apple Store</a></li>
              <li><a href="#" className="hover:underline">Tài Chính</a></li>
              <li><a href="#" className="hover:underline">Apple Trade In</a></li>
              <li><a href="#" className="hover:underline">Tình Trạng Đơn Hàng</a></li>
              <li><a href="#" className="hover:underline">Hỗ Trợ Mua Hàng</a></li>
            </ul>
          </div>

          {/* Section: Dành Cho Doanh Nghiệp */}
          <div>
            <h4 className="text-xs font-semibold mb-4">Dành Cho Doanh Nghiệp</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple và Doanh Nghiệp</a></li>
              <li><a href="#" className="hover:underline">Mua Sắm Cho Doanh Nghiệp</a></li>
            </ul>
            <h4 className="text-xs font-semibold mt-6 mb-4">Cho Giáo Dục</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple và Giáo Dục</a></li>
              <li><a href="#" className="hover:underline">Mua Hàng Cho Bậc Đại Học</a></li>
            </ul>
          </div>

          {/* Section: Dành Cho Chăm Sóc Sức Khỏe */}
          <div>
            <h4 className="text-xs font-semibold mb-4">Dành Cho Chăm Sóc Sức Khỏe</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple trong Chăm Sóc Sức Khỏe</a></li>
              <li><a href="#" className="hover:underline">Sức Khỏe trên Apple Watch</a></li>
            </ul>
          </div>

          {/* Section: Giá Trị Cốt Lõi Của Apple */}
          <div>
            <h4 className="text-xs font-semibold mb-4">Giá Trị Cốt Lõi Của Apple</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Trợ Năng</a></li>
              <li><a href="#" className="hover:underline">Môi Trường</a></li>
              <li><a href="#" className="hover:underline">Quyền Riêng Tư</a></li>
              <li><a href="#" className="hover:underline">Chuỗi Cung Ứng</a></li>
            </ul>
            <h4 className="text-xs font-semibold mt-6 mb-4">Về Apple</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Lãnh Đạo Của Apple</a></li>
              <li><a href="#" className="hover:underline">Nhà Đầu Tư</a></li>
              <li><a href="#" className="hover:underline">Đạo Đức & Quy Tắc</a></li>
              <li><a href="#" className="hover:underline">Sự Kiện</a></li>
              <li><a href="#" className="hover:underline">Liên Hệ Apple</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden text-xs">
          {/* Section: Mua Sắm và Tìm Hiểu */}
          <div className="border-t py-2  ">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('shopping')}>
              Mua Sắm và Tìm Hiểu
            </button>
            {openSection === 'shopping' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">Cửa Hàng</a></li>
                <li><a href="#" className="hover:underline">Mac</a></li>
                <li><a href="#" className="hover:underline">iPad</a></li>
                <li><a href="#" className="hover:underline">iPhone</a></li>
                <li><a href="#" className="hover:underline">Watch</a></li>
                <li><a href="#" className="hover:underline">AirPods</a></li>
                <li><a href="#" className="hover:underline">TV & Nhà</a></li>
                <li><a href="#" className="hover:underline">AirTag</a></li>
                <li><a href="#" className="hover:underline">Phụ Kiện</a></li>
                <li><a href="#" className="hover:underline">Ví Apple</a></li>
              </ul>
            )}
          </div>

          {/* Section: Tài Khoản */}
          <div className="border-t py-2">
            <button className=" text-xs w-full text-left font-semibold py-2" onClick={() => toggleSection('account')}>
              Tài Khoản
            </button>
            {openSection === 'account' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">Quản Lý ID Apple của Bạn</a></li>
                <li><a href="#" className="hover:underline">Tài Khoản Apple Store</a></li>
                <li><a href="#" className="hover:underline">iCloud.com</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('applestore')}>
            Apple Store
            </button>
            {openSection === 'applestore' && (
                <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">Ứng Dụng Apple Store</a></li>
                <li><a href="#" className="hover:underline">Tài Chính</a></li>
                <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                <li><a href="#" className="hover:underline">Tình Trạng Đơn Hàng</a></li>
                <li><a href="#" className="hover:underline">Hỗ Trợ Mua Hàng</a></li>
                </ul>
            )}
            </div>

            <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('entertain')}>
            Giải trí
            </button>
            {openSection === 'entertain' && (
                <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">Apple One</a></li>
                <li><a href="#" className="hover:underline">Apple TV+</a></li>
                <li><a href="#" className="hover:underline">Apple Music</a></li>
                <li><a href="#" className="hover:underline">Apple Arcade</a></li>
                <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
                <li><a href="#" className="hover:underline">Apple Books</a></li>
                </ul>
            )}
            </div>

            <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('forbussiness')}>
            Dành Cho Doanh Nghiệp
            </button>
            {openSection === 'forbussiness' && (
                <ul className="pl-4 space-y-3 mt-3">
                    <li><a href="#" className="hover:underline">Apple và Doanh Nghiệp</a></li>
                    <li><a href="#" className="hover:underline">Mua Sắm Cho Doanh Nghiệp</a></li>
                </ul>
            )}
            </div>

            <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('foredu')}>
            Cho Giáo dục
            </button>
            {openSection === 'foredu' && (
                <ul className="pl-4 space-y-3 mt-3">
                    <li><a href="#" className="hover:underline">Apple và Giáo Dục</a></li>
                    <li><a href="#" className="hover:underline">Mua Hàng Cho Bậc Đại Học</a></li>
                </ul>
            )}
            </div>

            <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('health')}>
            Dành Cho Chăm Sóc Sức Khỏe
            </button>
            {openSection === 'health' && (
                <ul className="pl-4 space-y-3 mt-3">
                    <li><a href="#" className="hover:underline">Apple trong Chăm Sóc Sức Khỏe</a></li>
                    <li><a href="#" className="hover:underline">Sức Khỏe trên Apple Watch</a></li>
                </ul>
            )}
            </div>

            <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('core')}>
            Giá Trị Cốt Lõi Của Apple
            </button>
            {openSection === 'core' && (
                <ul className="pl-4 space-y-3 mt-3">
                    <li><a href="#" className="hover:underline">Trợ Năng</a></li>
                    <li><a href="#" className="hover:underline">Môi Trường</a></li>
                    <li><a href="#" className="hover:underline">Quyền Riêng Tư</a></li>
                    <li><a href="#" className="hover:underline">Chuỗi Cung Ứng</a></li>
                </ul>
            )}
            </div>

            <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('about')}>
            Về Apple
            </button>
            {openSection === 'about' && (
                <ul className="pl-4 space-y-3 mt-3">
                   <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Lãnh Đạo Của Apple</a></li>
              <li><a href="#" className="hover:underline">Nhà Đầu Tư</a></li>
              <li><a href="#" className="hover:underline">Đạo Đức & Quy Tắc</a></li>
              <li><a href="#" className="hover:underline">Sự Kiện</a></li>
              <li><a href="#" className="hover:underline">Liên Hệ Apple</a></li>
                </ul>
            )}
            </div>

          {/*other sections */}
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6 text-center text-xs">
          <p>Xem thêm cách để mua hàng: <a href="#" className="hover:underline text-blue-600">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi 1800-1192.</p>
          <p className="mt-4">Bản quyền © 2024 Apple Inc. Bảo lưu mọi quyền. | <a href="#" className="hover:underline">Chính Sách Quyền Riêng Tư</a> | <a href="#" className="hover:underline">Điều Khoản Sử Dụng</a> | <a href="#" className="hover:underline">Bán Hàng và Hoàn Tiền</a> | <a href="#" className="hover:underline">Pháp Lý</a> | <a href="#" className="hover:underline">Sơ Đồ Trang Web</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
