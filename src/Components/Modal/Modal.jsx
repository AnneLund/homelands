import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();

  return (
    <ModalStyled showmodal={toggleModal}>
      <AiOutlineClose className="close" onClick={() => setToggleModal("none")} size={30} />
      <main>{modalPayload}</main>
    </ModalStyled>
  );
};

export default Modal;
