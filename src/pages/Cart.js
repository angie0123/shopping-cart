import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";

const Cart = ({ cartItems, inputChangeHandler }) => {
  const orders = (
    <div className="cart-content">
      <div className="shopping-bag">
        <div className="heading">Your shopping bag ({cartItems.length})</div>
        <div className="sub-heading">Items being shipped</div>
        <CartItems
          cartItems={cartItems}
          inputChangeHandler={inputChangeHandler}
        />
      </div>
      <OrderSummary cartItems={cartItems} />
    </div>
  );

  const emptyCart = (
    <>
      <div className="empty-message heading">Your cart is empty</div>
      <div className="button dark large">
        <Link to="/shop">Continue shopping</Link>
      </div>
    </>
  );

  return (
    <div className="main-content">
      {cartItems.length > 0 ? <>{orders}</> : <>{emptyCart}</>}
    </div>
  );
};

export default Cart;
