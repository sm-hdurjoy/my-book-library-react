// Library Imports

// Components/Pages Imports
import BookDescription from "../../components/Bookcard/BookDescription";

// Local Styles Imports
import "./BookDescriptionHeader.css";

const BookDescriptionHeader = () => {
  return (
    <div className="about">
      <div className="book-description">
        <h2>Book Description</h2>
      </div>
      <BookDescription />
    </div>
  );
};

export default BookDescriptionHeader;
