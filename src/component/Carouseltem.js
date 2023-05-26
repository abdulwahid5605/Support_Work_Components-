import React from "react";
// import "./Carouseltem.css"

export const Carouseltem = ({ item }) => {
  return (
    <div>
      <div
        className="inner-container h-96 w-72 z-10"
        style={{ backgroundColor: item.color }}
      >
        <h2 className="carousel-item-heading text-3xl whitespace-normal h-48 w-96 text-white relative right-16 top-16  text-center font-Times New Roman">
          {item.description}
        </h2>
        <p class="carousel-item-text text-xl font-bold italic my-40 px-20 whitespace-normal text-white">
          {item.name}
        </p>
      </div>
    </div>
  );
};
