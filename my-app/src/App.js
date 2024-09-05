import React from 'react';
import Navbar from './components/Navbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import NewGen from './components/Newgen';
import StoreTitle from './components/StoreTitle';
import Advertise from './components/Advertise';
import Support from './components/Support';
import { useTranslation } from 'react-i18next';
import './assets/css/global.css';
import'./assets/scripts/i18n';

function App() {
  const {t} = useTranslation();

  return (
    <div>
      <Navbar />
      <LanguageSwitcher />
      <StoreTitle/>
      <Advertise/>
      <div className="whitespace-nowrap flex mx-36 mt-20 font text-2xl">
                <p><strong>{t('lastgen')}.</strong><b className="b" >{t('lastgenqote')}</b></p>
      </div>
      <div>
        <NewGen/>
        <div className="whitespace-nowrap flex mx-36 mt-4 font text-2xl">
                <p><strong>{t('supporttitle')}.</strong><b className="b" >{t('supporqote')}</b></p>
        </div>
        <Support/>
      </div>
    </div>
  );
}

export default App;
