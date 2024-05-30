import React from "react";
import ProgressBar from "./ProgressBar";
import "./ProgressBarContainer.css";

const ProgressBarContainer: React.FC = () => {
  return (
    <div className="ProgressBarContainer">
      <div className="progress-section">
        <p>Completed hours</p>
        <ProgressBar
          value={30}
          text="30:25"
          color="#583469"
          showPercentage={false}
        />
      </div>

      <div className="progress-section">
        <p>Most Popular Sessions</p>
        <ProgressBar value={85} text="8D Sounds" color="#ac4a78" />
        <ProgressBar value={72} text="Meditation Music" color="#b24763" />
        <ProgressBar value={61} text="Podcasts" color="#c75a67" />
        <ProgressBar value={53} text="Guided Meditations" color="#d86c69" />
      </div>
    </div>
  );
};

export default ProgressBarContainer;
