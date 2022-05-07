import CartItem from './CartItem';

const CartItems = ({ cartItems }) => {
  const list = cartItems.map((item) => {
    return <CartItem item={item} />;
  });
  return <ul>{list}</ul>;
};

export default CartItems;
