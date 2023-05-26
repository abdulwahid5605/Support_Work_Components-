import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SmallCarousel = () => {
  return (
    <>
      <AwesomeSlider
        className="text-white bg-black opacity-60 h-32 text-xl"
        infinite={true}
      >
        <div className="">
          <div className="">
            <h2 className="text-center">
              Judge HGTV Designer Of The Year Awards 2020
            </h2>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="text-center">
              Kitchen & Bath Business Person Of The Year 2020
            </h2>
          </div>
        </div>

        <div className="">
          <div className="">
            <h2 className="text-center">
              House Beautiful Advisory Council Member
            </h2>
          </div>
        </div>

        <div className="">
          <div className="">
            <h2 className="text-center">
              Designers Today Women Of Influence Honoree 2020
            </h2>
          </div>
        </div>
      </AwesomeSlider>
    </>
  );
};

export default SmallCarousel;
