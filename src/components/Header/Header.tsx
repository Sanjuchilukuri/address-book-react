import { useContext, useState } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { TbLogout } from "react-icons/tb";

interface IHeaderProps {
    styleClasses: string;
    isAuthenticated: boolean;
}

function Header(props:IHeaderProps) 
{
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [logoutOptionVisibility, SetlogoutOptionVisibility ] = useState(false);

  const handleLogoutVisibility = () =>{
    SetlogoutOptionVisibility(!logoutOptionVisibility);
  }

  const handleLogout = () => {
    debugger;
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  }

  return (
    // style={{backgroundColor:"#424242"}}
    <header  className={`d-flex justify-content-between align-items-center p-1 px-2 top-0 z-2 vw-100 ${props?.styleClasses}`}>
        <h2 className="cursor-pointer h4 text-capitalize text-white">Address Book</h2>
        { !props.isAuthenticated ?
            <div className='d-flex gap-2'>
                <Button  
                    onClick={()=>{navigate('/login')}} 
                    size={'btn--small'} 
                    color={'btn--sky-blue'}
                >
                    Sign In
                </Button>
                <Button  
                    onClick={()=>{navigate('/register')}} 
                    size={'btn--small'} 
                    color={''}
                    extraClases='border border-2 border-white text-white'
                >
                    Sign Up
                </Button>
            </div>
            :
            <div className='position-relative '>
                <p className="cursor-pointer fw-medium  text-capitalize text-white" onClick={handleLogoutVisibility}>Hi, {user?.userName}</p>
                {logoutOptionVisibility &&
                    <div 
                        className='top-100 rounded-2 d-flex align-items-center gap-2 position-absolute bg-light shadow ps-2 pe-3 cursor-pointer py-1'
                        onClick={handleLogout}
                    >
                        <span className='text-sky-blue fs-5'><TbLogout /></span>
                        <p>Logout</p>
                    </div>
                }
            </div>
        }
    
    </header>
  )
}

export default Header