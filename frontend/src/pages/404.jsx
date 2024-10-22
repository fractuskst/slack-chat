import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.js';
import notFound from '../images/404.svg';

const NotFound = () => (
  <div className="text-center">
    <img src={notFound} alt="Страница не найдена" />
    <h1 className="h4 text-muted">Страница не найдена :(</h1>
    <p className="text-muted">
      Но вы можете перейти
      <Link to={ROUTES.chat}> на главную страницу</Link>
    </p>
  </div>
);

export default NotFound;
