import ShopItem from './ShopItem';

const ShopItems = ({ items, handleAddToCart }) => {
  const list = items.map((item) => {
    return (
      <li key={item.id}>
        <ShopItem item={item} handleAddToCart={handleAddToCart} />
      </li>
    );
  });
  return <ul className="product-grid">{list}</ul>;
};

export default ShopItems;
