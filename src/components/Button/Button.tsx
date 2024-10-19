import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: "neutral" | "primary";
  variant?: "filled" | "outlined" | "disabled";
  radius?: "square" | "rounded" | "pill";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  color = "neutral",
  variant,
  radius = "square",
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${color} btn-${radius}`}
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
      aria-disabled={disabled || variant === "disabled" ? "true" : "false"}
    >
      {children}
    </button>
  );
};

export default Button;
