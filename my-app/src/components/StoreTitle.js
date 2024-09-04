import React from 'react';
import { useTranslation } from 'react-i18next';

const StoreTitle = () => {
  const {t} = useTranslation();
  return (
    <div>
        <div className="flex justify-between">
            <div className="flex mr-40"><p className="font-bold">Cửa Hàng.</p> Cách tốt nhất để mua sản phẩm bạn thích.</div>
            <div>
                <span>
                    <div >
                        Bạn cần trợ giúp mua sắm?
                    </div>
                    <div>
                        Hỏi Chuyên Gia
                    </div>
                </span>
            </div>
        </div>
    </div>
  );
};

export default StoreTitle;
