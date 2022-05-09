const ShopItem = ({ item, handleAddToCart }) => {
  return (
    <div className="product">
      <img src={window.location.origin + item.img} alt={item.name} />
      <div className="description">
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
      <div className="button" onClick={() => handleAddToCart(item.id)}>
        {' '}
        Add To Cart{' '}
      </div>
    </div>
  );
};

export default ShopItem;
