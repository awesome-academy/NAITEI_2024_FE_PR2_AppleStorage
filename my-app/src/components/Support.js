import React from 'react';
import { useTranslation } from 'react-i18next';
import "../assets/css/support.css";

const Support = () => {
  const {t} = useTranslation();
  return (
    <div className="flex mx-36 mt-4 mb-6">
       <div className="support-product">
                    <img src="/specialist-helpjpeg.jpeg" alt="support-product-image" />
                    <div className="support-product-info text-black ml-4">
                        <p className="mt-4 flex text-left justify-start text-xs">{t('specialist')}</p>
                        <h2 className="flex text-left justify-start font-bold"> {t('specialistQote')} </h2>
                    </div>
                </div>

                <div className="support-product">
                    <img src="/genius.jpeg" alt="product-image" />
                    <div className="support-product-info ml-4">
                        <p className=" mt-4 flex text-left justify-start text-xs support-uu-dai"> </p>
                        <h2 className="flex text-left justify-start font-bold">{t('specialistQote2')} </h2>
                    </div>
                </div>
    </div>
  );
};

export default Support;
