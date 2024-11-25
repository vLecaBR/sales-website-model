import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('token'); // Verifica se o token está presente

  //! Se o usuário estiver autenticado, retorna o Outlet que renderiza os filhos, caso contrário, redireciona para login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
