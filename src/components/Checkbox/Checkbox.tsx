import React, { FC } from "react";
import "./Checkbox.css";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <label className={`checkbox ${disabled ? "checkbox-disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export { CheckboxProps };
export default Checkbox;
