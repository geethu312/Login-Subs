import Button from "../Button/Button";
import carousal1 from "../../Images/carousal1.jpg";
import "./CarousalEvents.css";

const CarousalEvents = () => {
  return (
    <div className="borders">
      <h5>Group Coaching Call</h5>
      <div id="demo1" className="carousels slides" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousal1} alt="Los Angeles" className="d-block" />
          </div>
          <div className="carousel-item active">
            <img src={carousal1} alt="Los Angeles" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src={carousal1} alt="Chicago" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src={carousal1} alt="New York" className="d-block" />
          </div>
        </div>
      </div>
      <p className="carousal2-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit Aspernatur
        numquam.
      </p>
      <Button name="Book a Session" color="#ac4a78" />
    </div>
  );
};

export default CarousalEvents;
