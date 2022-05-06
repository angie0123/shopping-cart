import ShopItems from '../components/ShopItems';
import { useState } from 'react';
const Shop = () => {
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
    <div>
      <h1>Shop our items</h1>
      <h2>Cart: {cartItems.length}</h2>
      <ShopItems items={shopItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Shop;
