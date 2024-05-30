import { IoIosPlayCircle } from "react-icons/io";
import "./RoutineSuggestion.css";
import sunset from "../../Images/sunset.png";
import cloudy from "../../Images/cloudy.png";

const RoutineSuggestion = () => {
  return (
    <div className="routine-outer">
      <h5>Routine Suggestion</h5>
      <div className="routine-block morning">
        <img src={sunset} alt="morning" />
        <div className="routine-header">
          <p style={{ marginLeft: "255px", width: "fit-content" }}>Morning</p>
        </div>
        <div className="routine-content">
          <div>
            <p>Meditation</p>
            <p>
              Music - Theta <span style={{ marginLeft: "55px" }}>(10:00)</span>
              <IoIosPlayCircle size="25px" color="#9a4d77" />
            </p>
          </div>
          <div>
            <p>Guided Meditation</p>
            <p>
              Mindfulness <span style={{ marginLeft: "65px" }}>(10:00)</span>
              <IoIosPlayCircle size="25px" color="#9a4d77" />
            </p>
          </div>
        </div>
      </div>
      <div className="routine-block after-lunch">
        <img src={cloudy} alt="lunch" />
        <div className="routine-header">
          <p style={{ marginLeft: "240px" }}>After Lunch</p>
        </div>
        <div className="routine-content">
          <div>
            <p>Meditation</p>
            <p>
              Music - Beta <span style={{ marginLeft: "65px" }}>(10:00)</span>
              <IoIosPlayCircle size="25px" color="#9a4d77" />
            </p>
          </div>
          <div>
            <p>Guided Meditation</p>
            <p>
              Relax <span>(10:00)</span>{" "}
              <IoIosPlayCircle size="25px" color="#9a4d77" />
            </p>
          </div>
        </div>
      </div>
      <div className="routine-block bedtime">
        <img src={cloudy} alt="bedtime" />
        <div className="routine-header">
          <p style={{ marginLeft: "260px" }}>Bedtime</p>
        </div>
        <div className="routine-content">
          <div>
            <p>Meditation</p>
            <p>
              Music - Delta <span style={{ marginLeft: "65px" }}>(10:00)</span>
              <IoIosPlayCircle size="25px" color="#9a4d77" />
            </p>
          </div>
          <div>
            <p>Guided Meditation</p>
            <p>
              Going to sleep <span style={{ marginLeft: "58px" }}>(10:00)</span>
              <IoIosPlayCircle size="25px" color="#9a4d77" />
            </p>
          </div>
        </div>
      </div>
      <button className="customize-button">Make your own routine</button>
    </div>
  );
};

export default RoutineSuggestion;
