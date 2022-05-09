import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartItems = ({ cartItems, inputChangeHandler }) => {
  const list =
    cartItems.length > 0
      ? cartItems.map((item) => {
          return (
            <li key={item.id}>
              <CartItem item={item} inputChangeHandler={inputChangeHandler} />
            </li>
          );
        })
      : null;
  return (
    <>
      {list ? (
        <ul>{list}</ul>
      ) : (
        <div>
          Your cart is empty <Link to="/shop">Continue shopping</Link>
        </div>
      )}
    </>
  );
};

export default CartItems;
