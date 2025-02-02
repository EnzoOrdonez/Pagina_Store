/* Archivo: src/App.tsx */
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard/ProductCard';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        
        <main className="main-content">
          <section className="hero-section">
            <h1>Descubre la Exclusividad</h1>
            <p>Encuentra las zapatillas que definen tu estilo</p>
          </section>

          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
