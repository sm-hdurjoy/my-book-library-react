// Library Imports
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages Imports
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";

// Layout Imports
import HomeLayout from "./layouts/HomeLayout";
import SignInLayout from "./layouts/SignInLayout";
import ForgetPassword from "./pages/SignIn/ForgetPassword";

// Creating Browser Router Function
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="signin" element={<SignInLayout />}>
        <Route path="forgetPassword" element={<ForgetPassword />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
