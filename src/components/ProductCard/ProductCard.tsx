import { useState } from 'react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize) {
      alert('Por favor, selecciona una talla.');
      return;
    }
    addToCart({ ...product, selectedSize });
  };

  const goToDetails = () => {
    navigate(`/producto/${product.id}`);
  };

  return (
    <div className="product-card" onClick={goToDetails}>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="size-selector">
          {product.sizes.map(size => (
            <button 
              key={size} 
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button 
            onClick={(e) => handleAddToCart(e)}
            className="add-to-cart-button"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
