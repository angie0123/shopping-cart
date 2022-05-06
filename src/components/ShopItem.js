const ShopItem = ({ item, handleAddToCart }) => {
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
      <div onClick={() => handleAddToCart(item.id)}> Add To Cart </div>
    </div>
  );
};

export default ShopItem;
