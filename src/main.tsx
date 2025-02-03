// src/main.tsx
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './index.css';

/* Lazy loading de las páginas */
const RootLayout = lazy(() => import('./Layout/RootLayout'));
const Home = lazy(() => import('./Pages/Home'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Terms = lazy(() => import('./Pages/Terms'));
const Privacy = lazy(() => import('./Pages/Privacy'));
const Contact = lazy(() => import('./Pages/Contact'));
const Login = lazy(() => import('./Pages/Login'));
const ErrorPage = lazy(() => import('./Pages/ErrorPage'));

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
      { path: "login", element: <Login /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </CartProvider>
  </React.StrictMode>
);
