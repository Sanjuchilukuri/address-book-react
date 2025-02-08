import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { FaFaceSmile } from     "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import sideBarCss from'./Sidebar.module.scss';
import SidebarToolTip from "../SidebarToolTip/SidebarToolTip";

function Sidebar() {
  return (
    <aside className={`${sideBarCss['sidebar']} pt-3 d-flex px-1 flex-column justify-content-between`}>
        <div className="d-flex flex-column gap-4" >
            <SidebarToolTip text={"Home"} >
                <div className="d-flex flex-column align-items-center text-white cursor-pointer">
                    <span className="fs-5 px-2 pb-1 rounded-2" style={{backgroundColor:"#454545"}}><AiFillHome /></span>
                    <p className="d-flex justify-content-center extra-small-text fw-medium mt-1" >Home</p>
                </div>
            </SidebarToolTip>
            
            <SidebarToolTip text={"Analytics"} >
                <div className=" d-flex flex-column align-items-center text-white cursor-pointer">
                    <span className="fs-5 px-2 pb-1 rounded-2" style={{backgroundColor:"#454545"}}><IoStatsChart /></span>
                    <p className="d-flex justify-content-center extra-small-text fw-medium mt-1">Analytics</p>
                </div>
            </SidebarToolTip>

            <SidebarToolTip text={"All Contacts"} >
                <div className=" d-flex flex-column align-items-center text-white cursor-pointer">
                    <span className="fs-5 px-2 pb-1 rounded-2" style={{backgroundColor:"#454545"}}><RiContactsBook2Fill /></span>
                    <p className="d-flex justify-content-center extra-small-text fw-medium mt-1">All Contacts</p>
                </div>
            </SidebarToolTip>
        </div>
        <div className="d-flex flex-column gap-4 mb-2">
            <SidebarToolTip text={"Feedback"} >
                <div className=" d-flex flex-column align-items-center text-white cursor-pointer">
                    <span className="fs-5 px-2 pb-1 rounded-2" style={{backgroundColor:"#454545"}}><FaFaceSmile /> </span>
                    <p className="d-flex justify-content-center extra-small-text fw-medium mt-1">Feedback</p>
                </div>
            </SidebarToolTip>

            <SidebarToolTip text={"Settings"} >
                <div className=" d-flex flex-column align-items-center text-white cursor-pointer">
                    <span className="fs-5 px-2 pb-1 rounded-2" style={{backgroundColor:"#454545"}}><IoMdSettings /></span>
                    <p className="d-flex justify-content-center extra-small-text fw-medium mt-1">Settings</p>
                </div>
            </SidebarToolTip>
        </div>
    </aside>
  )
}

export default Sidebar