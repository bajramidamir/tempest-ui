import React from "react";
import "./Input.css";

type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  return (
    <input
      className={`input ${disabled ? "input-disabled" : ""}`}
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
