// Library Imports
import { FaGratipay } from "react-icons/fa";

// Components/Pages Imports

// Local Styles Imports
import "./BookListItem.css";

// Context Imports

const BookListItem = ({
  id,
  title,
  releaseYear,
  author,
  category,
  coverURL,
}) => {
  return (
    <div key={id} className="book-list-item-container">
      <div className="bli-cover-title">
        <img className="bli-cover" src={coverURL} alt={title} />
        <h3 className="bli-title">{title}</h3>
      </div>
      <div className="bli-author-ry-category">
        <h3>{author}</h3>
        <h3>{releaseYear}</h3>
        <h3>{category}</h3>
        {/* <FaGratipay className="fav-icon" /> */}
      </div>
    </div>
  );
};

export default BookListItem;
