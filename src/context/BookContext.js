// Library Imports
import React, { createContext, useEffect } from "react";

// Components/Pages imports
import {
  getBookById,
  getBooks,
  getBooksByCategory,
} from "../GetBooksAPI/GetBooks";

// Exporting the book context
export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  const context = {
    getBookById,
    getBooks,
    getBooksByCategory,
  };

  return (
    <BookContext.Provider value={{ ...context }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
