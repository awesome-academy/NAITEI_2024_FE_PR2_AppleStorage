import React from 'react';
import Navbar from './components/Navbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import NewGen from './components/Newgen';
import StoreTitle from './components/StoreTitle';
import './assets/css/global.css';
import'./assets/scripts/i18n';

function App() {
  return (
    <div>
      <Navbar />
      <LanguageSwitcher />
      <StoreTitle/>
      <NewGen/>
    </div>
  );
}

export default App;
