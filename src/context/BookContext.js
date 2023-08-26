// Library Imports
import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  const getBookById = async (id) => {
   let url = `http://localhost:3001/books/?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      return data[0];
    } else {
      return "Data not found";
    }
  };

  const getBooks = async () => {
    let url = `http://localhost:3001/books/`;
     const res = await fetch(url);
     const data = await res.json();
     if (data) {
       return data;
     } else {
       return "Data not found";
     }
   };

   const getBooksByCategory = async (category) => {
    let url = `http://localhost:3001/books/?category=${category}`;
     const res = await fetch(url);
     const data = await res.json();
     if (data) {
       return data;
     } else {
       return "Data not found";
     }
   };

  const context = {
    getBookById,
    getBooks,
    getBooksByCategory
  };

  return (
    <BookContext.Provider value={{ ...context }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
