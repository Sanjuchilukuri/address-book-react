import { FaPlus } from "react-icons/fa6";
import Blogicon from "../../assets/blog-icon.png"
import { useState } from "react";
import AddContactForm from "../ContactForm/AddContactForm";

function NavBar() {
  const [displayContactForm,SetContactFormVisibility] = useState(false);

  const handleDisplayFormVisbility = () => {
    SetContactFormVisibility(true);
  }

  return (
    <nav className="d-flex justify-content-between align-items-center  px-3 py-2 bg-dark-grey">
        <div className="d-flex gap-3">
            <p className="text-white fw-bold cursor-pointer">HOME</p>
            <p className="text-white fw-bold d-flex align-items-center cursor-pointer" onClick={handleDisplayFormVisbility}>
                <span style={{fontSize:"12px"}} ><FaPlus/></span>
                <span>ADD</span>
            </p>
        </div>
        <div>
            <img src={Blogicon} alt="blog-icon" className="cursor-pointer" />
        </div>
        { displayContactForm &&
          <AddContactForm displayForm={displayContactForm}/>
        }
    </nav>
  )
}

export default NavBar;