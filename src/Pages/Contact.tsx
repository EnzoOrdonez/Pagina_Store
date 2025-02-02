import { Container, Form, Button } from 'react-bootstrap';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Mensaje enviado. Gracias por contactarnos.');
  };

  return (
    <Container className="my-5 py-5">
      <h1 className="text-center mb-4">Contacto</h1>
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="tucorreo@ejemplo.com" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={5} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </Container>
  );
};
