const CartItem = ({ item }) => {
  return (
    <li key={item.id}>
      <img
        style={{ width: '150px', height: '150px' }}
        src={window.location.origin + item.img}
        alt={item.name}
      />
      <div>{item.name}</div>
      <div>{item.price}</div>
    </li>
  );
};

export default CartItem;
