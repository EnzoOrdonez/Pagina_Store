import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { cart, cartTotal } = useCart();
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí se simula el procesamiento de pago
    alert('¡Orden completada! Gracias por tu compra.');
    // En una implementación real se vaciaría el carrito y se registraría la orden
    navigate('/');
  };

  return (
    <Container className="my-5 py-5">
      <h1 className="text-center mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <h2>Resumen de tu compra</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.name} {item.selectedSize && `- Talla: ${item.selectedSize}`} - ${item.price} x {item.quantity || 1}
              </li>
            ))}
          </ul>
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Dirección de Envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Método de Pago</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tarjeta de Crédito / PayPal"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Realizar Pago
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};
