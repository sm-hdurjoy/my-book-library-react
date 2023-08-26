// Library Imports

// Components/Pages Imports
// Local Styles Imports
import "./BookList.css";
import BookListHeader from "./BookListHeader";

// Contest Imports

const BookList = () => {
  return (
    <div className="book-list-container">
      <div className="book-list-header">
        <h2>Book List</h2>
      </div>
      <BookListHeader />
    </div>
  );
};

export default BookList;
