import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard/ProductCard';
import '../App.css';

const Home = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  return (
    <main className="main-content">
      <section className="hero-section">
         <h1>Descubre la Exclusividad</h1>
         <p>Encuentra las zapatillas que definen tu estilo</p>
      </section>
      <div className="products-grid">
         {(query ? filteredProducts : products).map(product => (
           <ProductCard key={product.id} product={product} />
         ))}
      </div>
    </main>
  );
};

export default Home;
