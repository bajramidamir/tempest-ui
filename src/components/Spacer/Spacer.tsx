import React from "react";
import "./Spacer.css";

interface SpacerProps {
  space: number;
}

const Spacer: React.FC<SpacerProps> = ({ space }) => {
  return <div className="spacer" style={{ height: `${space}px` }} />;
};

export { SpacerProps };
export default Spacer;
