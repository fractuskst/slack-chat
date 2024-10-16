import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Логин обязателен")
    .min(3, "Логин должен содержать минимум 3 символа")
    .max(20, "Логин не должен превышать 20 символов")
    .matches(
      /^[a-zA-Z0-9_-]+$/,
      "Логин может содержать только буквы, цифры, _ и -"
    ),

  password: yup
    .string()
    .required("Пароль обязателен")
    .min(8, "Пароль должен содержать минимум 8 символов")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
    .matches(/[0-9]/, "Пароль должен содержать хотя бы одну цифру"),
});

const SignupForm = () => (
  <div className="form-container">
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={signupSchema}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Логин</label>
            <Field
              className="input-field"
              type="text"
              name="username"
              placeholder="Введите логин"
            />
            <ErrorMessage
              className="error-message"
              name="username"
              component="div"
            />
          </div>

          <div>
            <label htmlFor="password">Пароль</label>
            <Field
              className="input-field"
              type="password"
              name="password"
              placeholder="Введите пароль"
            />
            <ErrorMessage
              className="error-message"
              name="password"
              component="div"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
