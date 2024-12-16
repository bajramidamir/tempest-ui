import { FC } from "react";
import "./Chip.css";

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
    >
      <span className="chip-label">{label}</span>
    </button>
  );
};

export default Chip;
