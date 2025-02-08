import { ReactNode, useState } from "react";

interface ISidebarToolTipProps 
{
    children: ReactNode;
    text: string;
}

function SidebarToolTip(props:ISidebarToolTipProps) 
{
  const [isVisible,SetVisibility] = useState(false);
  
  return (
    <div 
        className="position-relative"
        onMouseEnter={()=>SetVisibility(true)}
        onMouseLeave={()=>SetVisibility(false)}
    >
        {props.children}
        { isVisible && 
            <div className="position-absolute bg-dark text-white p-2 rounded-2 shadow-sm top-0" style={{left:"115%",whiteSpace:"nowrap"}} >
                {props.text}
            </div>
        }
    </div>
  )
}

export default SidebarToolTip