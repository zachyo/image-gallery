import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";


interface PhotoStoreState {
  groupedPhotos: Record<string, any>;
  setGroupedPhotos: (obj: Record<string, any>) => void;
}

const photoStore = (
  set: (fn: (state: PhotoStoreState) => PhotoStoreState) => void
): PhotoStoreState => ({
  //this should be an empty object
  groupedPhotos: {},
  setGroupedPhotos: (obj) => {
    set((state) => ({
      ...state,
      groupedPhotos: obj,
    }));
  },
});

const usePhotoStore = create(
  devtools(
    persist(photoStore, {
      name: "photoStore",
      getStorage: () => sessionStorage,
    })
  )
);


export default usePhotoStore;
