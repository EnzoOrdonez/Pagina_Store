import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './Header.css';

export const Header = () => {
  const { cart } = useCart();
  
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">SNEAKERS</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Nuevos</Link>
          <Link to="/" className="nav-link">Hombres</Link>
          <Link to="/" className="nav-link">Mujeres</Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};