import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ROUTES, API_ROUTES } from "../routes/routes.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slices/authSlise.js";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(API_ROUTES.login(), values);
        dispatch(logIn(response.data));
        navigate(ROUTES.main);
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label>
          Логин
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.username}
            required
            type="text"
            name="username"
            id="username"
            autoComplete="username"
          />
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Пароль
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.password}
            required
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
          />
        </Form.Label>
      </Form.Group>

      <Button className="w-100 mb-3" variant="outline-primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
