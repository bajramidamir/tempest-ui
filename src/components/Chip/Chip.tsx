import { FC } from "react";
import "./Chip.css";
import React from "react";

interface ChipProps {
  label: string;
  onToggle?: (label: string) => void;
  isSelected?: boolean;
}

const Chip: FC<ChipProps> = ({ label, onToggle, isSelected }) => {
  return (
    <button
      className={`chip ${isSelected ? "chip-selected" : ""}`}
      onClick={() => onToggle?.(label)}
      aria-pressed={isSelected}
      aria-label={`Toggle ${label}`}
    >
      <span className="chip-label">{label}</span>
    </button>
  );
};

export { ChipProps };
export default Chip;
