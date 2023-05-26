import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <FaArrowAltCircleLeft
          className="carousel-arrow left"
          onClick={goToPrevImage}
        />
        <img src={images[currentImageIndex]} alt="" />
        <FaArrowAltCircleRight
          className="carousel-arrow right"
          onClick={goToNextImage}
        />
      </div>
    </div>
  );
};

export default Slider;