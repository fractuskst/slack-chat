import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes.js";

const Root = () => {
  return (
    <>
      <h1>MAIN PAGE</h1>
      <Link to={ROUTES.login}>Войти</Link>
    </>
  );
};

export default Root;
