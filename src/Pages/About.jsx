import React from "react";
import one from "../Assets/Images/decem.png";
import two from "../Assets/Images/ju.jpg";
import three from "../Assets/Images/m.jpg";
import four from "../Assets/Images/me.jpg";
import five from "../Assets/Images/mede.jpg";
import six from "../Assets/Images/reb.jpg";
import seven from "../Assets/Images/se.jpg";
import eight from "../Assets/Images/sjov.jpg";
import nine from "../Assets/Images/slik.jpg";
import { useProductStore } from "../Components/Hooks/useProductStore";
import { Page } from "../Layout/Page";
import { Gallery } from "../Styles/Gallery";

const About = () => {
  const images = [one, two, three, four, five, six, seven, eight, nine];

  return (
    <Page>
      <h1>About</h1>
      <Gallery>
        {images.map((img, i) => {
          return (
            <picture key={i}>
              <img src={img} />
            </picture>
          );
        })}
      </Gallery>
    </Page>
  );
};

export default About;
