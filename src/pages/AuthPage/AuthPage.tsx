import HomePageCss from '../HomePage/HomePage.module.scss';
import microsoftIcon from '../../assets/microsoft-icons.svg';
import googleIcon from '../../assets/google-icon.svg';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface IAuthPageProps{
    LoginFormMode:'Login'|'Register';
}

function AuthPage(props:IAuthPageProps) {
  const navigate = useNavigate();
  const [AuthFormVisibility, setAuthFormVisibility] = useState(false);  

  const handleSubmit = (mode: 'Login' | 'Register') => {
    console.log(mode);
    navigate('/dashboard');
  };

  const handleAuthformVisibility = () => {
    setAuthFormVisibility(true);
  }
  
  return (
    <div className={`${HomePageCss['background-image']} vh-100 d-flex justify-content-center align-items-center`}>
      <div className="card shadow-lg p-4 bg-white rounded-3" style={{ width: "350px" }}>
        <h3 className="text-center fw-medium mb-3 h4">{props.LoginFormMode == 'Login'?'Sign In':'Sign Up'}</h3>

        <div className="d-flex flex-column gap-2 pb-3">
          <Button onClick={()=>{alert("clicked")}} size={'py-2 px-3 rounded-3 w-100'} color={''} extraClases='border d-flex align-items-center gap-2'>
            <img src={microsoftIcon} alt="Microsoft Icon" width="20" />
            <span className="flex-grow-1 small text-center">{props.LoginFormMode == 'Login'?'Sign in ':'Sign up '} with Microsoft</span>
          </Button>

          <div className="text-center fw-bold small text-muted">OR</div>

          <Button onClick={()=>{alert("clicked")}} size={'py-2 px-3 rounded-3 w-100'} color={''} extraClases='border d-flex align-items-center gap-2'>
            <img src={googleIcon} alt="Microsoft Icon" width="20" />
            <span className="flex-grow-1 small text-center">{props.LoginFormMode == 'Login'?'Sign in ':'Sign up '} with Google</span>
          </Button>

          <div className="text-center fw-bold small text-muted">OR</div>

          <Button onClick={handleAuthformVisibility} size={'py-2 px-3 rounded-3 w-100'} color={''} extraClases='border d-flex align-items-center gap-2'>
            <span className="flex-grow-1 small text-center">Continue with Mail</span>
          </Button> 
        </div>

        <hr />

        <div className="mt-2">
          { AuthFormVisibility &&
              <>
                {props.LoginFormMode == 'Register' &&
                  <div className="mb-2 d-flex flex-column">
                    <label htmlFor="username" className="form-label small fw-semibold">Username</label>
                    <input type="text" id="username" className="extra-small-text rounded-2 p-1 px-2 border-0 border-bottom outline-0" />
                  </div>
                }
                
                <div className="mb-2 d-flex flex-column">
                  <label htmlFor="username" className="form-label small fw-semibold">Email</label>
                  <input type="email" id="username" className="extra-small-text rounded-2 p-1 px-2 border-0 border-bottom outline-0" />
                </div>

                <div className="mb-2 d-flex flex-column">
                  <label htmlFor="password" className="form-label small fw-semibold">Password</label>
                  <input type="password" id="password" className="extra-small-text  rounded-2 p-1 px-2 border-0 border-bottom outline-0" />
                </div>

                <Button 
                  onClick={() => handleSubmit(props.LoginFormMode)}  
                  extraClases='mt-2 rounded-3 fw-medium ' 
                  size={'w-100 small'} 
                  color={'btn-primary '}
                >
                  {props.LoginFormMode == 'Login'?'Sign In':'Sign Up'}
                </Button>
              </>
          }
          <div className='mt-2'>
            <NavLink to={props.LoginFormMode == 'Login' ? '/register':'/login'}>{props.LoginFormMode == 'Login' ? "Don't have an account" : 'Already have an account'}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
function handleSubmit() {
  throw new Error('Function not implemented.');
}

