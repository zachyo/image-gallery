import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface favoriteStoreState {
  favoritePhotos: Array<any>;
  setFavoritePhotos: (obj: Record<string, any>) => void;
}

const favoriteStore = (
  set: (fn: (state: favoriteStoreState) => favoriteStoreState) => void
): favoriteStoreState => ({
  //this should be an empty object
  favoritePhotos: [],
  setFavoritePhotos: (obj) => {
    set((state) => ({
      ...state,
      favoritePhotos: state.favoritePhotos.includes(obj) ? state.favoritePhotos : [...state.favoritePhotos,obj],
    }));
  },
});

const useFavoriteStore = create(
  devtools(
    persist(favoriteStore, {
        name : 'favoriteStore'
    })
  )
);

export default useFavoriteStore;
