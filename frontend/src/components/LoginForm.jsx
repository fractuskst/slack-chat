import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  return (
    <Form>
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
