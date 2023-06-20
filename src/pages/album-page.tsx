import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

type Photo =  {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const AlbumPage: React.FC = ( data : any) => {

  let newData: Array<Photo>;
  const { id }: any = useParams();
  if (data.title === 'Album') {
  newData = data.data[parseInt(id)];
  } else {
    newData = data.data
  }
  console.log(newData);

  return (
    <div className="album">
      <h1 className='mb-16'>
        {data.title} {id ? id : ''}
      </h1>
      <div className="container flex flex-wrap">
        {newData
          // .filter((items, index) => index < 20)
          .map((photo) => (
            <Link
              to={`/photo/${photo.id}`}
              key={photo.id}
              className="mr-5 mb-8 hover:underline hover:scale-110 transition-all"
            >
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="rounded-xl mb-1"
              />
              <h3 className="truncate text-left">
                {photo.title.slice(0, 11)}...
              </h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AlbumPage;
