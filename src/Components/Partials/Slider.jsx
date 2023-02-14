import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import useGetListItemsByEndPoint from "../Hooks/useGetListItemsByEndPoint";
import useGetListItemsByEndpoint from "../Hooks/useGetListItemsByEndPoint";

const SliderContainer = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .react-slideshow-container {
    width: 100vw;
    button {
      margin: 1em;
      background-color: inherit;
      svg {
        fill: #ffffffa7;
        width: 100%;
        position: absolute;
      }
    }
  }

  .each-slide {
    width: 100%;
    img {
      aspect-ratio: 4/1;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Slider = () => {
  const images = [
    "https://api.mediehuset.net/images/homelands/medium/bedroom-2.jpg",
    "https://api.mediehuset.net/images/homelands/medium/apartment-3.jpg",
    "https://api.mediehuset.net/images/homelands/medium/house-5.jpg",
  ];
  console.log(images);
  return (
    <SliderContainer>
      <div className="slide-container">
        <Slide>
          {images.map((img, i) => {
            return (
              <div className="each-slide" key={i}>
                <img src={img} />
              </div>
            );
          })}
        </Slide>
      </div>
    </SliderContainer>
  );
};

export default Slider;
