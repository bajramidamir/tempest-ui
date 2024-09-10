import React from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className={`radio ${disabled ? "radio-disabled" : ""}`}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
      />
      <span className="radio-label">{label}</span>
    </label>
  );
};

export default RadioButton;
