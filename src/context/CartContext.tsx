import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number, selectedSize?: string) => void;
  updateQuantity: (productId: number, selectedSize: string | undefined, quantity: number) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id && item.selectedSize === product.selectedSize);
      if (existingItem) {
        return prevCart.map(item =>
          (item.id === product.id && item.selectedSize === product.selectedSize)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number, selectedSize?: string) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && (selectedSize ? item.selectedSize === selectedSize : true))));
  };

  const updateQuantity = (productId: number, selectedSize: string | undefined, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId && item.selectedSize === selectedSize) {
          return { ...item, quantity: quantity > 0 ? quantity : 1 };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
