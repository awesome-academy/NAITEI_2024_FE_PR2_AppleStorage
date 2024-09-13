import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/newgen.css";
import "../assets/css/acs.css";

const Acs = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/Acs`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

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
                <div className=" w-60 ">
                    <div className="">
                        <p className="flex justify-start"> </p>
                        <h2 className="flex justify-start font-bold"> </h2>
                        <p className="text-left flex justify-start"> </p>
                    </div>
                </div>

                <div className=" w-60 ">
                    <div className="">
                        <p className="flex justify-start"> </p>
                        <h2 className="flex justify-start font-bold"> </h2>
                        <p className="text-left flex justify-start"> </p>
                    </div>
                </div>

                <div className="first-product product">
                    <img src="/store-card-40-iphone-15-pro-202309.jpeg" alt="product-image" />
                    <div className="product-info text-white">
                        <p className="flex justify-start text-xs">IPhone 15 Pro</p>
                        <h2 className="flex justify-start font-bold">Titan</h2>
                        <p className="text-left flex justify-start">Từ 28.999.000đ hoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
                    </div>
                </div>

                 {products.map((product, index) => (
                    <div key={index} className="acs-product">
                        <img className="mx-auto" src={product.image} alt={product.title} />
                        <div className="acs-product-info">
                            <p className="flex justify-start text-xs h-3">{product.new}</p>
                            <h2 className="flex justify-start font-bold text-left h-12 leading-tight">{product.title}</h2>
                            <p className="text-left flex justify-start">{product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Acs;
