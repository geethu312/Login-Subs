import Calendar from "../../Components/Calendar/Calendar";
import CarousalEvents from "../../Components/CarousalEvents/CarousalEvents";
import SimpleLineChart from "../../Components/Graph/Graph";
import ProgressBarContainer from "../../Components/ProgressBar/ProgressBarContainer";
import RoutineSuggestion from "../../Components/RoutineSuggestion/RoutineSuggestion";
import SideBar from "../../Components/SideBar/SideBar";
import Status from "../../Components/Status/Status";
import VideoComponent from "../../Components/Video/Video";
import "./YouTuneIn.scss";

const YouTuneIn = () => {
  return (
    <div className="main-box">
      <SideBar />
      <div className="content-area">
        <div className="top-body">
          <div className="inside-top">
            <Status />
          </div>
          <div className="inside-top">
            <Calendar />
          </div>
        </div>
        <div className="mid-body">
          <div className="inside-mid">
            <ProgressBarContainer />
            <SimpleLineChart />
            <VideoComponent />
          </div>
          <div className="inside-mid">
            <CarousalEvents />
          </div>
          <div className="inside-mid">
            <RoutineSuggestion />
          </div>
        </div>
        <div className="bottom-body">
          <div className="inside-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default YouTuneIn;
