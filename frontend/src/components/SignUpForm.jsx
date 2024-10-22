import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ROUTES, API_ROUTES } from '../routes/routes.js';
import { logIn } from '../store/slices/authSlise.js';
import useSignUpValidation from '../helpers/useSignUpValidation.js';

const SignUpForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const schema = useSignUpValidation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: async (values, { setFieldError }) => {
      const { username, password } = values;
      try {
        const response = await axios.post(API_ROUTES.signup(), { username, password });
        dispatch(logIn(response.data));
        navigate(ROUTES.chat);
      } catch (e) {
        if (e.response && e.response.status === 409) {
          setFieldError('confirmPassword', 'Такой пользователь уже существует');
        } else {
          console.error(e);
        }
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form className="w-50" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t('forms.signupTitle')}</h1>

      <Form.Floating className="mb-3">
        <Form.Control
          type="text"
          name="username"
          isInvalid={formik.errors.username}
          id="username"
          placeholder="От 3 до 20 символов"
          required
          autoComplete="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          ref={inputRef}
        />
        <Form.Control.Feedback type="invalid" tooltip>
          {formik.errors.username}
        </Form.Control.Feedback>
        <label htmlFor="username">{t('forms.signupLogin')}</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          type="password"
          name="password"
          isInvalid={formik.errors.password}
          id="password"
          placeholder="Не менее 6 символов"
          required
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Form.Control.Feedback type="invalid" tooltip>
          {formik.errors.password}
        </Form.Control.Feedback>
        <label htmlFor="password">{t('forms.password')}</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          type="password"
          name="confirmPassword"
          isInvalid={formik.errors.confirmPassword}
          id="confirmPassword"
          placeholder="Пароли должны совпадать"
          required
          autoComplete="new-password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <Form.Control.Feedback type="invalid" tooltip>
          {formik.errors.confirmPassword}
        </Form.Control.Feedback>
        <label htmlFor="confirmPassword">{t('forms.passwordConfirm')}</label>
      </Form.Floating>

      <Button className="w-100 mb-3" variant="outline-primary" type="submit">
        {t('forms.signUp')}
      </Button>
    </Form>
  );
};

export default SignUpForm;
