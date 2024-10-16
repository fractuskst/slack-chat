import LoginForm from "../components/LoginForm.jsx";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes.js";

const Login = () => {
  return (
    <>
      <h1>LOGIN PAGE</h1>
      <LoginForm />
      <Link to={ROUTES.main}>Главная страница</Link>
    </>
  );
};

export default Login;
