const CartItem = ({ item, inputChangeHandler }) => {
  return (
    <li key={item.id}>
      <img
        style={{ width: '150px', height: '150px' }}
        src={window.location.origin + item.img}
        alt={item.name}
      />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div> + </div>
      <input
        type="number"
        value={item.amount}
        min="0"
        onInput={(event) => inputChangeHandler(event, item.id)}
      ></input>
      <div> - </div>
    </li>
  );
};

export default CartItem;
