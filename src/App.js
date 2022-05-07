import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (id) => {
    const addedItem = shopItems.filter((item) => item.id === id);
    setCartItems([...cartItems, ...addedItem]);
  };
  const shopItems = [
    {
      img: '/images/aloe.jpg',
      name: 'Aloe',
      price: '$34.99',
      id: 0,
    },
    {
      img: '/images/cactus.jpg',
      name: 'Cactus',
      price: '$29.99',
      id: 1,
    },
    {
      img: '/images/leafy.jpg',
      name: 'Lauri Fern',
      price: '$24.99',
      id: 2,
    },
  ];

  return (
    <BrowserRouter>
      <Nav itemsInCart={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              cartItems={cartItems}
              shopItems={shopItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
