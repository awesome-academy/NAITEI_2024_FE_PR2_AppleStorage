import React from 'react';
import Navbar from './components/Navbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import NewGen from './components/Newgen';
import StoreTitle from './components/StoreTitle';
import Advertise from './components/Advertise';
import Footer from './components/Footer';
import Headphone from './components/Headphone';
import Support from './components/Support';
import Ad2 from './components/Ad2';
import Acs from './components/Acs';
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
        <div className="whitespace-nowrap flex mx-36 mt-14 font text-2xl">
                <p><strong>{t('supporttitle')}.</strong><b className="b" >{t('supporqote')}</b></p>
        </div>
        <Ad2/>
        <div className="whitespace-nowrap flex mx-36 mt-14 font text-2xl">
                <p><strong>{t('supporttitle')}.</strong><b className="b" >{t('supporqote')}</b></p>
        </div>
        <Acs/>
        <div className="whitespace-nowrap flex mx-36 mt-14 font text-2xl">
                <p><strong>{t('supporttitle')}.</strong><b className="b" >{t('supporqote')}</b></p>
        </div>
        <Headphone/>
        <div className="border-t-2 mx-40 mt-14">
          <Footer/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
