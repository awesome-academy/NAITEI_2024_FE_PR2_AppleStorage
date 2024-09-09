import React from 'react';
// import { useTranslation } from 'react-i18next';
import "../assets/css/support.css";

const Support = () => {
//   const {t} = useTranslation();
  return (
    <div className="flex mx-36 mt-4 mb-6">
       <div className="support-product">
                    <img src="/specialist-helpjpeg.jpeg" alt="support-product-image" />
                    <div className="support-product-info text-black ml-4">
                        <p className="mt-4 flex text-left justify-start text-xs">CHUYÊN GIA APPLE</p>
                        <h2 className="flex text-left justify-start font-bold">Mua hàng với tư vấn trực tiếp từ Chuyên Gia trực tuyến.  </h2>
                    </div>
                </div>

                <div className="support-product">
                    <img src="/genius.jpeg" alt="product-image" />
                    <div className="support-product-info ml-4">
                        <p className=" mt-4 flex text-left justify-start text-xs support-uu-dai"> </p>
                        <h2 className="flex text-left justify-start font-bold">Dịch vụ và hỗ trợ. Chúng tôi luôn sẵn sàng hỗ trợ.  </h2>
                    </div>
                </div>
    </div>
  );
};

export default Support;
