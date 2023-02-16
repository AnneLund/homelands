import React, { useState } from "react";
import { useModalStore } from "../../Components/Modal/useModalStore";
import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { Button, CloseButton } from "../../Styles/PartialsStyled/Button_Styled";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { setToggleModal } = useModalStore();

  const slideImages = images.map((img, i) => img.filename.medium);

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + slideImages.length) % slideImages.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % slideImages.length);
  };

  return (
    <div>
      <CloseButton onClick={() => setToggleModal("none")}>X</CloseButton>
      <Button onClick={previousImage}>
        <GrFormPrevious size={30} />
      </Button>
      <img src={slideImages[currentImageIndex]} />
      <Button onClick={nextImage}>
        <GrFormNext size={30} />
      </Button>
    </div>
  );
};

export default Gallery;
