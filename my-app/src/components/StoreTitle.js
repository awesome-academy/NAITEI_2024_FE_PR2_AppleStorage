import React from 'react';
import { useTranslation } from 'react-i18next';
import "../assets/css/storetitle.css";

const StoreTitle = () => {
  const {t} = useTranslation();
  return (
    <div>
        <div className="flex justify-between mx-36 mt-16">
            <div className="bigtitle flex mr-40 font text-5xl leading-tight">
                <p><strong>{t('store')}.</strong><b className="b" >{t('storeqote')}</b></p>
            </div>
            <div className="flex">
                <img className="w-10 h-10 mr-1"  src="/supportericon.jpeg" alt="icon" />
                <div className="whitespace-nowrap text-sm flex flex-col justify-start">
                    <div className="font-semibold ">
                        {t('needhelp')}
                    </div>
                    <div className="text-blue-600 hover:underline cursor-pointer">
                        {t('ask')}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StoreTitle;
