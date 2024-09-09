import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          <div>
            <h4 className="text-xs font-semibold mb-4">{t('shoppingAndLearning')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('store')}</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
              <li><a href="#" className="hover:underline">AirPods</a></li>
              <li><a href="#" className="hover:underline">{t('tvhome')}</a></li>
              <li><a href="#" className="hover:underline">AirTag</a></li>
              <li><a href="#" className="hover:underline">{t('acs')}</a></li>
              <li><a href="#" className="hover:underline">Ví Apple</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-4">{t('account')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('manageAppleID')}</a></li>
              <li><a href="#" className="hover:underline">{t('appleStoreAccount')}</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
            <h4 className="text-xs font-semibold mt-6 mb-4">{t('entertain')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple One</a></li>
              <li><a href="#" className="hover:underline">Apple TV+</a></li>
              <li><a href="#" className="hover:underline">Apple Music</a></li>
              <li><a href="#" className="hover:underline">Apple Arcade</a></li>
              <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
              <li><a href="#" className="hover:underline">Apple Books</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-4">{t('appleStore')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('storeApp')}</a></li>
              <li><a href="#" className="hover:underline">{t('finance')}</a></li>
              <li><a href="#" className="hover:underline">{t('tradeIn')}</a></li>
              <li><a href="#" className="hover:underline">{t('orderStatus')}</a></li>
              <li><a href="#" className="hover:underline">{t('shoppingSupport')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-4">{t('forBusiness')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('appleForBusiness')}</a></li>
              <li><a href="#" className="hover:underline">{t('businessShopping')}</a></li>
            </ul>
            <h4 className="text-xs font-semibold mt-6 mb-4">{t('forEducation')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('appleForEducation')}</a></li>
              <li><a href="#" className="hover:underline">{t('collegeShopping')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-4">{t('forHealth')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('appleForHealth')}</a></li>
              <li><a href="#" className="hover:underline">{t('healthOnAppleWatch')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-4">{t('coreValues')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('accessibility')}</a></li>
              <li><a href="#" className="hover:underline">{t('environment')}</a></li>
              <li><a href="#" className="hover:underline">{t('privacy')}</a></li>
              <li><a href="#" className="hover:underline">{t('supplyChain')}</a></li>
            </ul>
            <h4 className="text-xs font-semibold mt-6 mb-4">{t('aboutApple')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('newsroom')}</a></li>
              <li><a href="#" className="hover:underline">{t('appleLeadership')}</a></li>
              <li><a href="#" className="hover:underline">{t('investors')}</a></li>
              <li><a href="#" className="hover:underline">{t('ethics')}</a></li>
              <li><a href="#" className="hover:underline">{t('events')}</a></li>
              <li><a href="#" className="hover:underline">{t('contactApple')}</a></li>
            </ul>
          </div>
        </div>

        <div className="md:hidden text-xs">
          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('shopping')}>
              {t('shoppingAndLearning')}
            </button>
            {openSection === 'shopping' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('store')}</a></li>
                <li><a href="#" className="hover:underline">Mac</a></li>
                <li><a href="#" className="hover:underline">iPad</a></li>
                <li><a href="#" className="hover:underline">iPhone</a></li>
                <li><a href="#" className="hover:underline">Watch</a></li>
                <li><a href="#" className="hover:underline">AirPods</a></li>
                <li><a href="#" className="hover:underline">{t('tvhome')}</a></li>
                <li><a href="#" className="hover:underline">AirTag</a></li>
                <li><a href="#" className="hover:underline">{t('acs')}</a></li>
                <li><a href="#" className="hover:underline">Ví Apple</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="text-xs w-full text-left font-semibold py-2" onClick={() => toggleSection('account')}>
              {t('account')}
            </button>
            {openSection === 'account' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('manageAppleID')}</a></li>
                <li><a href="#" className="hover:underline">{t('appleStoreAccount')}</a></li>
                <li><a href="#" className="hover:underline">iCloud.com</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('applestore')}>
              {t('appleStore')}
            </button>
            {openSection === 'applestore' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('storeApp')}</a></li>
                <li><a href="#" className="hover:underline">{t('finance')}</a></li>
                <li><a href="#" className="hover:underline">{t('tradeIn')}</a></li>
                <li><a href="#" className="hover:underline">{t('orderStatus')}</a></li>
                <li><a href="#" className="hover:underline">{t('shoppingSupport')}</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('business')}>
              {t('forBusiness')}
            </button>
            {openSection === 'business' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('appleForBusiness')}</a></li>
                <li><a href="#" className="hover:underline">{t('businessShopping')}</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('education')}>
              {t('forEducation')}
            </button>
            {openSection === 'education' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('appleForEducation')}</a></li>
                <li><a href="#" className="hover:underline">{t('collegeShopping')}</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('health')}>
              {t('forHealth')}
            </button>
            {openSection === 'health' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('appleForHealth')}</a></li>
                <li><a href="#" className="hover:underline">{t('healthOnAppleWatch')}</a></li>
              </ul>
            )}
          </div>

          <div className="border-t py-2">
            <button className="w-full text-left text-xs font-semibold py-2" onClick={() => toggleSection('coreValues')}>
              {t('coreValues')}
            </button>
            {openSection === 'coreValues' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('accessibility')}</a></li>
                <li><a href="#" className="hover:underline">{t('environment')}</a></li>
                <li><a href="#" className="hover:underline">{t('privacy')}</a></li>
                <li><a href="#" className="hover:underline">{t('supplyChain')}</a></li>
              </ul>
            )}
            <button className="w-full text-left text-xs font-semibold py-2 mt-6" onClick={() => toggleSection('aboutApple')}>
              {t('aboutApple')}
            </button>
            {openSection === 'aboutApple' && (
              <ul className="pl-4 space-y-3 mt-3">
                <li><a href="#" className="hover:underline">{t('newsroom')}</a></li>
                <li><a href="#" className="hover:underline">{t('appleLeadership')}</a></li>
                <li><a href="#" className="hover:underline">{t('investors')}</a></li>
                <li><a href="#" className="hover:underline">{t('ethics')}</a></li>
                <li><a href="#" className="hover:underline">{t('events')}</a></li>
                <li><a href="#" className="hover:underline">{t('contactApple')}</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
