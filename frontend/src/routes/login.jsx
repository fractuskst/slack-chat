import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm.jsx";

const Login = () => {
  return (
    <>
      <h1>LOGIN PAGE</h1>
      <SignupForm />
      <Link to={"/"}>Back to main page</Link>
    </>
  );
};

export default Login;
