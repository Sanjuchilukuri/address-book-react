import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}"); 

  return userInfo.userName && userInfo.email ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
