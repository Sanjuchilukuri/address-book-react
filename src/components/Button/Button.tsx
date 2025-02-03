import { ReactNode } from "react";

interface IButtonProps{
    children:ReactNode;
    onClick:Function;
    extraClases?:string;
    size:string;
    color:string;
}

function Button(props:IButtonProps) {
  return (
    <button
        className={`btn  ${props.color} ${props.size} ${props?.extraClases}`}
        onClick={() => {props.onClick()}}
    >
        {props.children}
    </button>
  )
}

export default Button