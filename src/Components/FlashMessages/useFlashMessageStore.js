import { create } from "zustand";

const useFlashMessageStore = create((set) => ({
  flashMessages: [],
  flashDuration: 3000,
  setFlashMessage: (flashMessages) => set((state) => ({ flashMessages: [...state.flashMessages, flashMessages] })),
}));

export default useFlashMessageStore;
