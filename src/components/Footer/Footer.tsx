import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>La mejor selección de zapatillas premium</p>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@sneakers.com</p>
          <p>Teléfono: +1 234 567 890</p>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Sneakers. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};