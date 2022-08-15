import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Mens from './components/Mens';
import Womens from './components/Womens';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/mens" element={<Mens />} />
            <Route path="/shop/womens" element={<Womens />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
