import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchContext from "../context/searchContext";
import SearchResults from "../components/search-result";

type Photo =  {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface Props {
  data: any;
  title : string;
}

const AlbumPage: React.FC<Props> = ({data, title}) => {

  let newData: Array<Photo>;
  const { id }: any = useParams();
  if (title === 'Album') {
  newData = data[parseInt(id)];
  } else {
    newData = data
  }
  const searchContext = useContext(SearchContext);
  let searchKey = searchContext?.searchKey;
  if (searchKey) {
    return (
      <>
        <SearchResults data={newData} />
      </>
    );
  }

  return (
    <div className="album">
      <h1 className="mb-16">
        {title} {id ? id : ""}
      </h1>
      <div className="container flex flex-wrap justify-center">
        {newData
          // .filter((items, index) => index < 20)
          .map((photo) => (
            <Link
              to={`/photo/${photo.id}`}
              key={photo.id}
              className="mr-5 mb-8 hover:underline hover:scale-110 transition-all w-1/3 md:w-auto"
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
