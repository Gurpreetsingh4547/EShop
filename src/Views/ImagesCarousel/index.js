import React from "react";

// Packages
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

// Constant
import { CONTENT } from "../../Config/Constant";

// CSS
import "./style.css";

const ImageSlider = () => {
  return (
    <Slider autoplay={1000}className="slider-wrapper">
      {CONTENT.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export { ImageSlider };
