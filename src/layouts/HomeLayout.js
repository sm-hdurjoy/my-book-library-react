// Library Imports
import { NavLink, Outlet, Link } from "react-router-dom";
import { IconContext } from "react-icons";

import "../styles/Navbar.css"
import "../styles/Sidedrawer.css"

// Pages imports
import Breadcrumbs from "../components/Breadcrumbs";
import { SideDrawerData } from "../components/SideDrawerData";

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
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
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
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </IconContext.Provider>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
