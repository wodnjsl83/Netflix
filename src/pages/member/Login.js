import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login">
      <div className="hide-bg"></div>
      <div className="login-bx">
        <h1>Sign In</h1>
        <div className="input-bx">
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
        </div>
        <button>
          <a href="/">Sign In</a>
        </button>
        <p>
          New to Netflix? <a href="/">Sign up now.</a>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to <br />
          ensure you're not a bot. <Link>Learn more.</Link>
        </p>
        <span>
          The information collected by Google reCAPTCHA is subject to the Google
          &nbsp;
          <a href="https://policies.google.com/privacy">
            Privacy Policy{" "}
          </a>and{" "}
          <a href="https://policies.google.com/terms">Terms of Service</a>, and
          is used for providing, maintaining, and improving the reCAPTCHA
          service and for general security purposes (it is not used for
          personalized advertising by Google).
        </span>
      </div>
    </div>
  );
};

export default Login;
