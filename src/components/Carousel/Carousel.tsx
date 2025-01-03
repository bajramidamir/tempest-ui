import React, { useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel" aria-roledescription="carousel">
      <button
        className="carousel-arrow left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 17L13 12L18 7M11 17L6 12L11 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="carousel-viewport" role="region" aria-live="polite">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 17L11 12L6 7M13 17L18 12L13 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className="carousel-dots"
        role="navigation"
        aria-label="Carousel dots"
      >
        {items.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export { CarouselProps };
export default Carousel;
