// Library Imports
import { NavLink, Outlet, Link } from "react-router-dom";
import { IconContext } from "react-icons";

// Local Styles Imports
import "../styles/Navbar.css";
import "../styles/Sidedrawer.css";

// Components/Pages imports
import Breadcrumbs from "../components/Breadcrumbs";
import { SideDrawerData } from "../components/SideDrawerData";
import BookContextProvider from "../context/BookContext";

const RootLayout = () => {
  return (
    <>
      <header>
        <div className="website-title-current-directory">
          <h1>My Book Library</h1>
          <Breadcrumbs />
        </div>
        <nav>
          <input className="search-box" placeholder="Search a book..."></input>
          <NavLink to="/">Home</NavLink>
          <NavLink to="addbook">Add a Book</NavLink>
          <NavLink to="signin">Sign In</NavLink>
        </nav>
      </header>
      <div className="main-body">
        <IconContext.Provider value={{ color: "#000" }}>
          <div className="nav-menu">
            <h1 className="db-h1">Categories</h1>
            {SideDrawerData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <NavLink to={`categories/${item.title}`}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </IconContext.Provider>

        <main>
          <BookContextProvider>
            <Outlet />
          </BookContextProvider>
        </main>
      </div>
    </>
  );
};

export default RootLayout;
