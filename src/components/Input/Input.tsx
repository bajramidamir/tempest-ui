import { ChangeEvent, FC } from "react";
import "./Input.css";

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
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
