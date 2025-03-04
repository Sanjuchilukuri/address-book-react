  import AuthPage from './pages/AuthPage/AuthPage';
  import HomePage from './pages/HomePage/HomePage';
  import { Routes, Route } from "react-router-dom";
  import Layout from './pages/Layout/Layout';
  import './App.css';

  function App() {

    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<AuthPage LoginFormMode={'Login'}/>} />
          <Route path='/register' element={<AuthPage LoginFormMode={'Register'}/>} />
          <Route path='/dashboard' element={<Layout/>} />
        </Routes>
      </>
    )
  }

  export default App
