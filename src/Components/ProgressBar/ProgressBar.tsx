import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  value: number;
  text: string;
  color: string;
  showPercentage?: boolean; // Optional prop to show/hide percentage
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  text,
  color,
  showPercentage = true,
}) => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${value}%`, backgroundColor: color }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="progress-text">{text}</span>
        {showPercentage && (
          <span className="progress-percentage">{value}%</span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
