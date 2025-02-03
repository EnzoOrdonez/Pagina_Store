// src/Pages/ProductDetails/ProductDetails.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Container, Button, Carousel } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) {
    return (
      <Container className="my-5 py-5">
        <h2>Producto no encontrado</h2>
      </Container>
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
    <Container className="my-5 py-5">
      <div className="product-details">
        <div className="product-image-container">
          {/* Si hubiera más imágenes se podría usar un Carousel */}
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <img src={product.image} alt={product.name} className="product-detail-image" />
            </Carousel.Item>
          </Carousel>
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
  );
};

export default ProductDetails;
