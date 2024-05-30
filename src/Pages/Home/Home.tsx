import Calendar from "react-calendar";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import Status from "../../Components/Status/Status";
import "./Home.scss";
import ProgressBarContainer from "../../Components/ProgressBar/ProgressBarContainer";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="content">
        <SideBar />
        <Status />
        <ProgressBarContainer />
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Home;
