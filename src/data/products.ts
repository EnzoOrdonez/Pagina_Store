export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  selectedSize?: string;
  quantity?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'UltraBoost 22',
    price: 180,
    image: '/images/shoe1.jpg',
    description: 'Zapatillas de running con amortiguación responsive y diseño aerodinámico.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10']
  },
  {
    id: 2,
    name: 'Air Max 270',
    price: 150,
    image: '/images/shoe2.jpg',
    description: 'Innovador diseño con cápsula de aire visible para máxima comodidad.',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11']
  },
  {
    id: 3,
    name: 'Classic Leather',
    price: 85,
    image: '/images/shoe3.jpg',
    description: 'Estilo atemporal en cuero premium, ideal para cualquier ocasión.',
    sizes: ['US 6', 'US 7', 'US 8', 'US 9']
  },
];
