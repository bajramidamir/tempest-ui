import React, { ReactNode } from "react";
import "./Tooltip.css";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position }) => {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className={`tooltip-content tooltip-${position}`}>{content}</div>
    </div>
  );
};

export default Tooltip;
