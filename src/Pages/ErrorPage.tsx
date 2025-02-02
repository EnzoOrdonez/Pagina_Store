import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Unexpected Application Error!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
