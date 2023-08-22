// Local Styles Imports
import "./Bookcard.css";

const BookCard = (props) => {
  return (
    <div className="card-container">
      <img
        className="book-card-image"
        src="https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <h3 className="book-title">Harry Potter and the Deathly Hallows</h3>
      <p className="card-author">J. K. Rowling</p>
      <p className="card-category">Fantasy</p>
    </div>
  );
};

export default BookCard;
