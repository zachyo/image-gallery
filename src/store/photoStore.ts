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

const usePhotoStore = create(photoStore)
//   devtools(
//     persist(photoStore, {
//       // storage: createJSONStorage(() => sessionStorage),
//       /* storage: createJSONStorage(() => sessionStorage),
//       (optional) by default, 'localStorage' is used
//       */
//     })
//   )
// );

export default usePhotoStore;
