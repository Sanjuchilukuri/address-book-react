import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
// import Header from "./components/Header/Header";
// import NavBar from "./components/NavBar/NavBar";
// import ContactsList from "./components/ContactsList/ContactsList";
// import ContactDetails from "./components/ContactDetails/ContactDetails";
// import AddContactForm from './components/ContactForm/AddContactForm';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';

function App() {

  return (
    <>
      {/* <Header/>
      <NavBar/>
      <main className='px-3 mt-3'>
        <h4 className='mb-3'>CONTACTS</h4>
        <div className="d-flex" style={{gap:"08rem"}}>
          <ContactsList/>
          <ContactDetails/>
        </div>
      </main>
      <AddContactForm displayForm={false}/> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<AuthPage LoginFormMode={'Login'}/>} />
        <Route path='/register' element={<AuthPage LoginFormMode={'Register'}/>} />
        <Route path='/dashboard' element={<Layout/>} />
      </Routes>
      {/* <AuthPage LoginFormMode={"Login"} /> */}
    </>
  )
}

export default App
