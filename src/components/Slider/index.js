import React from "react";
import "./Slider.css";
import slide1 from "../../images/slide01.png";

const Slider = () => {
  return (
    <div>
      <div className="slide">
        <img src={slide1} alt="slide1" />
      </div>
    </div>
  );
};

export default Slider;
