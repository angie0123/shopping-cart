const OrderSummary = ({ cartItems }) => {
  const subTotal = cartItems
    .reduce((subtotal, currentItem) => {
      return subtotal + currentItem.amount * +currentItem.price.substring(1);
    }, 0)
    .toFixed(2);
  const shipping = subTotal > 0 ? 5 : 0;
  return (
    <div className="order-summary">
      <div className="heading">Order summary</div>
      <div className="cart-totals">
        <div className="line">
          <div>Subtotal</div>
          <div>${subTotal}</div>
        </div>
        <div className="line">
          <div>Shipping</div>
          <div>${shipping}</div>
        </div>
        <div className="line">
          <div>Total</div>
          <div>${+subTotal + +shipping}</div>
        </div>
      </div>
      <div className="button dark large">Checkout</div>
    </div>
  );
};

export default OrderSummary;
