import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) {
    return (
      <div className="app">
        <Container className="my-5 py-5">
          <h2>Producto no encontrado</h2>
        </Container>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecciona una talla.');
      return;
    }
    addToCart({ ...product, selectedSize });
    alert('Producto añadido al carrito.');
  };

  return (
    <div className="app">
      <Container className="my-5 py-5">
        <div className="product-details">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4 className="product-detail-price">${product.price}</h4>
            <div className="size-selector">
              <p>Selecciona tu talla:</p>
              <div className="sizes">
                {product.sizes.map(size => (
                  <button 
                    key={size} 
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <Button variant="primary" onClick={handleAddToCart} className="mt-3">
              Añadir al carrito
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
