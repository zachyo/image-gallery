import React from "react";
import { useParams } from "react-router-dom";
import usePhotoStore from "../store/photoStore";
import useFavoriteStore from "../store/favoriteStore";

const FullPhoto: React.FC = () => {
  const { id } : any = useParams<{ id: string }>();
  const groupedPhotos = usePhotoStore((state)=> state.groupedPhotos)
  const setFavoritePhotos = useFavoriteStore((state)=> state.setFavoritePhotos)
  let newId = Math.ceil(parseInt(id) / 50);
  let arrayId = (id - 50 * (newId - 1)) - 1
  const photo = groupedPhotos[newId][arrayId];

  console.log(photo, Math.ceil(parseInt(id) / 50));

  return (
    <div className="full-photo">
        <img
          src={photo.url}
          alt={photo.title}
          className="rounded-xl"
        />
        <div className="photo-deets text-left">
          <h2>Name : {photo.title}</h2>
          <h3>Album ID : {photo.albumId}</h3>
          <h3>Photo ID : {id}</h3>
          <button onClick={()=> setFavoritePhotos(photo)}>Favorite</button>
        </div>
    </div>
  );
};

export default FullPhoto;
