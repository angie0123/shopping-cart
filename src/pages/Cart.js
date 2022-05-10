import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

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
      <div className="order-summary">
        <div className="heading">Order summary</div>
        <div className="cart-totals">
          <div className="line">
            <div>Subtotal</div>
            <div>$24.99</div>
          </div>
          <div className="line">
            <div>Shipping</div>
            <div>$2.99</div>
          </div>
          <div className="line">
            <div>Total</div>
            <div>$30.99</div>
          </div>
        </div>
        <div className="button dark large">Checkout</div>
      </div>
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
