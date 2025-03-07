import { useMsal } from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { instance } = useMsal();
  const accounts = instance.getAllAccounts();

  return accounts && accounts.length > 0 ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
