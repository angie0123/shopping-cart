import CartItems from '../components/CartItems';

const Cart = ({ cartItems, inputChangeHandler }) => {
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
