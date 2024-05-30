import { useEffect, useState } from "react";
import ButtonSubs from "../../Components/Button/ButtonSubs/ButtonSubs";
import SideBar from "../../Components/SideBar/SideBar";
import "./Subscription.scss";
import moment from "moment";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Subscription = () => {
  const [subscriptionData, setSubscriptionData] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const [autoRenew, setAutoRenew] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [buySeats, setBuySeats] = useState(false);
  const [sliderValuePercentage, setSliderValuePercentage] = useState(0);

  const fetchSubscriptionData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }
    try {
      const response = await axios.get(
        "https://admin-stage.youtunein.com/api/v1/enterprise-client-manager-subscription/info?organizationId=1",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setSubscriptionData(response.data);
      setSliderValue(response.data?.seatsUsed);
      setAutoRenew(response?.data?.organization?.subscription?.IsAutoRenew);
      setSliderValuePercentage(
        ((response?.data?.seatsUsed || 0) /
          (response?.data?.organization?.seats || 1)) *
          100
      );
    } catch (err) {
      setError("Failed to fetch subscription data");
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      subscriptionData.organization == undefined ||
      subscriptionData.seatsUsed == undefined
    )
      fetchSubscriptionData();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return moment(dateString).format("DD MMM YYYY");
  };

  const handleMoreSeatsClick = () => {
    setBuySeats(!buySeats);
  };

  const handleSliderChange = (value: any) => {
    try {
      const token = localStorage.getItem("token");
      const newSeats = value.target.value;
      setSliderValue(newSeats);
      setSliderValuePercentage(
        ((newSeats || 0) / (subscriptionData?.organization?.seats || 1)) * 100
      );
      axios.patch(
        "https://admin-stage.youtunein.com/api/v1/enterprise-client-manager-subscription/seat/update",
        {
          organizationId: 4,
          seats: 3,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleToggleChange = async (val: any) => {
    const token = localStorage.getItem("token");
    try {
      const newAutoRenewStatus = val.target.checked;
      setAutoRenew(newAutoRenewStatus);
      await axios.patch(
        "https://admin-stage.youtunein.com/api/v1/enterprise-client-manager-subscription/auto-renew/update",
        {
          organizationId: 1,
          autoRenew: newAutoRenewStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Failed to update auto renew status:", error);
      setAutoRenew(!val.target.checked);
    }
  };

  return (
    <div className="subs-main">
      <SideBar />
      <div className="main-panel">
        <div className="left-panel">
          <div className="col left-col top-col">
            <div className="row top-left-row">
              <div className="col-sm start ">
                <div className="seats-tot">
                  {subscriptionData?.organization?.seats}
                </div>
                <p style={{ fontWeight: "bold" }} className="para-seats pur">
                  Number of Seats purchased
                </p>
              </div>

              <div className="col-sm start">
                <div className="seats-used">{subscriptionData.seatsUsed}</div>
                <p style={{ fontWeight: "bold" }} className="para-seats use">
                  Number of Seats Used
                </p>
              </div>
              <div className="col-sm">
                <div className="seats-rem">
                  {subscriptionData.seatsRemaining}
                </div>
                <p style={{ fontWeight: "bold" }} className="para-seats rem">
                  Number of Seats remaining
                </p>
              </div>
            </div>
            <ButtonSubs
              className="subs-button"
              name="Buy more Seats"
              onclick={handleMoreSeatsClick}
            />
            {buySeats && (
              <div className="top-bottom">
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="0"
                    max={
                      (subscriptionData?.seatsRemaining || 0) +
                      (subscriptionData?.seatsUsed || 0)
                    }
                    className="slider"
                    id="myRange"
                    style={{
                      background: `linear-gradient(to right, #ae5169 0%,#ae5169 ${sliderValuePercentage}%,#d3d3d3 ${sliderValuePercentage}%, #d3d3d3 100%)`,
                    }}
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </div>
                <div className="price">
                  <p>Price</p>
                  <p>$0000</p>
                </div>
                <div className="price">
                  <p style={{ fontWeight: "bold" }}>Total</p>
                  <p style={{ fontWeight: "bold" }}>$0000</p>
                </div>
                <p className="more-seats">Looking for more than 500 seats?</p>
                <div className="btns-top-left">
                  <ButtonSubs
                    onclick={() => {}}
                    className="subs-button"
                    name="Contact Us"
                  />
                  <ButtonSubs
                    onclick={() => {}}
                    className="subs-button"
                    name="Buy Now"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col left-col bottom-col">
            <div className="row">
              <div className="col start">
                <p style={{ fontWeight: "bold" }}>
                  No. Of group calls Purchased
                </p>
                <div className="count  booked-seats ">
                  <p>Millah</p>
                  <p>Other Providers</p>
                </div>
                <div className="count-val booked-seats">
                  <h1>{subscriptionData?.oneOnOneBooked}</h1>
                  <h1>{subscriptionData?.groupCallsBooked}</h1>
                </div>
              </div>
              <div className="col ">
                <p style={{ fontWeight: "bold" }}>
                  No. Of group calls Remaining
                </p>
                <div className="count  remain-seats">
                  <p>Millah</p>
                  <p>Other Providers</p>
                </div>
                <div className="count-val remain-seats">
                  <h1>{subscriptionData?.oneOnOneRemaining}</h1>
                  <h1>{subscriptionData?.groupCallsRemaining}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="col right-col top-col subs">
            <p style={{ fontWeight: "bold" }}>Subscription details</p>
            <div className="subs-details">
              <p style={{ color: "gray" }}>Subscription ID</p>
              <p style={{ fontWeight: "bold" }}>
                {
                  subscriptionData?.organization?.subscription
                    ?.stripeSubscriptionId
                }
              </p>
              <p style={{ color: "gray" }}>Company Name</p>
              <p style={{ fontWeight: "bold" }}>
                {subscriptionData?.organization?.name}
              </p>
              <p style={{ color: "gray" }}>Type</p>
              <p style={{ fontWeight: "bold" }}>Meditation</p>
              <p style={{ color: "gray" }}>Plan</p>
              <p style={{ fontWeight: "bold" }}>
                {subscriptionData?.organization?.subscriptionPlan?.name}
              </p>
              <p style={{ color: "gray" }}>Billing details</p>
            </div>
          </div>
          <div className="col right-col bottom-col">
            <div className="row ">
              <div className="col period start">
                <p style={{ fontWeight: "bold" }}>Subscription Start Date </p>
                {formatDate(
                  subscriptionData?.organization?.subscription
                    ?.subscriptionStartDate
                )}
              </div>
              <div className="col period">
                <p style={{ fontWeight: "bold" }}>Subscription End Date </p>
                {formatDate(
                  subscriptionData?.organization?.subscription
                    ?.subscriptionEndDate
                )}
              </div>
            </div>
            <div className="toggleSwitch">
              <p>Auto Renew</p>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={handleToggleChange}
                  checked={autoRenew}
                />
                <span className="toggle round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
