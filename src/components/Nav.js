import { Link } from "react-router-dom";
const Nav = ({ itemsInCart }) => {
  return (
    <nav>
      <section className="top-section">
        <img
          className="icon"
          src={`${window.location.origin + "/icons/search.png"}`}
          alt="search"
        />
        <div className="logo">
          <Link to="/">Zen</Link>
        </div>
        <div className="right">
          <Link to="/cart">
            <img
              className="icon"
              src={`${window.location.origin + "/icons/shopping-cart.png"}`}
              alt="cart"
            />{" "}
            {itemsInCart}
          </Link>
        </div>
      </section>
      <section className="bottom-section">
        <div>
          <Link to="/shop">Shop</Link>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
