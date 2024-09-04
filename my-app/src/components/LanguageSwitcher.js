import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang flex justify-center text xs">
      <button className="" onClick={() => changeLanguage('en')}>En/</button>
      <button className="" onClick={() => changeLanguage('vi')}>Vi</button>
    </div>
  );
};

export default LanguageSwitcher;
