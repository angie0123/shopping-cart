import CartItem from './CartItem';

const CartItems = ({
  cartItems,
  inputChangeHandler,
  incrementHandler,
  decrementHandler,
}) => {
  const list = cartItems.map((item) => {
    return <CartItem item={item} inputChangeHandler={inputChangeHandler} />;
  });
  return <ul>{list}</ul>;
};

export default CartItems;
