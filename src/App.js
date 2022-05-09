import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const handleAddToCart = (id) => {
    const [addedItem] = shopItems.filter((item) => item.id === id);
    const cartHasItem = cart.items.filter((item) => item.id === id).length > 0;
    const updatedCartItems = cartHasItem
      ? cart.items.map((item) => {
          if (item.id === id) {
            item.amount = item.amount + 1;
          }
          return item;
        })
      : [...cart.items, { ...addedItem, amount: 1 }];

    setCart({ items: updatedCartItems, total: cart.total + 1 });
  };

  const handleCartInputChange = (event, id, type) => {
    const [updatedItem] = cart.items.filter((item) => item.id === id);
    if (type === 'increment') {
      updatedItem.amount = +updatedItem.amount + 1;
    }
    if (type === 'decrement' && updatedItem.amount > 0) {
      updatedItem.amount = +updatedItem.amount - 1;
    }
    if (type === 'input') {
      updatedItem.amount = event.target.value;
    }
    const updatedItems =
      updatedItem.amount === 0
        ? cart.items.filter((item) => item.id !== id)
        : cart.items.map((item) => {
            if (item.id === id) {
              return updatedItem;
            }
            return item;
          });
    const updatedTotal = updatedItems.reduce(
      (acc, currentItem) => +acc + +currentItem.amount,
      0
    );
    setCart({
      items: updatedItems,
      total: updatedTotal,
    });
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
      <Nav itemsInCart={cart.total} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              cartItems={cart.items}
              shopItems={shopItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart.items}
              inputChangeHandler={handleCartInputChange}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
