// Library Imports
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Components/Pages Imports
import Home from "./pages/Home/Home";
import BookDescription from "./pages/Book Description/BookDescriptionHeader";
import AddBook from "./pages/Add Book/AddBook";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category/Category";
import ForgetPassword from "./pages/SignIn/ForgetPassword";

// Layout Imports
import HomeLayout from "./layouts/HomeLayout";
import SignInLayout from "./layouts/SignInLayout";

// Creating Browser Router Function
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="/bookdescription/:bookId" element={<BookDescription />} />
      <Route path="addbook" element={<AddBook />} />
      <Route path="/categories/:categoryName" element={<Category />} />
      <Route path="signin" element={<SignInLayout />}>
        <Route path="forgetPassword" element={<ForgetPassword />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
