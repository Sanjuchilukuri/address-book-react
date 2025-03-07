import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';
import './App.css';
import ProtectedRoutes from './Utils/ProtectedRoutes';
import UnProtectedRoutes from './Utils/UnProtectedRoutes';


function App() {

  return (
    <>
      <Routes>

        <Route element={<UnProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage LoginFormMode="Login" />} />
          <Route path="/register" element={<AuthPage LoginFormMode="Register" />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Layout />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
