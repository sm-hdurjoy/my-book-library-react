import { Form } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="signin-container">
      <div className="signin-text">
        <h3>Reset Your Password Here!!</h3>
      </div>

      <Form>
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
  );
};

export default ForgetPassword;
