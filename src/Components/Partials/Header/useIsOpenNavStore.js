import { create } from "zustand";

const useIsOpenNavStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isopen) => set(() => ({ isOpen: isopen })),
}));

export default useIsOpenNavStore;
