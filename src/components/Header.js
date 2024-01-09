import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="Menu">
        <a href="/">
          <img src="images/logo.png" />
        </a>
        <button>
          <a href="/login">Sign In</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
