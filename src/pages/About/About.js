import React from "react";
import BookDescription from "../../components/Bookcard/BookDescription";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="book-description">
        <h2>Book Description</h2>
      </div>
      <BookDescription />
    </div>
  );
};

export default About;
