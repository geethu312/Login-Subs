import "./Status.scss";
import Button from "../Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiHeadphones } from "react-icons/gi";
import { IoIosAddCircleOutline } from "react-icons/io";

const Status = () => {
  const [statusData, setStatusData] = useState({
    activeUsers: null,
    availableSeats: null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://admin-stage.youtunein.com/api/v1/enterprise-client-manager-dashboard/statistics?organizationId=1"
      );
      setStatusData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="status-box">
        <div>
          <div>
            <Button name="Active Users" color="#0275c4"></Button>
          </div>
          <div className="active-user">
            <GiHeadphones size="42px" color="#0275c4" />
            <h1>
              136
              {statusData.activeUsers}
            </h1>
          </div>
        </div>
        <div>
          <div>
            <Button name="Available Seats" color="#4d8e2b"></Button>
          </div>
          <div className="available-seats">
            <GiHeadphones size="42px" color="#4d8e2b" />
            <h1>
              {/* {statusData.availableSeats} */}
              36
            </h1>
            <IoIosAddCircleOutline size="28px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
