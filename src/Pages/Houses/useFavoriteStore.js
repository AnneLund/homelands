import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
  favorites: [],
  setFavorite: (favorite) => set((state) => ({ favorite: [state.favorite, favorite] })),
}));
