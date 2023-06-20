import { useState } from "react";
import { createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState();
  const [cardList, setCardList] = useState([])
  //searching system
  const handleChange = (event) => {
    setSearchKey(event.target.value);
  };
  return (
    <SearchContext.Provider value={{ searchKey, cardList, handleChange, setCardList }}>
      {children}
    </SearchContext.Provider>
  );
};

// {
//   searchVal: undefined,
//   setsearchVal: () => {},
// }

export default SearchContext;

