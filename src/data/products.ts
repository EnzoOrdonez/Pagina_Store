export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    sizes: string[];
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'UltraBoost 22',
      price: 180,
      image: '/src/assets/shoe1.jpg',
      description: 'Zapatillas de running con amortiguación responsive',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10']
    },
    {
      id: 2,
      name: 'Air Max 270',
      price: 150,
      image: '/src/assets/shoe2.jpg',
      description: 'Cápsula de aire visible para máxima comodidad',
      sizes: ['US 8', 'US 9', 'US 10', 'US 11']
    },
    {
      id: 3,
      name: 'Classic Leather',
      price: 85,
      image: '/src/assets/shoe3.jpg',
      description: 'Estilo atemporal en cuero premium',
      sizes: ['US 6', 'US 7', 'US 8', 'US 9']
    },
  ];