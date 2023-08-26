//  Library imports
import { Outlet } from "react-router-dom";
import React from "react";

// Local Styles Imports
import "./SigninLayout.css";
import SignIn from "../pages/SignIn/SignIn";

const SignInLayout = () => {
  return (
    <React.Fragment>
      <SignIn />

      <Outlet />
    </React.Fragment>
  );
};

export default SignInLayout;
