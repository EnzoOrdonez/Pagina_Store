// src/Pages/Login.tsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulación de login: en un caso real se llamaría a una API
    if (email === 'usuario@demo.com' && password === '123456') {
      alert('Login exitoso');
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Container className="my-5 py-5">
      <h1 className="text-center mb-4">Iniciar Sesión</h1>
      <Form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="usuario@demo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
