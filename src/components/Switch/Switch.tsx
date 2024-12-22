import { FC } from "react";
import "./Switch.css";
import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
}

const Switch: FC<SwitchProps> = ({ checked, onChange, disabled, label }) => {
  return (
    <label className={`switch ${disabled ? "switch-disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label={label || "Toggle switch"}
      />
      <span className="switch-slider"></span>
    </label>
  );
};

export { SwitchProps };
export default Switch;
