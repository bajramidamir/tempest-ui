import { FC } from "react";
import "./Switch.css";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string; // Optional: Label for screen readers
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

export default Switch;
