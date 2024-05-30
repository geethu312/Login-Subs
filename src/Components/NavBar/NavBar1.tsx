import "./NavBar1.scss";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { FaFileExport } from "react-icons/fa6";
import youtuneinLogo from "../../Images/youtuneinLogo.png";
import user from "../../Images/user.jpg";

const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={youtuneinLogo} alt="Logo" />
      </div>
      <div className="text-nav">
        <p className="greetings" style={{ textDecoration: "underline" }}>
          Good morning Jane!
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </div>
      <div className="nav-right">
        <div className="navbar-icons">
          <IoIosNotifications size="24px" />
          <IoMdSettings size="24px" />
          <FaFileExport size="24px" />
          <img className="user-img" src={user} alt="user" />
        </div>
        <div className="dashboard-text">
          <h5>Dashboard</h5>
          <div className="underline"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
