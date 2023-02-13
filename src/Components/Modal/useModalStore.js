import { create } from "zustand";

export const useModalStore = create((set) => ({
  toggleModal: "none",
  modalPayload: null,
  setToggleModal: (toggleVal) => set(() => ({ toggleModal: toggleVal, modalPayload: null })),
  setModalPayload: (modalPayload) => set(() => ({ modalPayload: modalPayload, toggleModal: "block" })),
}));
