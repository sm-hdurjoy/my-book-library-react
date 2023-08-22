// Library Imports
import { NavLink } from "react-router-dom";
import { useContext } from "react";

// Local Styles import
import "./Home.css";

// Components/Pages Import
import BookCard from "../../components/Bookcard/BookCard";
import BookList from "../../BookList/BookList";
import BookListItem from "../../BookList/BookListItem";
 
// Context Imports
import { BookContext } from "../../context/BookContext";

const Home = () => {
  // Fetch data from json server
  const { books } = useContext(BookContext);

  return (
    <>
      <div className="trending">
        <div className="trending-books">
          <h2>Trending books</h2>
        </div>
        <div className="carousel-container">
          <BookCard />
          <BookCard />
        </div>
      </div>

      <div className="book-list">
        <BookList />
        {books.length > 0 ? (
          books.map((books) => {
            return (
              <NavLink
                key={books.id}
                to={`/bookdescription/${books.id}`}
                className="bookdesc"
              >
                <BookListItem
                  id={books.id}
                  title={books.title}
                  releaseYear={books.releaseYear}
                  author={books.author}
                  category={books.category}
                  coverURL={books.coverURL}
                />
              </NavLink>
            );
          })
        ) : (
          <p>Books Not Found</p>
        )}
      </div>
    </>
  );
};

export default Home;
