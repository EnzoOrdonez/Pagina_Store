import React, { useState } from 'react';
import { Navbar, Container, Nav, Badge, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

export const Header = () => {
  const { cart } = useCart();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Navegar a la página de inicio con el query de búsqueda
    navigate(`/?q=${search}`);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="nav-container">
        <Navbar.Brand as={Link} to="/" className="logo">SNEAKERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link">Carrito</Nav.Link>
            <Nav.Link as={Link} to="/checkout" className="nav-link">Checkout</Nav.Link>
            <Nav.Link as={Link} to="/terminos" className="nav-link">Términos</Nav.Link>
            <Nav.Link as={Link} to="/privacidad" className="nav-link">Privacidad</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="nav-link">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex form-search" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Buscar zapatillas"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Buscar</Button>
          </Form>
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/cart" className="cart-link">
              <FaShoppingCart size={20} />
              {cart && cart.length > 0 && (
                <Badge pill bg="accent" className="cart-count">
                  {cart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
