import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router-dom";

export default function AdminRoute() {
  const accessToken = localStorage.getItem("accessToken");

  const decoded = jwtDecode(accessToken);

  if (decoded.role !== 2) {
    return <NavLink to="/" replace />;
  }

  return <Outlet />;
}
