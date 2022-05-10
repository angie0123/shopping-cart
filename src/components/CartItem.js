const CartItem = ({ item, inputChangeHandler }) => {
  return (
    <div className="cart-item">
      <img src={window.location.origin + item.img} alt={item.name} />
      <div className="description">
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div className="quantity">
          <div>Quantity :</div>
          <div
            className="round-button"
            onClick={(event) => inputChangeHandler(event, item.id, "increment")}
          >
            {" "}
            +{" "}
          </div>
          <input
            type="number"
            value={item.amount}
            min="0"
            onInput={(event) => inputChangeHandler(event, item.id, "input")}
          ></input>
          <div
            className="round-button"
            onClick={(event) => inputChangeHandler(event, item.id, "decrement")}
          >
            {" "}
            -{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
