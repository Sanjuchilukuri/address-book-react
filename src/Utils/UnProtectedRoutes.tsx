import { useMsal } from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom";

function UnProtectedRoutes() {
  const { instance } = useMsal();
  const accounts = instance.getAllAccounts();

  return accounts && accounts.length > 0 ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default UnProtectedRoutes;
