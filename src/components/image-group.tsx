import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePhotoStore from "../store/photoStore";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface GroupedPhotos {
  [albumId: number]: Photo[];
}

const GroupedPhotosComponent: React.FC = (data: any | null) => {
  const setGroupedPhotos = usePhotoStore((state) => state.setGroupedPhotos);

  const groupedPhotos: GroupedPhotos = {};

  // Group photos by albumId
  data?.data.forEach((photo: Photo) => {
    if (!groupedPhotos[photo.albumId]) {
      groupedPhotos[photo.albumId] = [];
    }
    groupedPhotos[photo.albumId].push(photo);
  });

  useEffect(() => {
    setGroupedPhotos(groupedPhotos);
  }, []);
  // console.log(groupedPhotos);
  return (
    <div className="container flex flex-wrap">
      {Object.keys(groupedPhotos)
        .filter((items, index) => index < 15)
        .map((albumId) => (
          <Link
            to={`/album/${albumId}`}
            key={albumId}
            className="mr-5 mb-8 hover:underline hover:scale-105 transition-all"
          >
            <h2 className="text-left mb-2">Album {albumId}</h2>
            {groupedPhotos[parseInt(albumId)]
              .filter((items, index) => index < 1)
              .map((photo) => (
                <div key={photo.id}>
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="rounded-xl hover:scale-110"
                  />
                </div>
              ))}
          </Link>
        ))}
    </div>
  );
};

export default GroupedPhotosComponent;
