import React from "react";
import GroupedPhotosComponent from "../components/image-group";
import useFetch from "../utilities/useFetch";
//import SearchResult from "../components/search-result";
import SearchBar from "../components/search-bar";

const Homepage: React.FC = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  console.log(data);
  /**
  const { searchKey : string } = useContext(SearchContext);

  *let newData : object = data?.data;
  
  if (searchKey) {
    newData = searchFilter(searchKey, newData);
    return <AlbumPage title={`Searched Results for ${searchKey}`} data={newData} />
  }
   */
  return (
    <div className="homepage">
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && !error && data && (
        <>
          <SearchBar/>
          <GroupedPhotosComponent data={data} />
        </>
      )}
    </div>
  );
};

export default Homepage;
