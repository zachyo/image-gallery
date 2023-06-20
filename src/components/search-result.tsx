import React from "react";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const SearchResult : React.FC = (data : any) => {

    return ( 
    <div className="search-result">{
        data
        .map((photo : Photo) => (
          <div key={photo.id}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="rounded-xl"
            />
            <h3 className="truncate">{photo.title}</h3>
          </div>
    }</div> 
    );
};
 
export default SearchResult;