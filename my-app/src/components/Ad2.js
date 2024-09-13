import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/ad2.css";

const Ad2 = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1, 
    };

    return (
        <div className="new-generation-section overflow-hidden">
            <Slider {...settings}>
                <div className="product w-60 ">
                    <div className="ad2-product-info text-white">
                        <p className="flex justify-start"> </p>
                        <h2 className="flex justify-start font-bold"> </h2>
                        <p className="text-left flex justify-start"> </p>
                    </div>
                </div>

                <div className="product">
                    <div className="product-info text-white">
                        <p className="flex justify-start"> </p>
                        <h2 className="flex justify-start font-bold"> </h2>
                        <p className="text-left flex justify-start"> </p>
                    </div>
                </div>

                <div className="ad2-product">
                    <img src="/31.svg" alt="product-image" />
                    <div className="ad2-product-info">
                        <h2 className="text-left justify-start font-bold pr-10"><b>Trải nghiệm</b> <b className="blue">mua sắm </b> <b className="blue">được cá nhân hóa</b> với <b className="blue">ứng dụng Apple Store.</b></h2>
                    </div>
                </div>

                <div className="ad2-product">
                    <img src="/32.svg" alt="product-image" />
                    <div className="ad2-product-info">
                        <h2 className="text-left justify-start font-bold pr-10"><b className="blue">Đổi thiết bị cũ đủ điều kiện,</b>   nhận điểm tín dụng để mua thiết bị mới.</h2>
                    </div>
                </div>

                <div className="ad2-product">
                    <img src="/33.svg" alt="product-image" />
                    <div className="ad2-product-info">
                        <h2 className="text-left justify-start font-bold pr-10"><b>Thanh toán hàng tháng thật dễ dàng. Bao gồm lựa chọn </b> <b className="green">lãi suất 0%</b> </h2>
                    </div>
                </div>
                
                <div className="ad2-product">
                    <img src="/34.svg" alt="product-image" />
                    <div className="ad2-product-info">
                        <h2 className="text-left justify-start font-bold pr-10"><b>Thêm dấu ấn của riêng bạn. </b> <b className="purple">Khắc kết hợp biểu tượng cảm xúc, tên và số miễn phí. </b> </h2>
                    </div>
                </div>

                <div className="ad2-product">
                    <img src="/35.svg" alt="product-image" />
                    <div className="ad2-product-info">
                        <h2 className="text-left justify-start font-bold pr-10"><b className="gardient">Tùy chỉnh</b>  Mac của bạn và tạo phong cách riêng cho Apple Watch.</h2>
                    </div>
                </div>

                <div className="ad2-product">
                    <img src="/36.svg" alt="product-image" />
                    <div className="ad2-product-info">
                        <h2 className="text-left justify-start font-bold pr-10 translate-y-10"><b>Giao hàng miễn phí.</b> </h2>
                    </div>
                </div>

                <div className="ad2-product">
                    <div className="ad2-product-info text-white">
                        <p className="flex justify-start"> </p>
                        <h2 className="flex justify-start font-bold"> </h2>
                        <p className="text-left flex justify-start"> </p>
                    </div>
                </div>
                
            </Slider>
        </div>
    );
};

export default Ad2;
