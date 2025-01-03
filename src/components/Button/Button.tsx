import { FC, ReactNode } from "react";
import React from "react";
import "./Button.css";

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
  variant = "filled",
  radius = "square",
  startIcon,
  endIcon,
  type = "button",
}) => {
  const isDisabled = disabled || variant === "disabled";

  return (
    <button
      className={`btn btn-${variant} btn-${color} btn-${radius}`}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled ? "true" : undefined}
      type={type}
      role="button"
    >
      {startIcon && (
        <span className="btn-icon-start" aria-hidden="true">
          {startIcon}
        </span>
      )}
      <span className="btn-text">{children}</span>
      {endIcon && (
        <span className="btn-icon-end" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export { ButtonProps };
export default Button;
