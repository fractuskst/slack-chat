import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES, API_ROUTES } from '../routes/routes.js';
import { logIn } from '../store/slices/authSlise.js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(API_ROUTES.login(), values);
        dispatch(logIn(response.data));
        navigate(ROUTES.chat);
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <Form className="col-12 col-md-6 mt-3 mt-md-0" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">Войти</h1>

      <Form.Floating className="mb-3">
        <Form.Control
          type="text"
          name="username"
          id="username"
          placeholder="Ваш ник"
          required
          autoComplete="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <label htmlFor="username">Ваш ник</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          required
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">Пароль</label>
      </Form.Floating>

      <Button className="w-100 mb-3" variant="outline-primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
