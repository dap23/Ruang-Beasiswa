import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoute = () => {
  const cookie = new Cookies();
  const token = cookie.get("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
