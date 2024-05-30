import "./SideBar.scss";
import { PiSquareHalfBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuFolders } from "react-icons/lu";
import { BsPersonFillAdd } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";
import { RiMailAddFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <a className="active" href="#home">
          <PiSquareHalfBold size={28} />
        </a>
        <a href="#news">
          <FaPeopleGroup size={28} />
        </a>
        <a href="#contact">
          <IoIosPeople size={28} />
        </a>
        <a href="#about">
          <LuFolders size={28} />
        </a>
        <a href="#about">
          <BsPersonFillAdd size={28} />
        </a>
        <a href="#about">
          <PiHandCoinsBold size={28} />
        </a>
        <a href="/subscription">
          <RiMailAddFill size={28} />
        </a>
        <a href="#about">
          <BsGraphUp size={28} />
        </a>
      </div>
      <div className="content"></div>
    </>
  );
};

export default SideBar;
