import { FC } from "react";
import "./Select.css";

interface SelectProps {
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  selectedValue: string;
  onChange: (value: string) => void;
  color: "primary" | "neutral";
}

const Select: FC<SelectProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  color = "primary",
}) => {
  return (
    <div className="select">
      <label className="select-label">{label}</label>
      <select
        className={`select-${color}`}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
