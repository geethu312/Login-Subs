import Calendar from "react-calendar";
import SideBar from "../../Components/SideBar/SideBar";
import Status from "../../Components/Status/Status";
import "./NewPage.scss";
import ProgressBarContainer from "../../Components/ProgressBar/ProgressBarContainer";
import CarousalEvents from "../../Components/CarousalEvents/CarousalEvents";
import RoutineSuggestion from "../../Components/RoutineSuggestion/RoutineSuggestion";
import SimpleLineChart from "../../Components/Graph/Graph";
import OfferCarousal from "../../Components/SpecialOffer/OfferCarousal";
import VideoComponent from "../../Components/Video/Video";

function NewPage() {
  return (
    <div className="main-box">
      <SideBar />
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-3">
          <div className="col">
            <Status />
          </div>
          <div className="col"></div>
          <div className="col">
            <Calendar />
          </div>
          <div className="col top">
            <ProgressBarContainer />
            <div className="line">
              <SimpleLineChart />
            </div>
            <div className="video-comp">
              <VideoComponent />
            </div>
          </div>
          <div className="col mid">
            <CarousalEvents />
            <RoutineSuggestion />
          </div>
          <div className="col video-home"></div>
          <div className="col-4 col-lg-2"></div>
          <div className="col-4 col-lg-2"></div>
          <div className="col-4 col-lg-2 offer">
            <OfferCarousal />
          </div>
          <div className="col-4 col-lg-2"> </div>
          <div className="col-4 col-lg-2"></div>
          <div className="col-4 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
