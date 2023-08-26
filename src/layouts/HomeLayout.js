// Library Imports
import { NavLink, Outlet } from "react-router-dom";
import { IconContext } from "react-icons";
import { useState, useContext } from "react";

// Local Styles Imports
import "../styles/Navbar.css";
import "../styles/Sidedrawer.css";

// Components/Pages imports
import Breadcrumbs from "../components/Breadcrumbs";
import { SideDrawerData } from "../components/SideDrawerData";
import BookContextProvider from "../context/BookContext";
import SearchBox from "../components/SearchBox";

const RootLayout = () => {
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);

  const handleToggleCategories = () => {
    setIsCategoriesActive(!isCategoriesActive);
  };

  // console.log(isCategoriesActive);

  return (
    <>
      <BookContextProvider>
        <header>
          <div className="website-title-current-directory">
            <h1>My Book Library</h1>
            <Breadcrumbs />
          </div>
          <nav>
            <SearchBox />
            <NavLink to="/">Home</NavLink>
            <NavLink to="addbook">Add a Book</NavLink>
            <NavLink to="signin">Sign In</NavLink>
          </nav>
        </header>
        <div className="main-body">
          <IconContext.Provider value={{ color: "#000" }}>
            <div className="nav-menu">
              <h1 className="db-h1" onClick={handleToggleCategories}>
                Categories
              </h1>
              {!isCategoriesActive && (
                <div className="categories-list">
                  {SideDrawerData.map((item, index) => (
                    <div key={index} className={item.cName}>
                      <NavLink to={`categories/${item.title}`}>
                        {item.icon}
                        <span>{item.title}</span>
                      </NavLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </IconContext.Provider>

          <main>
            <Outlet />
          </main>
        </div>
      </BookContextProvider>
    </>
  );
};

export default RootLayout;
