import React, { useState } from "react";
import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ModalGallery = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 700px;
  }

  .next,
  .prev {
    background-color: #ffff;
    margin: 1em;
  }
`;

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideImages = images.map((img) => img.filename.medium);

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + slideImages.length) % slideImages.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % slideImages.length);
  };

  return (
    <ModalGallery>
      <GrFormPrevious className="prev" onClick={previousImage} size={30} />
      <img src={slideImages[currentImageIndex]} alt={slideImages.address} />
      <GrFormNext className="next" onClick={nextImage} size={30} />
    </ModalGallery>
  );
};

export default Gallery;
