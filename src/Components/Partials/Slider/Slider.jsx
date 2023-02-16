import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SliderContainer } from "./SliderStyled";

const Slider = () => {
  const images = [
    "https://api.mediehuset.net/images/homelands/medium/bedroom-2.jpg",
    "https://api.mediehuset.net/images/homelands/medium/apartment-3.jpg",
    "https://api.mediehuset.net/images/homelands/medium/house-5.jpg",
  ];

  return (
    <SliderContainer>
      <div className="slide-container">
        <Slide>
          {images.map((img, i) => {
            return (
              <div className="each-slide" key={i}>
                <img src={img} alt="" />
              </div>
            );
          })}
        </Slide>
      </div>
    </SliderContainer>
  );
};

export default Slider;
