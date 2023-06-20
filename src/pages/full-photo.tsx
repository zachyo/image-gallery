import React from "react";
import { useParams } from "react-router-dom";
import usePhotoStore from "../store/photoStore";
import useFavoriteStore from "../store/favoriteStore";

const FullPhoto: React.FC = () => {
  const { id } : any = useParams<{ id: string }>();
  const groupedPhotos = usePhotoStore((state)=> state.groupedPhotos)
  const setFavoritePhotos = useFavoriteStore((state)=> state.setFavoritePhotos)
  const photo = groupedPhotos[Math.ceil(parseInt(id) / 50)][id-1];

  // console.log(groupedPhotos[1][5], photo, Math.ceil(parseInt(id)/50), favoritePhotos)

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
