import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import AlbumPage from "./pages/album-page";
import FullPhoto from "./pages/full-photo";
import usePhotoStore from "./store/photoStore";
import useFavoriteStore from "./store/favoriteStore";
import { SearchProvider } from "./context/searchContext";
import SearchBar from "./components/search-bar";

function App() {
  const groupedPhotos = usePhotoStore((state) => state.groupedPhotos);
  const favoritePhotos = useFavoriteStore((state) => state.favoritePhotos);


  return (
    <div>
      <SearchProvider>
        <h1 className="text-3xl text-white font-bold mt-12 mb-24">
          <Link to={"/"}>Image Gallery</Link>
        </h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="album/:id"
            element={<AlbumPage title="Album" data={groupedPhotos} />}
          />
          <Route path="photo/:id" element={<FullPhoto />} />
          <Route
            path="favorites"
            element={<AlbumPage title="Favorites" data={favoritePhotos} />}
          />
        </Routes>
        
      </SearchProvider>
    </div>
  );
}

export default App;
