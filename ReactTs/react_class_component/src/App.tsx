import './App.css';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCart2 } from './components/ShoppingCart2';

function App() {
  return (
    <div className="section">
      <ShoppingCart name="Shopping Cart" />
      <ShoppingCart2 name="Shopping Cart2" />
    </div>
  );
}

export default App;
