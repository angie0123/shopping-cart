import CartItem from "./CartItem";

const CartItems = ({ cartItems, inputChangeHandler }) => {
  const list = cartItems.map((item) => {
    return (
      <li key={item.id}>
        <CartItem item={item} inputChangeHandler={inputChangeHandler} />
      </li>
    );
  });
  return <ul className="shipment-container">{list}</ul>;
};

export default CartItems;
