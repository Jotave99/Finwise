import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const token = localStorage.getItem('token');
  return token !== null;
  
};

const PrivateRoute: React.FC = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
