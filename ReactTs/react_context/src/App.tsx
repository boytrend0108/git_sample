import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';


export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
