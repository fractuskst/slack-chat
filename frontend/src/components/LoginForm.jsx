import React, { useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ROUTES, API_ROUTES } from '../routes/routes.js';
import { logIn } from '../store/slices/authSlise.js';

const LoginForm = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        setError('Неверные имя пользователя или пароль');
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form className="col-12 col-md-6 mt-3 mt-md-0" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t('forms.loginTitle')}</h1>

      <Form.Floating className="mb-3">
        <Form.Control
          type="text"
          name="username"
          isInvalid={error}
          id="username"
          placeholder="Ваш ник"
          required
          autoComplete="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          ref={inputRef}
        />
        <label htmlFor="username">{t('forms.login')}</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          type="password"
          name="password"
          isInvalid={error}
          id="password"
          placeholder="Пароль"
          required
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">{t('forms.password')}</label>
        <Form.Control.Feedback type="invalid" tooltip>
          {error}
        </Form.Control.Feedback>
      </Form.Floating>

      <Button className="w-100 mb-3" variant="outline-primary" type="submit">
        {t('forms.enterBtn')}
      </Button>
    </Form>
  );
};

export default LoginForm;
