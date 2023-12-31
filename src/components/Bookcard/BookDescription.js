// Library Imports
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Components/Pages Imports

// Local Styles Imports
import "./BookDescription.css";

// Contest Imports
import { BookContext } from "../../context/BookContext.js";

const BookDescription = () => {
  const { getBookById } = useContext(BookContext);
  const { bookId } = useParams();
  const selectedBookID = parseInt(bookId, 10);

  const [selectedBook, setSelectedBook] = useState();

  useEffect(() => {
    getBookById(selectedBookID).then((data) => setSelectedBook(data));
  }, []);

  return (
    <div className="book-description-container">
      {selectedBook && (
        <>
          <div className="book-description-image-container">
            <img
              className="book-description-image"
              src={selectedBook.coverURL}
              alt=""
            />
          </div>
          <div className="book-description-info">
            <h1 className="book-description-title">{selectedBook.title}</h1>
            <h2 className="book-description-author">
              Author : {selectedBook.author}
            </h2>
            <h3 className="book-description-category">
              Category : {selectedBook.category}
            </h3>
            <h3 className="book-description-released-year">
              Released Year : {selectedBook.releaseYear}
            </h3>
            <h3 className="book-description-sold">
              Books Sold : {selectedBook.numberOfBooksSold}
            </h3>
            <h3 className="book-description-desc">
              {selectedBook.description}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDescription;
