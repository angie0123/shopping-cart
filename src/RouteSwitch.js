import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
