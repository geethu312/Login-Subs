import React from "react";
import SpecialOffer from "./SpecialOffer";
import offer from "../../Images/offer.jpg";
import "./SpecialOffer.css";

const slides = [
  {
    image: offer,
    title: "10% OFF in all wellness products",
    description: "www.website.com",
    url: "http://www.website.com",
  },
];

const OfferCarousal: React.FC = () => {
  return (
    <div className="OfferCarousal">
      <p style={{ margin: "32px 0 0 32px", fontWeight: "bold" }}>
        Special Partnership offer
      </p>
      <SpecialOffer slides={slides} />
    </div>
  );
};

export default OfferCarousal;
