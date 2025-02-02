import { Container } from 'react-bootstrap';

export const Privacy = () => {
  return (
    <Container className="my-5 py-5">
      <h1 className="text-center mb-4">Política de Privacidad</h1>
      <div className="content-section">
        <h3>1. Recopilación de Datos</h3>
        <p>Solo recopilamos la información necesaria para procesar tus pedidos.</p>
        
        <h3>2. Uso de la Información</h3>
        <p>Tu información nunca será compartida con terceros.</p>
      </div>
    </Container>
  );
};
