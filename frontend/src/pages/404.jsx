import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.js';

const Login = () => {
  return (
    <>
      <h1>404 СТРАНИЦА НЕ НАЙДЕНА</h1>
      <Link to={ROUTES.main}>Главная страница</Link>
    </>
  );
};

export default Login;
