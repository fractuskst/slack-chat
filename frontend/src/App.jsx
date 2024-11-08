import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ROUTES } from './routes/routes.js';
import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/404.jsx';
import SignUp from './pages/SignUp.jsx';
import Header from './components/Header.jsx';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      <div className="d-flex flex-column h-100">
        <Header />
        <Routes>
          <Route path={ROUTES.chat} element={token ? <Chat /> : <Navigate to={ROUTES.login} />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.signUp} element={<SignUp />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
