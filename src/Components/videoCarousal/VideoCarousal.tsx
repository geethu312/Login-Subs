import React, { useState, useRef } from "react";
import "./videoCarousal.scss";

interface CarouselProps {
  items: string[];
  itemWidth?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, itemWidth = 200 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrevClick = () => {
    if (carouselRef.current && scrollPosition > 0) {
      const newPosition = scrollPosition - itemWidth;
      setScrollPosition(newPosition < 0 ? 0 : newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (
      carouselRef.current &&
      scrollPosition <
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    ) {
      const newPosition = scrollPosition + itemWidth;
      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="carousel" ref={carouselRef}>
        {items.map((item, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ minWidth: `${itemWidth}px` }}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

const VideoCarousal: React.FC = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div>
      <Carousel items={items} />
    </div>
  );
};

export default VideoCarousal;
