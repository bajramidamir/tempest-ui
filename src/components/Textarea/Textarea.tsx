import { ChangeEvent, FC } from "react";
import "./Textarea.css";
import React from "react";

interface TextareaProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  rows?: number;
  cols?: number;
  name?: string;
  id?: string;
  required?: boolean;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
  placeholder,
  disabled = false,
  value,
  rows = 4,
  cols = 50,
  name,
  id,
  required = false,
  maxLength,
  onChange,
}) => {
  return (
    <textarea
      className={`textarea ${disabled ? "textarea-disabled" : ""}`}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      rows={rows}
      cols={cols}
      name={name}
      id={id}
      required={required}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export { TextareaProps };
export default Textarea;
