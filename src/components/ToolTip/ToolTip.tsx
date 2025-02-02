import { ReactNode, useRef, useState, useEffect } from "react";

interface IToolTipProps {
  children: ReactNode;
  text: string;
}

function ToolTip({ children, text }: IToolTipProps)
{
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [text]);

  return (
    <div className="d-inline-block position-relative">
      <div 
        ref={textRef}
        className="text-truncate d-inline-block"
        style={{ maxWidth: "150px", cursor: isOverflowing ? "pointer" : "default" }}
        onMouseEnter={() => isOverflowing && setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      {isVisible && (
        <div 
          className="position-absolute bg-dark text-white p-2 rounded small shadow-sm"
          style={{ bottom: "100%", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default ToolTip;
