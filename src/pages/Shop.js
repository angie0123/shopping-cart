import ShopItems from '../components/ShopItems';

const Shop = ({ shopItems, handleAddToCart }) => {
  return (
    <div className="main-content">
      <div className="category">All products</div>
      <ShopItems items={shopItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Shop;
