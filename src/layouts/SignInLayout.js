import { NavLink, Form, Outlet } from "react-router-dom";

import React from "react";

const SignInLayout = () => {
  return (
    <React.Fragment>
      <div className="signin-container">
        <div className="signin-text">
          <h1>Sign In</h1>
          <h3>Sign in and start managing your books!</h3>
        </div>

        <Form>
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
      </div>
      <div>
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default SignInLayout;
