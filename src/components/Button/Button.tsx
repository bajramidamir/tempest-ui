import { FC, ReactNode } from "react";
import "./Button.css";
import React from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: "neutral" | "primary";
  variant?: "filled" | "outlined" | "text" | "disabled";
  radius?: "square" | "rounded" | "pill";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  color = "neutral",
  variant,
  radius = "square",
  startIcon,
  endIcon,
  type = "button",
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${color} btn-${radius}`}
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
      aria-disabled={disabled || variant === "disabled" ? "true" : "false"}
      type={type}
    >
      {startIcon && <span className="btn-icon-start">{startIcon}</span>}
      <span className="btn-text">{children}</span>
      {endIcon && <span className="btn-icon-end">{endIcon}</span>}
    </button>
  );
};

export { ButtonProps };
export default Button;
