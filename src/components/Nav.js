import { Link } from 'react-router-dom';
const Nav = ({ itemsInCart }) => {
  return (
    <nav>
      <section className="top-section">
        <div>Search Icon</div>
        <div className="logo">
          <Link to="/">Zen</Link>
        </div>
        <div className="right">
          <Link to="/cart">Cart: {itemsInCart}</Link>
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
