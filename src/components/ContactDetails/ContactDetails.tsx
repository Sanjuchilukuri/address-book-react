import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function ContactDetails() {
  return (
    <div style={{width:"30rem"}}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="fw-normal">Praveen Battula</h2>
        <div className="d-flex gap-3">
          <p className="gap-2">
            <span><MdEdit/></span>
            <span className="ms-1">EDIT</span>
          </p>
          <p className="gap-2">
            <span><RiDeleteBinLine/></span>
            <span className="ms-1">DELETE</span>
          </p>
        </div>
      </div>
      <div>
        <p>Email : praveen@technovert.com</p>
        <div className="my-2">
          <p>Mobile : +91 923 345 2342</p>
          <p>Landline : 040 30 1231211</p>
        </div>
        <p className="my-2">Website : https://www.technovert.com</p>
        <div className="d-flex">
          <p>Address : </p>
          <p> 123 now here <br />
            Some street <br />
            Madhapur, Hyderabad 500033
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails