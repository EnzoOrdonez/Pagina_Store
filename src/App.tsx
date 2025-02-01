import { CartProvider } from './context/CartContext';
import { Header } from './components/Header/header';
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
            <h1>Las mejores zapatillas del mercado</h1>
            <p>Encuentra tu par perfecto</p>
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