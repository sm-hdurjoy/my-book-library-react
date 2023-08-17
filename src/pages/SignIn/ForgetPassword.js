import { Form } from "react-router-dom";
import "./FogetPassword.css"

const ForgetPassword = () => {
  return (
    <>
      <div className="forget-password-container">
        <div className="forget-password-text">
          <h3>Reset Your Password Here!!</h3>
        </div>

        <Form className="forget-pass-form">
          <input
            className="email-input"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </Form>
        <button className="reset-pass-btn">Reset Password</button>
      </div>
    </>
  );
};

export default ForgetPassword;
