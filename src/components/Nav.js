import { Link } from 'react-router-dom';
const Nav = ({ itemsInCart }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">Cart: {itemsInCart}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
