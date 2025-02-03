// src/Pages/ErrorPage.tsx
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>¡Ups! Algo salió mal</h1>
      <p>{error.statusText || error.message}</p>
      <p>Vuelve a intentarlo o contacta con soporte.</p>
    </div>
  );
};

export default ErrorPage;
