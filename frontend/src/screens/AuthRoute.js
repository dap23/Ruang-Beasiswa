import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const AuthRoute = () => {
  const cookie = new Cookies();
  const token = cookie.get("token");

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
