import { ChangeEvent, FC } from "react";
import "./Textarea.css";

interface TextareaProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  rows?: number;
  cols?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
  placeholder,
  disabled,
  value,
  rows = 4,
  cols = 50,
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
      onChange={onChange}
    />
  );
};

export default Textarea;
