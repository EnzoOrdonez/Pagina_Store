// src/components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar con enlaces secundarios */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-links">
            <Link to="/ayuda">Ayuda</Link>
            <Link to="/pedidos-devoluciones">Pedidos y devoluciones</Link>
            <Link to="/politicas">Políticas</Link>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="main-bar">
        <div className="main-bar-container">
          {/* Izquierda: Logo */}
          <div className="left-section">
            <Link to="/" className="logo">AKSE</Link>
          </div>

          {/* Centro: Menú principal */}
          <nav className="center-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <span>Calzado</span>
                <div className="dropdown">
                  <Link to="/calzado/urbanas">Urbanas</Link>
                  <Link to="/calzado/deportivas">Deportivas</Link>
                  <Link to="/calzado/formales">Formales</Link>
                </div>
              </li>
              <li className="nav-item">
                <span>Hombres</span>
                <div className="dropdown">
                  <Link to="/hombres/urbanas">Urbanas</Link>
                  <Link to="/hombres/deportivas">Deportivas</Link>
                  <Link to="/hombres/correr">Para Correr</Link>
                </div>
              </li>
              <li className="nav-item">
                <span>Mujeres</span>
                <div className="dropdown">
                  <Link to="/mujeres/urbanas">Urbanas</Link>
                  <Link to="/mujeres/deportivas">Deportivas</Link>
                  <Link to="/mujeres/correr">Para Correr</Link>
                </div>
              </li>
              <li className="nav-item">
                <span>Niños</span>
                <div className="dropdown">
                  <Link to="/ninos/urbanas">Urbanas</Link>
                  <Link to="/ninos/deportivas">Deportivas</Link>
                </div>
              </li>
              <li className="nav-item">
                <span>Outlet</span>
                <div className="dropdown">
                  <Link to="/outlet/descuentos">Descuentos</Link>
                  <Link to="/outlet/ofertas">Ofertas</Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Derecha: Buscador e íconos */}
          <div className="right-section">
            <div className="search-container">
              <input type="text" placeholder="Buscar" />
            </div>
            <div className="icon-group">
              <Link to="/cuenta" className="icon"><FaUser /></Link>
              <Link to="/favoritos" className="icon"><FaHeart /></Link>
              <Link to="/cart" className="icon"><FaShoppingCart /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
