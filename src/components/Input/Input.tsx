import { ChangeEvent, FC } from "react";
import "./Input.css";
import React from "react";

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  type: string;
  name?: string;
  id?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  disabled = false,
  value,
  type,
  name,
  id,
  required = false,
  autoComplete = "on",
  onChange,
}) => {
  return (
    <input
      className={`input input-${type} ${disabled ? "input-disabled" : ""}`}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      name={name}
      id={id}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
};

export { InputProps };
export default Input;
