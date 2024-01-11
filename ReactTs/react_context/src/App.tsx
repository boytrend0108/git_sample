import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { LangProvider } from './components/LangContext';

export const App = () => {
  return (
    <div className="App">
      <LangProvider>
        <Header />
        <Main />
        <Footer />
      </LangProvider>
    </div>
  );
}
