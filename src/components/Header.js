import React, { useEffect } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../modules/logincheck";
import { getCookie, removeCookie } from "../util/cookie";

const Header = () => {
  const isLogin = useSelector((state) => state.logincheck.isLogin);
  const username = getCookie("username");
  const dispatch = useDispatch();
  const logoutClick = () => {
    removeCookie("username");
    removeCookie("useremail");
    dispatch(setLogout());
  };
  useEffect(() => {
    const loop = setInterval(() => {
      const username = getCookie("username");
      if (username) {
        dispatch(setLogin());
      } else {
        dispatch(setLogout());
        clearInterval(loop);
      }
    }, 3000);
  }, [username, dispatch]);
  if (
    window.location.pathname === "/MainPage2" ||
    window.location.pathname === "/login" ||
    window.location.pathname === "/Join"
  )
    return null;
  return (
    <header>
      <div className="Menu">
        <a href="/">
          <img src="images/logo.png" />
        </a>
        {isLogin ? (
          <>
            <span> {username}님 환영합니다.</span>
            <li onClick={logoutClick}>로그아웃</li>
          </>
        ) : (
          <>
            <button>
              <a href="/login">Sign In</a>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
