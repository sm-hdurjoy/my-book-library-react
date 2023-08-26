// Library Imports
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Local Styles import
import "./Home.css";

// Components/Pages Import
import BookCard from "../../components/Bookcard/BookCard";
import BookList from "../../components/BookList/BookList";
import BookListItem from "../../components/BookList/BookListItem";

// Context Imports
import { BookContext } from "../../context/BookContext";

const Home = () => {
  const [isTrendingBookActive, setisTrendingBookActive] = useState(false);

  const [books, setBooks] = useState([])
  // Fetch data from json server
  const { getBooks } = useContext(BookContext);

  useEffect( () => {
    getBooks().then(data => setBooks(data))
  },[])

  const handleTrendingBookToggle = () => {
    setisTrendingBookActive(!isTrendingBookActive);
  };

  console.log(isTrendingBookActive);

  return (
    <>
      <div className="trending">
        <div className="trending-books" onClick={handleTrendingBookToggle}>
          <h2>Trending books</h2>
        </div>
        {!isTrendingBookActive && (
          <div className="carousel-container">
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        )}
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
