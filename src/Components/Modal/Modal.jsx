import React from "react";
import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

//Når Modalen skal bruges, skal følgende importeres i det relevante komponent:
//import { useModalStore } from "../Modal/useModalStore";

//I funktionen indsættes:
// const { setModalPayload } = useModalStore();

//Eksempel til brug:
//<button onClick={() => setModalPayload("I am the greatest modal")}>Show me modal</button>

const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();

  return (
    <ModalStyled showmodal={toggleModal}>
      <main>{modalPayload}</main>
    </ModalStyled>
  );
};

export default Modal;
