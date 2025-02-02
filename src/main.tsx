import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ErrorPage } from './Pages/ErrorPage';
import { RootLayout } from './Layout/RootLayout';
import Home from './Pages/Home';
import { Cart } from './components/Cart/Cart';
import { ProductDetails } from './Pages/ProductDetails';
import { Checkout } from './Pages/Checkout';
import { Terms } from './Pages/Terms';
import { Privacy } from './Pages/Privacy';
import { Contact } from './Pages/Contact';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "producto/:id", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> },
      { path: "terminos", element: <Terms /> },
      { path: "privacidad", element: <Privacy /> },
      { path: "contacto", element: <Contact /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
