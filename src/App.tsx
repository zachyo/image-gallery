import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import AlbumPage from "./pages/album-page";
import FullPhoto from "./pages/full-photo";
import usePhotoStore from "./store/photoStore";
import useFavoriteStore from "./store/favoriteStore";

function App() {
  const groupedPhotos = usePhotoStore((state) => state.groupedPhotos);
  const favoritePhotos = useFavoriteStore((state) => state.favoritePhotos);


  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-24">Image Gallery</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="album/:id" element={<AlbumPage title='Album' data={groupedPhotos} />} />
        <Route path="photo/:id" element={<FullPhoto />} />
        <Route path='favorites' element={<AlbumPage title='Favorites' data={favoritePhotos} />} />
      </Routes>
    </div>
  );
}

export default App;
