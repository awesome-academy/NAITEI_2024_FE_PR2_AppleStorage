import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/newgen.css";

const NewGen = () => {
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
                    <div className="product-info text-white">
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

                <div className="product">
                    <img src="/store-card-40-iphone-15-pro-202309.jpeg" alt="product-image" />
                    <div className="product-info text-white">
                        <p className="flex justify-start text-xs">IPhone 15 Pro</p>
                        <h2 className="flex justify-start font-bold">Titan</h2>
                        <p className="text-left flex justify-start">Từ 28.999.000đ hoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
                    </div>
                </div>

                <div className="product">
                    <img src="store-card-40-bts-offer-featured-202406_GEO_VN.jpeg" alt="product-image" />
                    <div className="product-info">
                        <p className="flex text-left justify-start text-xs uu-dai">ƯU ĐÃI TRONG THỜI GIAN CÓ HẠN.</p>
                        <h2 className="flex text-left justify-start font-bold">Tiết kiệm khi mua Mac hoặc iPad để học đại học.</h2>
                        <p className="text-left flex justify-start">Đồng thời nhận thêm AirPods khi mua Mac◊◊◊, Apple Pencil khi mua iPad◊◊◊, giảm 20% AppleCare+°°°, và hơn thế nữa.</p>
                    </div>
                </div>

                <div className="product">
                    <img src="store-card-40-ipad-pro-202405.jpeg" alt="product-image" />
                    <div className="product-info">
                        <p className="flex justify-start text-xs text-white">IPAD PRO</p>
                        <h2 className="flex justify-start font-bold text-white">Mỏng xuất chúng.</h2>
                        <p className="text-left flex justify-start text-white">Từ 28.999.000đ hoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
                    </div>
                </div>
                
                <div className="product">
                    <img src="store-card-40-macbook-air-202402.jpeg" alt="product-image" />
                    <div className="product-info">
                        <p className="flex justify-start text-xs ">MACBOOK AIR</p>
                        <h2 className="flex justify-start font-bold">Được thiết kế để đi muôn nơi.</h2>
                        <p className="text-left flex justify-start">Từ 24.999.000đ hoặc 1.018.000đ/thángmỗi tháng trong 24 tháng*</p>
                    </div>
                </div>

                <div className="product">
                    <img src="store-card-40-ipad-air-202405.png" alt="product-image" />
                    <div className="product-info">
                        <p className="flex justify-start text-xs">IPAD AIR</p>
                        <h2 className="flex justify-start font-bold">Mới Mẻ.</h2>
                        <p className="text-left flex justify-start">Từ 16.999.000đ hoặc 692.000đ/thángmỗi tháng trong 24 tháng*</p>
                    </div>
                </div>

                <div className="product">
                    <div className="product-info text-white">
                        <p className="flex justify-start"> </p>
                        <h2 className="flex justify-start font-bold"> </h2>
                        <p className="text-left flex justify-start"> </p>
                    </div>
                </div>
                
            </Slider>
        </div>
    );
};

export default NewGen;
