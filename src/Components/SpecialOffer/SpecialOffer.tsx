// import React, { useState } from "react";
import "./SpecialOffer.css";

interface Slide {
  image: string;
  title: string;
  description: string;
  url: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        // style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="text">
              <p style={{ width: "270px", fontWeight: "bold" }}>
                {slide.title}
              </p>
              <p>
                <a href={slide.url} className="website-link">
                  {slide.description}
                </a>
              </p>
              <button className="offer-carousal">View more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
