import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import AddContactForm from "../ContactForm/AddContactForm";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [displayContactForm,SetContactFormVisibility] = useState(false);

  const handleDisplayFormVisbility = () => {
    SetContactFormVisibility(true);
  }

  return (
    <nav className="d-flex justify-content-between align-items-center  px-3 py-1 bg-dark-grey">

        <div className="d-flex justify-content-between w-100">
          <div className="d-flex gap-3">
            <NavLink to={"/"} className={'text-white fw-bold cursor-pointer text-decoration-none text-capitalize hover-light-sky-blue '}>HOME</NavLink>
            <NavLink to={"/"} className={'text-white fw-bold cursor-pointer text-decoration-none text-capitalize hover-light-sky-blue'}>ANALYTICS</NavLink>
            <NavLink to={"/"} className={'text-white fw-bold cursor-pointer text-decoration-none text-capitalize hover-light-sky-blue'}>ALL CONTACTS</NavLink>
          </div>
          <div>
            <p className="text-white fw-bold d-flex align-items-center cursor-pointer hover-light-sky-blue" onClick={handleDisplayFormVisbility}>
                <span style={{fontSize:"12px"}} ><FaPlus/></span>
                <span>ADD</span>
            </p>
          </div>            
        </div>
      
        { displayContactForm &&
          <AddContactForm displayForm={displayContactForm}/>
        }
    </nav>
  )
}

export default NavBar;