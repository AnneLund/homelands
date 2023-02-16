import React from "react";
import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

const Modal = () => {
  const { toggleModal, modalPayload } = useModalStore();

  return (
    <ModalStyled showmodal={toggleModal}>
      <main>{modalPayload}</main>
    </ModalStyled>
  );
};

export default Modal;
