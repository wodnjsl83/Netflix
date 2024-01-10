import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { API_URL } from "../../config/apiurl";
import { Link, useNavigate } from "react-router-dom";
import { goToHome, setLogin } from "../../modules/logincheck";

const Login = () => {
  //input입력값 상태관리
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userid: "",
    userpass: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    //form전송이벤트 제거
    e.preventDefault();
    //인풋에 입력되었는지 체크
    if (loginData.userid === "" || loginData.userpass === "") {
      alert("아이디와 비밀번호를 다시 입력해주세요");
    } else {
      axios
        .post(`${API_URL}/login`, loginData)
        .then((result) => {
          const { m_no, m_email } = result.data[0];
          if (m_no && m_email) {
            dispatch(setLogin());
            dispatch(goToHome(navigate));
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div id="login">
      <div className="hide-bg"></div>
      <form className="login-bx" onSubmit={onSubmit}>
        <h1>Sign In</h1>
        <div className="input-bx">
          <input
            type="text"
            name="userid"
            placeholder="Email or phone number"
            value={loginData.userid}
            onChange={onChange}
          />
          <input
            type="password"
            name="userpass"
            value={loginData.userpass}
            placeholder="Password"
            onChange={onChange}
          />
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
      </form>
    </div>
  );
};

export default Login;
