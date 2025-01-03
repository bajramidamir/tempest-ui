import React, { FC, ReactNode } from "react";
import "./Alert.css";

interface AlertProps {
  variant?: "success" | "warning" | "danger" | "info";
  children: ReactNode;
}

const Alert: FC<AlertProps> = ({ variant = "info", children }) => {
  return (
    <div role="alert" className={`alert alert-${variant}`}>
      {children}
    </div>
  );
};

export { AlertProps };
export default Alert;
