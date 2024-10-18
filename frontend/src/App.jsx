import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from './routes/routes.js';
import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/404.jsx';
import Header from './components/Header.jsx';

const App = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <Routes>
        <Route
          path={ROUTES.chat}
          element={token ? <Chat /> : <Navigate to={ROUTES.login} />}
        />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
