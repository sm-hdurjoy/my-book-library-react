// Library Imports
import { useParams, NavLink } from "react-router-dom";
import { useContext } from "react";

// Local Styles Import
import "./Category.css";

// Component/Pages Imports
import BookListItem from "../../BookList/BookListItem";

// Contest Imports
import { BookContext } from "../../context/BookContext";
import Header from "../../BookList/Header";

const Category = () => {
  const { categoryName } = useParams();
  const { books } = useContext(BookContext);
  const filterBooks = books.filter((books) => books.category === categoryName);
  const sortedBooks = filterBooks.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="book-list">
      <div className="category-header">
        <h2>Category : {categoryName}</h2>
      </div>
      <Header />
      {sortedBooks.length > 0 ? (
        sortedBooks.map((sortedBooks) => {
          return (
            <NavLink
              key={sortedBooks.id}
              to={`/bookdescription/${sortedBooks.id}`}
              className="bookdesc"
            >
              <BookListItem
                id={sortedBooks.id}
                title={sortedBooks.title}
                releaseYear={sortedBooks.releaseYear}
                author={sortedBooks.author}
                category={sortedBooks.category}
                coverURL={sortedBooks.coverURL}
              />
            </NavLink>
          );
        })
      ) : (
        <p>Books Not Found</p>
      )}
    </div>
  );
};

export default Category;
