import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Footer from './components/Footer';

// Import CartProvider
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <div className='app-container'>
      <Router>
        {/* Wrap the app with CartProvider */}
        <CartProvider>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
