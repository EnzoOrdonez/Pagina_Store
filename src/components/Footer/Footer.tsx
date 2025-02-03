// src/components/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sección Superior: Historia y Llamada a la Acción */}
      <div className="footer-history-full">
        <div className="footer-history">
          {/* Parte 1: Historia y Filosofía */}
          <div className="footer-history-part1">
            <p>
              AKSE SHOES
            </p>
          </div>
          {/* Parte 2: Llamada a la Acción */}
          <div className="footer-history-part2">
            <p>ÚNETE AL CLUB Y RECIBE 300 PUNTOS DE BIENVENIDA</p>
            <Link to="/register" className="register-btn">REGÍSTRATE GRATIS</Link>
          </div>
        </div>
      </div>

      {/* Sección Media: Grid de Enlaces */}
      <div className="footer-links-full">
        <div className="footer-links">
          <div className="footer-section">
            <h4>PRODUCTOS</h4>
            <ul>
              <li><Link to="/productos/calzado">Calzado</Link></li>
              <li><Link to="/productos/zapatillas">Zapatillas</Link></li>
              <li><Link to="/productos/ropa">Ropa</Link></li>
              <li><Link to="/productos/accesorios">Accesorios</Link></li>
              <li><Link to="/productos/chimpunes">Chimpunes</Link></li>
              <li><Link to="/productos/cortavientos">Cortavientos</Link></li>
              <li><Link to="/productos/buzos">Buzos</Link></li>
              <li><Link to="/productos/novedades">Novedades</Link></li>
              <li><Link to="/productos/outlet">Outlet</Link></li>
              <li><Link to="/productos/black-friday">Black Friday</Link></li>
              <li><Link to="/productos/cyber-monday">Cyber Monday</Link></li>
              <li><Link to="/productos/cyber-days">Cyber Days</Link></li>
              <li><Link to="/productos/hasta-40-off">HASTA 40% OFF</Link></li>
              <li><Link to="/productos/adiclub">adiClub</Link></li>
              <li><Link to="/productos/adidas-app">adidas app</Link></li>
              <li><Link to="/productos/adidas-runners">adidas Runners</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>DEPORTES</h4>
            <ul>
              <li><Link to="/deportes/futbol">Fútbol</Link></li>
              <li><Link to="/deportes/running">Running</Link></li>
              <li><Link to="/deportes/basquet">Basquet</Link></li>
              <li><Link to="/deportes/training">Training</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>COLECCIONES</h4>
            <ul>
              <li><Link to="/colecciones/ultraboost">Ultraboost</Link></li>
              <li><Link to="/colecciones/stan-smith">Stan Smith</Link></li>
              <li><Link to="/colecciones/originals">Originals</Link></li>
              <li><Link to="/colecciones/forum">Forum</Link></li>
              <li><Link to="/colecciones/adicolor">adicolor</Link></li>
              <li><Link to="/colecciones/superstar">Superstar</Link></li>
              <li><Link to="/colecciones/falcon">Falcon</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>ASISTENCIA</h4>
            <ul>
              <li><Link to="/asistencia/dudas-frecuentes">Dudas Frecuentes</Link></li>
              <li><Link to="/asistencia/realizar-pedidos">Realizar Pedidos</Link></li>
              <li><Link to="/asistencia/productos-adidas">Productos adidas</Link></li>
              <li><Link to="/asistencia/pago">Pago</Link></li>
              <li><Link to="/asistencia/envio">Envío</Link></li>
              <li><Link to="/asistencia/solicitar-devolucion">Solicitar mi Devolución</Link></li>
              <li><Link to="/asistencia/devoluciones">Devoluciones</Link></li>
              <li><Link to="/asistencia/cambio-tiendas">Cambio en Tiendas</Link></li>
              <li><Link to="/asistencia/como-usar">Como Usar Nuestro Sitio</Link></li>
              <li><Link to="/asistencia/guia-tallas">Guía de Tallas</Link></li>
              <li><Link to="/asistencia/mapa-sitio">Mapa del Sitio</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>INFORMACIÓN DE LA EMPRESA</h4>
            <ul>
              <li><Link to="/empresa/acerca-de">Acerca de adidas</Link></li>
              <li><Link to="/empresa/trabaja-con-nosotros">Trabaja en Nuestro Equipo</Link></li>
              <li><Link to="/empresa/prensa">Prensa</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>TIENDAS</h4>
            <ul>
              <li><Link to="/tiendas/buscador">Buscador de Tiendas</Link></li>
              <li><Link to="/tiendas/moda-sostenible">Moda Sostenible</Link></li>
              <li><Link to="/tiendas/impacto">Impacto</Link></li>
              <li><Link to="/tiendas/personas">Personas</Link></li>
              <li><Link to="/tiendas/planeta">Planeta</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>SÍGUENOS</h4>
            <ul className="social-links">
              <li><Link to="/"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
              <li><Link to="/"><i className="fab fa-twitter"></i> Twitter</Link></li>
              <li><Link to="/"><i className="fab fa-instagram"></i> Instagram</Link></li>
              <li><Link to="/"><i className="fab fa-youtube"></i> YouTube</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección Inferior: Enlaces legales y Configuración */}
      <div className="footer-bottom-full">
        <div className="footer-bottom">
          <div className="legal-links">
            <Link to="/cookies">Configuración de las cookies</Link>
            <Link to="/nuestros-datos">Nuestros Datos</Link>
            <Link to="/terminos">Términos y Condiciones</Link>
            <Link to="/privacidad">Política de Privacidad</Link>
            <Link to="/seleccionar-pais">Seleccionar País</Link>
            <Link to="/uso-del-sitio">Uso del Sitio</Link>
          </div>
          <div className="copyright">
            © 2024 adidas Perú SAC, RUC 20347100316. Av. 28 de Julio 1011, interior 1001, Miraflores, Código Postal Lima 18
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
