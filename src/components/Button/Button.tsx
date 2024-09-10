import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger" | "disabled";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  variant = "primary",
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
      aria-disabled={disabled || variant === "disabled" ? "true" : "false"}
    >
      {children}
    </button>
  );
};

export default Button;
