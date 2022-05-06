const ShopItem = ({ item }) => {
  return (
    <div>
      <img
        style={{ width: '300px', height: '300px' }}
        src={window.location.origin + item.img}
        alt={item.name}
      />
      <div>
        {item.name} {item.price}
      </div>
    </div>
  );
};

export default ShopItem;
