import React from 'react';
import { useTranslation } from 'react-i18next';

const Advertise = () => {
  const {t} = useTranslation();
  return (
    <div className="flex mx-36 mt-20 ">
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="mac.png" alt="mac" />
            <div className="mt-2">Mac</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="iphone.png" alt="iphone" />
            <div className="mt-2">iPhone</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="ipad.png" alt="" />
            <div className="mt-2">iPad</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="watch.png" alt="" />
            <div className="mt-2">Apple Watch</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="airpod.png" alt="" />
            <div className="mt-2">AirPods</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="airtag.png" alt="" />
            <div className="mt-2">AirTags</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="tv.png" alt="" />
            <div className="mt-2">Apple TV 4K</div>
        </div>
        <div className="text-center font-semibold mx-auto">
            <img className="w-32 " src="acs.png" alt="" />
            <div className="mt-2">{t('acs')}</div>
        </div>
    </div>
  );
};

export default Advertise;
