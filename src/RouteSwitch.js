import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import Cart from './pages/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
