import React from 'react';
import { useTranslation } from 'react-i18next';

const StoreTitle = () => {
  const {t} = useTranslation();
  return (
    <div>
        <div className="flex justify-between">
            <div className="flex mr-40"><p className="font-bold">{t('store')}.</p>{t('storeqote')}</div>
            <div>
                <span>
                    <div >
                        {t('needhelp')}
                    </div>
                    <div>
                        {t('ask')}
                    </div>
                </span>
            </div>
        </div>
    </div>
  );
};

export default StoreTitle;
