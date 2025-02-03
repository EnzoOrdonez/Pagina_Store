// src/components/Cart/Cart.tsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaTimes } from 'react-icons/fa';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <h2>Tu Carrito ({totalItems})</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  {item.selectedSize && <p>Talla: {item.selectedSize}</p>}
                  <p>Precio: ${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.selectedSize, (item.quantity || 1) - 1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, item.selectedSize, (item.quantity || 1) + 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="remove-button">
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <button className="checkout-button" onClick={() => navigate('/checkout')}>
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart