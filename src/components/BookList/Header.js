import React from "react";

const Header = () => {
  return (
    <div className="list-item-header ">
      <div className="cover-title ">
        <h3 className="cover-image">Cover</h3>
        <h3>Book Title</h3>
      </div>
      <div className="author-ry-category ">
        <h3>Author</h3>
        <h3>Released Year</h3>
        <h3>Category</h3>
        {/* <h3>Add To FAV</h3> */}
      </div>
    </div>
  );
};

export default Header;
