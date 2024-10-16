import { Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>MAIN PAGE</h1>
      <Link to={`/login`}>Login page</Link>
    </>
  );
};

export default Root;
