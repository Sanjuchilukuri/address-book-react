import { useEffect, useState } from "react";
import AddContactFormCss from "./AddContactForm.module.scss";

interface IAddContactFormProps{
    displayForm:boolean
} 

function AddContactForm(props:IAddContactFormProps) 
{
    const [displayForm, SetDisplayForm] = useState(false);

    useEffect(()=>{
        SetDisplayForm(props.displayForm);
    },[])

    const handleCloseForm = () => {
        SetDisplayForm(false);
    }

    return (
        <>
            { displayForm &&
                <div className="position-absolute vh-100 vw-100 z-3 top-0 start-0 d-flex align-items-end justify-content-center">
                    <form style={{width:"35rem", height:"fit-content"}} className={`ms-4 gap-2 shadow-sm p-3 bg-white d-flex flex-column mb-4 ${AddContactFormCss['form']}`}>
                        <div className="d-flex flex-column">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="p-1 outline-0 w-100"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="p-1 outline-0 w-100"/>
                        </div>
                        <div className="d-flex w-100 gap-3">
                            <div className="d-flex flex-column w-100">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" id="mobile" className="p-1 outline-0 w-100"/>
                            </div>
                            <div className="d-flex flex-column w-100">
                                <label htmlFor="landline">Landline</label>
                                <input type="number" name="landline" id="landline" className="p-1 outline-0 w-100"/>
                            </div>
                        </div>
                        <div className="d-flex flex-column ">
                            <label htmlFor="website">Website</label>
                            <input type="url" name="website" id="website" className="p-1 outline-0 w-100"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="address">Address</label>
                            <textarea name="address" id="address" rows={5} className="p-1 outline-0 "></textarea>
                        </div>
                        <div className="mt-2 d-flex justify-content-end gap-2">
                            <button type="button" className="btn bg-transparent border border-2 py-2 px-3 text-dark" onClick={handleCloseForm}>Cancel</button>
                            <button type="button" className="btn bg-forest-green py-2 px-3 text-white">Add</button>
                        </div>
                    </form>
                </div>
            }
        </>
  )
}

export default AddContactForm