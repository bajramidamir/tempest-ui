import React, { ReactNode, useMemo } from "react";
import "./Tooltip.css";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position: "top" | "bottom" | "left" | "right";
}

let idCounter = 0;

const generateUniqueId = () => {
  idCounter += 1;
  return `tooltip-${idCounter}`;
};

const Tooltip: React.FC<TooltipProps> = ({ content, children, position }) => {
  const id = useMemo(() => generateUniqueId(), []);

  return (
    <div className="tooltip-wrapper">
      {children}
      <div
        id={id}
        role="tooltip"
        aria-labelledby={id}
        className={`tooltip-content tooltip-${position}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
