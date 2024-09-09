import React from 'react';
import '../assets/css/cart.css'

const Cart = () => {
  const product = {
    name: 'Apple Pencil Pro',
    price: 3499000,
    quantity: 1,
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX2D3?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1713841707336',
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tổng giá trị giỏ hàng */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Xin lưu ý rằng chúng tôi không chấp nhận đổi trả đối với các đơn hàng trực tuyến.
        </p>
        <h2 className="text-3xl font-semibold mt-4">
          Tổng giá trị giỏ hàng của bạn là {product.price.toLocaleString()}đ.
        </h2>
        <p className="text-sm text-gray-500">Vận chuyển miễn phí đối với mọi đơn hàng.</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full">
          Thanh Toán
        </button>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="border-y border-gray-300 mt-6 ">
        <div className="flex gap-y-20 items-center py-6">
          <img src={product.image} alt={product.name} className="w-56" />
            <div className="w-full">
                <div className="flex justify-between items-center gap-x-14 pt-6">
                    <div className="">
                        <div className="whitespace-nowrap block text-xl font-semibold">{product.name}</div>
                    </div>

                    <div className="flex items-center mt-2 ">
                        <select
                            className=" text-2xl font-medium px-2 py-1"
                            value={product.quantity}
                            onChange={() => {}}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>

                    <div className="text-right">
                        <span className="block text-xl font-semibold">{product.price.toLocaleString()}đ</span>
                    </div>
                </div>
                <div className='flex justify-end items-end w-full'>
                    <div>
                        <div className="flex text-blue-500 hover:underline mt-2 justify-end items-end mb-4">Xóa</div>
                        <div className="text-blue-500 hover:underline mb-6">Lưu để xem lại sau</div>
                    </div>
                </div>
                <div className="flex justify-between text-sm  border-y border-gray-300 pt-4 w-full ">
                    <div className="flex font-medium text-xl items-center mb-4 justify-between w-full ">
                        <div className="whitespace-nowrap">Thêm khắc chữ miễn phí</div>
                        <div className="text-blue-500 ml-2 flex w-full justify-end">Thêm</div>
                    </div>
                </div>

                <div className="flex-col items-center mt-4 mb-20">
                    <div>Còn hàng </div>
                    
                    <div ><span >Tùy chọn giao hàng cho:</span> <button className="text-blue-500">Chọn quận</button></div>
                </div>
            </div>
        </div>
            
        
        
      </div>
      <div>
            <div>Tổng Số Tiền Bạn Cần Thanh Toán</div>
            <div>{product.price.toLocaleString()}đ</div>
        </div>
    </div>
  );
};

export default Cart;
