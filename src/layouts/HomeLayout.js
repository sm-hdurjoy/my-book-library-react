// Library Imports
import { Outlet } from "react-router-dom";

// Local Styles Imports

// Components/Pages imports
import BookContextProvider from "../context/BookContext";
import NavBar from "../components/NavBar";
import SideDrawer from "../components/SideDrawer";

const RootLayout = () => {
  return (
    <>
      <BookContextProvider>
        <header>
          <NavBar />
        </header>
        <div className="main-body">
          <SideDrawer />

          <main>
            <Outlet />
          </main>
        </div>
      </BookContextProvider>
    </>
  );
};

export default RootLayout;
