// Library Imports
import { NavLink } from "react-router-dom";

// Local Styles Imports
import "../styles/Navbar.css";

// Components/Pages imports
import Breadcrumbs from "../components/Breadcrumbs";
import SearchBox from "../components/SearchBox";

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
