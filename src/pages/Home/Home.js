// Library Import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Local Styles import
import "./Home.css";
import BookCard from '../../components/Bookcard/BookCard';

const Home = () => {

  return (
    <div className="home">
      <div className="trending-books">
        <h2>Trending books</h2>
      </div>
      <div className="carousel-container">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default Home;
