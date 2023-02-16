import React, { useState } from "react";
import { useModalStore } from "../../Components/Modal/useModalStore";
import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { Button } from "../../Styles/PartialsStyled/Button_Styled";
import { AiOutlineClose } from "react-icons/ai";

const ModalGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 7em;

  .close {
    right: -15em;
  }

  img {
    width: 700px;
  }
`;

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { setToggleModal } = useModalStore();

  const slideImages = images.map((img) => img.filename.medium);

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + slideImages.length) % slideImages.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % slideImages.length);
  };

  return (
    <ModalGallery>
      <AiOutlineClose className="close" onClick={() => setToggleModal("none")} size={30} />

      <Button onClick={previousImage}>
        <GrFormPrevious size={30} />
      </Button>
      <img src={slideImages[currentImageIndex]} alt={slideImages.address} />
      <Button onClick={nextImage}>
        <GrFormNext size={30} />
      </Button>
    </ModalGallery>
  );
};

export default Gallery;
