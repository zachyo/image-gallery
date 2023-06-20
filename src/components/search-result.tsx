import React, { useContext } from "react";
import SearchContext from "../context/searchContext";
import { searchFilter } from "../utilities/searchFilter";
import { Link } from "react-router-dom";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
interface Props {
  data: Array<Photo>;
}

const SearchResults: React.FC<Props> = ({data}) => {
  const searchContext = useContext(SearchContext);
  let searchKey = searchContext?.searchKey;
  let newData = data;
  console.log(newData);

  if (searchKey) {
    newData = searchFilter(searchKey, newData);
  }

  return (
    <div className="album">
      <h1 className="mb-16">
        Searched Results for '{searchKey}'
      </h1>
      <div className="container flex flex-wrap">
        {newData.length === 0 ? <p className="mx-auto my-0">No match found!</p> : ''}
        {newData
          // .filter((items, index) => index < 20)
          .map((photo : Photo) => (
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

export default SearchResults;
