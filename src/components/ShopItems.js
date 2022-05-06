import ShopItem from './ShopItem';

const ShopItems = ({ items }) => {
  const list = items.map((item, index) => {
    return (
      <li key={index}>
        <ShopItem item={item} />
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default ShopItems;
