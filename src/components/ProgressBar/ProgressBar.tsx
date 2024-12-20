import { FC } from "react";
import "./ProgressBar.css";
import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: "primary" | "success" | "danger" | "warning";
  size?: "small" | "medium" | "large";
  label?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = "primary",
  size = "medium",
  label,
}) => {
  const progress = Math.min(Math.max(value, 0), max);
  const percentage = (progress / max) * 100;

  return (
    <div
      className={`progress-bar-container size-${size}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      {label && <span className="progress-bar-label">{label}</span>}
      <div className={`progress-bar-background color-${color}`}>
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export { ProgressBarProps };
export default ProgressBar;
