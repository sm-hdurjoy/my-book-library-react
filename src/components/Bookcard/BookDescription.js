import "./BookDescription.css";

const BookDescription = () => {
  return (
    <div className="book-description-container">
      <div className="book-description-image-container">
        <img
          className="book-description-image"
          src="https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="book-description-info">
        <h1 className="book-description-title">
          Harry Potter and the Deathly Hallows
        </h1>
        <h2 className="book-description-author">Author : J. K. Rowling</h2>
        <h3 className="book-description-category">Category : Fantasy</h3>
        <h3 className="book-description-released-year">Released Year : 2007</h3>
        <h3 className="book-description-sold">Books Sold : 120 million</h3>
        <h3 className="book-description-desc">
          Harry Potter and the Deathly Hallows is a fantasy novel
          written by<br/> British author J. K. Rowling and the seventh and final
          novel in the Harry Potter series.
        </h3>
      </div>
    </div>
  );
};

export default BookDescription;
