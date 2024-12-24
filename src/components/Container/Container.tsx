import React, { FC, ReactNode } from "react";
import "./Container.css";

interface ContainerProps {
  children: ReactNode;
  padding?: string;
  margin?: string;
  maxWidth?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  padding = "1rem",
  margin = "auto",
  maxWidth = "1200px",
}) => {
  const style = { padding, margin, maxWidth };

  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

export { ContainerProps };
export default Container;
