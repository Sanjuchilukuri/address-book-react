import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

interface IHeaderProps {
    styleClasses: string;
    isAuthenticated: boolean;
}

function Header(props:IHeaderProps) 
{
  const navigate = useNavigate()

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
            <div>
                <p className="cursor-pointer fw-medium  text-capitalize text-white">Hi, Sanju</p>
            </div>
        }
    
    </header>
  )
}

export default Header