import React from "react";
import "./Input.css";

type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  disabled,
  value,
  type,
  onChange,
}) => {
  return (
    <input
      className={`input input-${type} ${disabled ? "input-disabled" : ""}`}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
