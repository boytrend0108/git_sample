import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Lang } from './types/Lang';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export const App = () => {
  const [lang, setLang] = useState(Lang.EN);

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />
      <Main lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
