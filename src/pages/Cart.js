import CartItems from '../components/CartItems';

const Cart = ({
  cartItems,
  inputChangeHandler,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <>
      <CartItems
        cartItems={cartItems}
        inputChangeHandler={inputChangeHandler}
      />
    </>
  );
};

export default Cart;
