import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { LangProvider  } from './components/LangContext';

export const App = () => {
  return (
   <LangProvider >
     <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
   </LangProvider>
  );
}
