import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes.js";
import Root from "./pages/Root.jsx";
import Login from "./pages/Login.jsx";

const App = () => (
  <div className="d-flex flex-column h-100">
    <Routes>
      <Route path={ROUTES.main} element={<Root />} />
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  </div>
);

export default App;
