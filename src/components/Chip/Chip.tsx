import { FC } from "react";
import "./Chip.css";

interface ChipProps {
  label: string;
  onRemove?: () => void;
  removable?: boolean;
}

const Chip: FC<ChipProps> = ({ label, onRemove, removable = true }) => {
  return (
    <div className="chip">
      <span className="chip-label">{label}</span>
      {removable && (
        <button
          className="chip-remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          aria-label={`Remove ${label}`}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Chip;
