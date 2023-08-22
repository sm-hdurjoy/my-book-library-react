import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedBook, setSearchedBook] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const { books } = bookContextData;
      console.log(searchValue);
      const foundBook = books.find((books) => books.title === searchValue);

      setSearchedBook(foundBook);
      console.log(searchedBook);
      setSearchValue("");
    }
  };
  const bookContextData = useContext(BookContext);

  return (
    <div>
      <input
        className="search-box"
        placeholder="Search a book..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};

export default SearchBox;
