// Library Imports
import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter and the Deathly Hallows",
      releaseYear: "2007",
      author: "J. K. Rowling",
      description:
        "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel in the Harry Potter series.",
      category: "Fantasy",
      numberOfBooksSold: "120 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      releaseYear: "1813",
      author: "Jane Austen",
      description:
        "Pride and Prejudice is a romantic novel by Jane Austen. It follows the emotional development of Elizabeth Bennet.",
      category: "Romance",
      numberOfBooksSold: "20 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "The Fellowship of the Ring",
      releaseYear: "1954",
      author: "J.R.R. Tolkien",
      description:
        "The Fellowship of the Ring is the first volume in J.R.R. Tolkien's high-fantasy epic, The Lord of the Rings.",
      category: "Fantasy",
      numberOfBooksSold: "100 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "The Hound of the Baskervilles",
      releaseYear: "1902",
      author: "Arthur Conan Doyle",
      description:
        "The Hound of the Baskervilles is a mystery novel by Arthur Conan Doyle featuring the detective Sherlock Holmes.",
      category: "Mystery",
      numberOfBooksSold: "25 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "The Bourne Identity",
      releaseYear: "1980",
      author: "Robert Ludlum",
      description:
        "The Bourne Identity is a fast-paced action thriller that follows Jason Bourne as he tries to unravel his own identity and the conspiracy around him.",
      category: "Action",
      numberOfBooksSold: "30 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Educated",
      releaseYear: "2018",
      author: "Tara Westover",
      description:
        "Educated is a memoir by Tara Westover, recounting her journey from growing up in a strict and isolated household to pursuing education and empowerment.",
      category: "Memoir",
      numberOfBooksSold: "5 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "1984",
      releaseYear: "1949",
      author: "George Orwell",
      description:
        "1984 is a dystopian classic that explores the dangers of totalitarianism and the impact of surveillance on individual freedom.",
      category: "Literature",
      numberOfBooksSold: "30 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      releaseYear: "1960",
      author: "Harper Lee",
      description:
        "To Kill a Mockingbird is a coming-of-age novel that addresses themes of racial injustice and moral growth in the American South.",
      category: "Literature",
      numberOfBooksSold: "50 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      title: "Maus",
      releaseYear: "1986",
      author: "Art Spiegelman",
      description:
        "Maus is a graphic novel that depicts the author's father's experiences as a Polish Jew and Holocaust survivor.",
      category: "GraphicNovel",
      numberOfBooksSold: "2 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      title: "The Alchemist",
      releaseYear: "1988",
      author: "Paulo Coelho",
      description:
        "The Alchemist follows Santiago's journey to discover his personal legend as he embarks on a quest to find hidden treasure.",
      category: "Fiction",
      numberOfBooksSold: "150 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 11,
      title: "Gone Girl",
      releaseYear: "2012",
      author: "Gillian Flynn",
      description:
        "Gone Girl is a psychological thriller that delves into the complexities of a marriage, secrets, and manipulation.",
      category: "Mystery",
      numberOfBooksSold: "20 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      title: "The Night Circus",
      releaseYear: "2011",
      author: "Erin Morgenstern",
      description:
        "The Night Circus is a fantasy novel set within a magical, enchanting circus that appears only at night.",
      category: "Fantasy",
      numberOfBooksSold: "5 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 13,
      title: "The Notebook",
      releaseYear: "1996",
      author: "Nicholas Sparks",
      description:
        "The Notebook is a romance novel that follows the love story of Noah and Allie, spanning decades.",
      category: "Romance",
      numberOfBooksSold: "12 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 14,
      title: "The Da Vinci Code",
      releaseYear: "2003",
      author: "Dan Brown",
      description:
        "The Da Vinci Code is a mystery thriller that explores religious symbolism and conspiracy theories.",
      category: "Mystery",
      numberOfBooksSold: "80 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 15,
      title: "The Hunger Games",
      releaseYear: "2008",
      author: "Suzanne Collins",
      description:
        "The Hunger Games is a dystopian series where participants are forced to compete in a deadly televised competition.",
      category: "Action",
      numberOfBooksSold: "100 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 16,
      title: "Bossypants",
      releaseYear: "2011",
      author: "Tina Fey",
      description:
        "Bossypants is a humorous memoir by Tina Fey, sharing her experiences in comedy and television.",
      category: "Memoir",
      numberOfBooksSold: "3 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 17,
      title: "Jane Eyre",
      releaseYear: "1847",
      author: "Charlotte Brontë",
      description:
        "Jane Eyre is a classic novel that follows the life of an orphan, Jane, as she navigates love and challenges.",
      category: "Literature",
      numberOfBooksSold: "10 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 18,
      title: "Watchmen",
      releaseYear: "1986",
      author: "Alan Moore",
      description:
        "Watchmen is a graphic novel that deconstructs superhero tropes while exploring complex themes.",
      category: "GraphicNovel",
      numberOfBooksSold: "5 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 19,
      title: "The Catcher in the Rye",
      releaseYear: "1951",
      author: "J.D. Salinger",
      description:
        "The Catcher in the Rye is a classic novel that follows the thoughts and experiences of Holden Caulfield.",
      category: "Literature",
      numberOfBooksSold: "65 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 20,
      title: "A Court of Thorns and Roses",
      releaseYear: "2015",
      author: "Sarah J. Maas",
      description:
        "A Court of Thorns and Roses is a fantasy novel that follows a mortal huntress in a world of faeries.",
      category: "Fantasy",
      numberOfBooksSold: "7 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 21,
      title: "The Great Gatsby",
      releaseYear: "1925",
      author: "F. Scott Fitzgerald",
      description:
        "The Great Gatsby is a classic fiction novel that captures the decadence and disillusionment of the Jazz Age.",
      category: "Fiction",
      numberOfBooksSold: "25 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 22,
      title: "Brave New World",
      releaseYear: "1932",
      author: "Aldous Huxley",
      description:
        "Brave New World is a dystopian fiction that envisions a society controlled by technology and consumerism.",
      category: "Fiction",
      numberOfBooksSold: "15 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 23,
      title: "The Kite Runner",
      releaseYear: "2003",
      author: "Khaled Hosseini",
      description:
        "The Kite Runner is a fiction novel that explores themes of friendship, betrayal, and redemption in Afghanistan.",
      category: "Fiction",
      numberOfBooksSold: "31 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 24,
      title: "Steve Jobs",
      releaseYear: "2011",
      author: "Walter Isaacson",
      description:
        "Steve Jobs is a biography of the co-founder of Apple Inc., detailing his life, career, and impact on technology and design.",
      category: "Biography",
      numberOfBooksSold: "10 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 25,
      title: "Becoming",
      releaseYear: "2018",
      author: "Michelle Obama",
      description:
        "Becoming is a memoir by former First Lady Michelle Obama, recounting her personal journey and experiences in the White House.",
      category: "Biography",
      numberOfBooksSold: "15 million",
      coverURL:
        "https://images.pexels.com/photos/16998973/pexels-photo-16998973/free-photo-of-monumental-columns-in-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
