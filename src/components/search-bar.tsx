import { useContext, ChangeEvent } from "react";
import React from "react";

import search from "../assets/search.svg";
// import SearchContext from '../context/searchContext'


const SearchBar: React.FC = () => {
  // const { handleChange } = useContext(SearchContext);

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   handleChange(event.target.value);
  // };

  return (
    <div className="search-bar flex px-6 my-4 mb-0 md:my-4 space-x-5">
      <img src={search} alt="" />
      <input
        type="text"
        placeholder="Search..."
        // onChange={handleInputChange}
        className="w-full text-light p-2 bg-transparent border-none focus:border-none focus:border-b"
      />
    </div>
  );
};

export default SearchBar;
