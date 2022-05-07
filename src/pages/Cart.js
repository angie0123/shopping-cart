import CartItems from '../components/CartItems';

const Cart = ({ cartItems }) => {
  return (
    <>
      <CartItems cartItems={cartItems} />
    </>
  );
};

export default Cart;
