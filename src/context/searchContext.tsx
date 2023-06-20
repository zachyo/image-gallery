import { useState, createContext, ReactNode } from "react";

interface SearchContextType {
  searchKey: string | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchKey, setSearchKey] = useState<string | undefined>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const contextValue: SearchContextType = {
    searchKey,
    handleChange,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

export default SearchContext;
