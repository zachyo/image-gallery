import React, { useContext } from "react";
import GroupedPhotosComponent from "../components/image-group";
import useFetch from "../utilities/useFetch";
//import SearchResult from "../components/search-result";
import SearchContext, { SearchProvider } from "../context/searchContext";
import { searchFilter } from "../utilities/searchFilter";
import AlbumPage from "./album-page";
import SearchResults from "../components/search-result";

const Homepage: React.FC = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  console.log(data);
  const searchContext = useContext(SearchContext);
  let searchKey = searchContext?.searchKey;
  let newData = data?.data;

  if (searchKey) {
    // newData = searchFilter(searchKey, data);
    // console.log(searchKey, data, newData);

    return (
      <>
        <SearchResults
          data={newData}
        />
      </>
    );
  }
  return (
    <div className="homepage">
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && !error && data && (
        <>
          <GroupedPhotosComponent data={data} />
        </>
      )}
    </div>
  );
};

export default Homepage;
