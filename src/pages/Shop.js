import ShopItems from '../components/ShopItems';

const Shop = ({ cartItems, shopItems, handleAddToCart }) => {
  return (
    <div>
      <h1>Shop our items</h1>
      <ShopItems items={shopItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Shop;
