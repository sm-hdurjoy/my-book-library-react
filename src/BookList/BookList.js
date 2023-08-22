// Library Imports

// Components/Pages Imports
// Local Styles Imports
import "./BookList.css";
import Header from "./Header";

// Contest Imports

const BookList = () => {
  return (
    <div className="book-list-container">
      <div className="book-list-header">
        <h2>Book List</h2>
      </div>
      <Header />
    </div>
  );
};

export default BookList;
