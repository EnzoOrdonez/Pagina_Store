import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="size-selector">
          {product.sizes.map(size => (
            <button key={size} className="size-button">{size}</button>
          ))}
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="add-to-cart-button"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};