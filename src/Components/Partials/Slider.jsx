import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import img1 from "../../Assets/Images/med.jpg";
import img2 from "../../Assets/Images/reb.jpg";
import img3 from "../../Assets/Images/se.jpg";

const SliderContainer = styled.div`
  color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .react-slideshow-container {
    button {
      margin: 1em;
      background-color: inherit;
      svg {
        fill: #ffffffa7;
        width: 100%;
        position: absolute;
      }
    }

    img {
      aspect-ratio: 2/3;
      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Slider = () => {
  const images = [img1, img2, img3];

  return (
    <SliderContainer>
      <div className="slide-container">
        <Slide>
          {images.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img src={slideImage} />
            </div>
          ))}
        </Slide>
      </div>
    </SliderContainer>
  );
};

export default Slider;
