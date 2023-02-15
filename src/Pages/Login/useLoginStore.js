import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      userName: "",
      access_token: "",
      userInfo: "",
      setLoggedIn: (loggedIn, userInfo, userName, access_token) => set((state) => ({ ...state, loggedIn, userInfo, userName, access_token })),
      setLoggedOut: () => set(() => ({ loggedIn: false, userInfo: "", userName: "", access_token: "" })),
    }),
    { name: "user", storage: createJSONStorage(() => localStorage) }
  )
);
