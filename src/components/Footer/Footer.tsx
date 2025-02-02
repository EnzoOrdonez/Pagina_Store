import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="mb-4 footer-section">
            <h4>SNEAKERS</h4>
            <p>Calidad y estilo en cada paso.</p>
          </Col>
          
          <Col md={4} className="mb-4 footer-section">
            <h4>Enlaces rápidos</h4>
            <ul className="list-unstyled">
              <li><Link to="/terminos" className="text-light">Términos y condiciones</Link></li>
              <li><Link to="/privacidad" className="text-light">Política de privacidad</Link></li>
              <li><Link to="/contacto" className="text-light">Contacto</Link></li>
            </ul>
          </Col>
          
          <Col md={4} className="footer-section">
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <li>📧 info@sneakers.com</li>
              <li>📱 +1 234 567 890</li>
              <li>📍 Calle Falsa 123, Madrid</li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <small>© 2024 Sneakers. Todos los derechos reservados.</small>
        </div>
      </Container>
    </footer>
  );
};
