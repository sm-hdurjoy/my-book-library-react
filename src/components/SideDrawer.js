// Library Imports
import { IconContext } from "react-icons";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useContext } from "react";

// Local Styles Imports
import "../styles/Sidedrawer.css";

// Components/Pages imports
import { SideDrawerData } from "../components/SideDrawerData";

const SideDrawer = () => {
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);

  const handleToggleCategories = () => {
    setIsCategoriesActive(!isCategoriesActive);
  };

  return (
    <>
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
    </>
  );
};

export default SideDrawer;
