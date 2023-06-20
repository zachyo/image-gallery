import React, { useContext } from "react";
import GroupedPhotosComponent from "../components/image-group";
import useFetch from "../utilities/useFetch";
import SearchContext from "../context/searchContext";
import SearchResults from "../components/search-result";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const searchContext = useContext(SearchContext);
  let searchKey = searchContext?.searchKey;
  let newData = data?.filter((items: any, index: number) => index < 15);

  if (searchKey) {
    return (
      <>
        <SearchResults data={newData} />
      </>
    );
  }
  return (
    <div className="homepage">
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && !error && data && <GroupedPhotosComponent data={data} />}
      <h1 className="text-2xl">
        View your favorites{" "}
        <Link to={"/favorites"} className="text-2xl hover:underline">
          here
        </Link>
      </h1>
    </div>
  );
};

export default Homepage;
