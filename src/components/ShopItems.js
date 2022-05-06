import ShopItem from './ShopItem';

const ShopItems = ({ items, handleAddToCart }) => {
  const list = items.map((item) => {
    return (
      <li key={item.id}>
        <ShopItem item={item} handleAddToCart={handleAddToCart} />
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default ShopItems;
