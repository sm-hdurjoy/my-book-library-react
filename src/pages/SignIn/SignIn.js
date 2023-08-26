//  Library imports
import React from "react";
import { NavLink, Form } from "react-router-dom";

// Local Styles Imports
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <div className="signin-container ">
        {" "}
        {/* Sign In Container START */}
        <div className="signin-text ">
          {" "}
          {/* Sign In Container text START */}
          <h1>Sign In</h1>
          <h3>Sign in and start managing your books!</h3>
        </div>{" "}
        {/* Sign In Container text END */}
        <Form className="signin-form ">
          <input
            className="email-input"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
          <input
            className="password-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </Form>
        <div className="remember-me-forget-pass">
          <div className="remember-me">
            <input type="checkbox" name="remember" />
            <p>Remember Me</p>
          </div>

          <NavLink className="forget-password" to="forgetPassword">
            Forget Password ?
          </NavLink>
        </div>
        <button className="signin-btn">Sign In</button>
      </div>{" "}
      {/* Sign In Container END */}
    </>
  );
};

export default SignIn;
