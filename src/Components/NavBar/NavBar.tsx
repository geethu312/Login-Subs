import "./NavBar.scss";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { FaFileExport } from "react-icons/fa6";
import youtuneinLogo from "../../Images/youtuneinLogo.png";
import user from "../../Images/user.jpg";
import sapLogo from "../../Images/sapLogo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img className="youtunein-logo" src={youtuneinLogo} alt="logo" />
              <img className="sap-logo" src={sapLogo} alt="logo" />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active header">Good Morning Jane!</p>
              </li>
            </ul>
            <p className="nav-para">
              Your attitude determines your direction. <br />
              Choose positivity and watch your life transform
            </p>
            <form className="d-flex nav-icons ">
              <IoIosNotifications />
              <IoMdSettings />
              <FaFileExport />
              <img className="user" src={user} alt="user" />
            </form>
          </div>
        </div>
        <div className="dash">
          <h3>Dashboard </h3>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
